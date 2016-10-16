var express = require('express');
var path = require('path'); // path is a route model with don't need to include it in the  package
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function(req, res){
	console.log('Hello world');
	res.send('<h1>Hello world</h1>');
});

app.listen(3000);
console.log('Server is running on port 3000');
