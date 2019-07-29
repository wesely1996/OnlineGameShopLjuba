const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
	users: [
		{
			id: '123',
			name: "Marko",
			email: "csbalkan@gmail.com",
			phone: "064444444",
			password: "pass",
			orders: ['1', '3', '4', '4', '10'],
			joined: new Date(),
		},
		{
			id: '124',
			name: "Milos",
			email: "ghostd@yahoo.com",
			phone: "0601234567",
			password: "anatomija",
			orders: ['2', '2', '5'],
			joined: new Date(),
		},
	]
}

app.get('/', (req, res)=>{
	res.json(database.users);
})

app.post('/signin', (req, res)=>{
	if(req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password){
		res.json(database.users[0]);
	}
	else{
		res.status(400).json('error logging in');
	}
})

app.post('/register', (req, res)=>{
	const {name, email, phone, password} = req.body;

	database.users.push({
		id: '125',
		name: name,
		email: email,
		phone: phone,
		password: password,
		orders: [],
		joined: new Date(),
	});

	res.json(database.users[database.users.length - 1]);
})

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
			return res.json(user.orders);
		}
	});

	if(!found){
		res.status(400).json('no such user in the database');
	}
})

app.listen(3000, () => {
	console.log("app is running on port 3000");
})
