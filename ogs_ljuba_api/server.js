const express = require('express');

const app = express();

app.get('/', (req, res)=>{
	res.send('this is working!');
})

app.listen(3000, () => {
	console.log("app is running on port 3000");
})


/*
/ --> everything loaded OK
/signin --> POST = success/fail
/register -->  POST = user
/profile/:userId --> GET = user
/order --> PUT = orderId --> user
*/