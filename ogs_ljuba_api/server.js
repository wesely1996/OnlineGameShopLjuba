const express = require('express');
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
  let dbo = db.db("GameShop");
  
  app.post('/register', (req, res)=>{
	  const {name, email, phone, password} = req.body;
	let hash=md5(password);
	let cart=[];
    let myUser={name,email,phone,hash,cart};
    let query={email,phone};
    dbo.collection("Users").find(query).toArray((err, result) => {
      if (err) throw err;
      let count = Object.keys(result).length;
      if(count==0){
        dbo.collection("Users").insertOne(myUser, (err, result) => {
		  if (err) throw err;
		  console.log("1 document inserted (user)");
		  
		  let myOrders = {UserId:result.insertedId, Orders:[]}
		  dbo.collection("Orders").insertOne(myOrders,(err) => {
			  if(err) throw err;
			  console.log("1 document inserted (orders)")
		  })
		  res.status(201).json("User Created");
        })
      }
      else{
		  console.log("Email or phone number already in use!");
		  res.status(401).json("Email or phone number already in use!");
      }
    });
  })
  
  app.post('/signin', (req, res)=>{
	  const {email, password} = req.body;
    let hash=md5(password);
    dbo.collection("Users").find({"email":email}).toArray((err, result) => {
	  if (err) throw err;
      if(result!=null){
		  if(result[0].hash!=hash){
			res.status(401).status('Wrong password');
		  }
		  else{
			  	dbo.collection("Orders").find({"UserId" : result[0]._id}).toArray((err, result2) => {
					if(err) throw err;
					if(result2){
						let user = {id: result[0]._id, name: result[0].name, email: result[0].email, cart: result[0].cart, orders: result2[0].Orders};
						res.json(user);
					}
					else{
						res.status(404).json("Missing orders");
					}
		  		})
			}
      }
      else{
        res.status(401).json("Email doesnt exist!");
      }
    });
  })
  
  app.get('/games', (req, res)=>{
	dbo.collection("Games").find().toArray((err, result) => {
		if(err) throw err;
		if(result){
			res.json(result);
		}
	})
  })

});

app.get('/profile/:userId', (req, res)=>{
	const {userId} = req.params;
	let found = false;

	database.users.forEach(user => {
		if(user.id === userId){
			found = true;
			return res.json(user);
		}
	});

	if(!found){
		res.status(400).json('no such user in the database');
	}
})

app.put('/order', (req, res) => {
	const {userId, orderId} = req.body;
	let found = false;

	database.users.forEach(user => {
		if(user.id === userId){
			found = true;
			user.orders.push(orderId);
			return res.json(user.orders.sort());
		}
	});

	if(!found){
		res.status(400).json('no such user in the database');
	}
})

app.put('/cart', (req, res) => {
	const {userId, orderId} = req.body;
	let found = false;

	database.users.forEach(user => {
		if(user.id === userId){
			found = true;
			user.orders.splice(user.orders.indexOf(orderId), 1);
			return res.json(user.orders.sort());
		}
	});

	if(!found){
		res.status(400).json(userId);
	}
})

app.listen(3000, () => {
	console.log("app is running on port 3000");
})
