const express = require('express');
const bodyParser = require('body-parser');

const bodyParser = require('body-parser');
const md5 = require('md5')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const app = express();
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db("GameShop");
  const users = dbo.collection("Users");

  //Register(name and surname, email, phone number, password) => error | add new user to database | user exists
  app.post('/register', (req, res)=>{
	  const {name, email, phone, password} = req.body;
	  let hash=md5(password);
	  let cart=[];
    let myUser={name,email,phone,hash,cart};
    let query={email,phone};
    users.find(query).toArray((err, result) => {
      if (err) throw err;
      let count = Object.keys(result).length;
      if(count==0){
        users.insertOne(myUser, (err, result) => {
		      if (err) throw err;
          console.log("1 document inserted (user)");
          
          let myOrders = {UserId: result.insertedId, Orders:[]}
          dbo.collection("Orders").insertOne(myOrders,(err) => {
            if(err) throw err;
            console.log("1 document inserted (orders")
          })

		      res.status(201).json("User Created");
        })
      }
      else{
		    res.status(401).json("Email or phone number already in use!");
      }
    });
  })
  
  //SignIn(email, password) => error | user: {id, name , email, cart, orders}
  app.post('/signin', (req, res)=>{
	  const {email, password} = req.body;
    let hash=md5(password);
    users.find({"email":email}).toArray((err, result) => {
	  if (err) throw err;
     let count = Object.keys(result).length;
		  if(count!=0 && result[0].hash!=hash){
			res.status(401).status('Wrong password');
		  }
		  else{
        dbo.collection("Orders").find({"UserId": result[0]._id}).toArray((err,result2)=>{
          if(err) throw err;
          if(result2){
            
            let user = {id: result[0]._id, name: result[0].name, email: result[0].email, cart: result[0].cart, orders: result2[0].Orders};
						res.json(user);
          }
        })
			}
    });
  })

  //returns all games in db.Games
  app.get('/games', (req, res)=>{
      dbo.collection("Games").find().toArray((err, result) => {
        if(err) throw err;
        if(result){
          res.json(result);
        }
      })
  })

  //AddToCart(userID, orderID) => error | new cart
  app.put('/addToCart',(req,res)=>{
      const {userId,orderId}=req.body;
      users.find().toArray((err,result)=>{
        if(err) throw err;
        let count = result.length;
        if(count==0){
          res.status(400).json(['no user']);
        }
        else {
          result.forEach(user=>{
            if(user._id == userId){
              let num = null;
              for (var i=0; i < user.cart.length; i++) {
                if (user.cart[i].orderId === orderId) {
                  num = user.cart[i].num;
                }
              }
              if(num == null){ num = 1;}
              else  {num = num+1;}
              console.log(num);
              if(num == 1){
              console.log(users.updateOne(
                {"_id": user._id},
                { $push: { "cart" : {orderId , num } } },
                {multi: true,
                useNewUrlParser: true}, 
                function(err){
                    console.log(err);
                }
              ))
              }
              else if (num<=5){
                  console.log(users.updateOne(
                  {"_id": user._id,'cart.orderId':orderId},
                  { $set: { 'cart.$.num' :  num  } },
                  {multi: true,
                  useNewUrlParser: true}, 
                  function(err){
                    console.log(err);
                  }
                )) 
              }
             setTimeout(function(){users.find(user._id).toArray((err,result)=>{
              if(err) throw err;
               res.json(result[0].cart);
             })},50)
            }
          })
        }
      })
  })

  //CancelItem(userID, orderID) => error | new cart
  app.put('/cancelItem',(req,res)=>{
    const {userId,orderId}=req.body;
      users.find().toArray((err,result)=>{
        if(err) throw err;
        let count = result.length;
        if(count==0){
          res.status(400).json(['no user']);
        }
        else {
          result.forEach(user=>{
            for (var i=0; i < user.cart.length; i++) {
                if (user.cart[i].orderId === orderId) {
                  num = user.cart[i].num;
                }
            }

            if(user._id == userId){
              num = num - 1;
              if(num <=0){
                console.log(users.updateOne(
                {"_id": user._id},
                { $pull: { "cart" :{ "orderId" : orderId} } },
                {multi: true,
                useNewUrlParser: true}, 
                function(err){
                   console.log(err);
                }));
              }
              else{
              console.log(users.updateOne(
                  {"_id": user._id,'cart.orderId':orderId},
                  { $set: { 'cart.$.num' :  num  } },
                  {multi: true,
                  useNewUrlParser: true}, 
                  function(err){
                    console.log(err);
                  }
             ))}

              setTimeout(function(){users.find({ '_id': user._id }).toArray((error1, result) => {
                if (error1)
                  throw error1;
                if (result[0]) {
                  console.log(result);
                  console.log(result[0].cart);
                  res.json(result[0].cart);
                }
                else {
                  console.log("No user found 179");
                }
              })},50)
            }
          })
        }
      })  
  })

  //Order(userId) => error | new orders
  app.put('/order',(req,res)=>{
    const {userId}=req.body;
    console.log("usao u /order");
    users.find(userId).toArray((err,result) => {
      if(err) throw err;
      let count = Object.keys(result).length;
      if(count==0){
        res.status(400).json('no user');
      }
      let stat="pending";
      let gameId = result[0].cart;
      console.log(gameId);
      let mycart={userId,gameId,stat};
	    dbo.collection("Orders").insertOne(mycart,(err,result) =>{
        if(err) throw err;
          console.log(users.updateOne(
                {"_id": user._id},
                { $set: { "cart" : [] } },
                {multi: true,
                useNewUrlParser: true}, 
                function(err){
                  console.log(err);
          }));

        console.log("1 document inserted in Orders");
      })
    })
  })
});

app.listen(3000, () => {
	console.log("app is running on port 3000");
})
