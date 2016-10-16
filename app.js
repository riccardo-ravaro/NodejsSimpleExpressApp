var express = require('express');
var path = require('path'); // path is a route model with don't need to include it in the  package
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
	console.log('Hello world');
	//res.send('<h1>Hello world</h1>');
	res.render('index', {Title:'Welcome'});
});

app.get('/about', function(req, res){
	res.render('about');
})

app.get('/contact', function(req, res){
	res.render('contact');
})

app.post('/contact/send', function(req, res){
	console.log('test');
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'ravaro.riccardo@gmail.com',
			pass: 'Andromedaftp_1977'
		}
	});
	var mailOptions = {
	 	from: 'ravaro.riccardo@gmail.com',
	 	'to': 'xbit76@gmail.com',
	 	'subject': 'test',
	 	'text': 'You have a submmision with the following detail Name: ' + req.body.name + ' Email:' + req.body.email + ' Message:' + req.body.message + '  ',
	 	'html': 'You have a submmision with the following detail <ul> <li> Name: ' + req.body.name + '</li> <li> Email:' + req.body.email + ' </li> <li> Message:' + req.body.message + '</li> </ul>  '
	}
	
	transporter.sendMail(mailOptions, function(err, info){
		if(err){
			console.log(err);
			res.redirect('/');
		} else {
			console.log(' Message Sent' + info.response);
			res.redirect('/');
		}
	})
})


app.listen(3000);
console.log('Server is running on port 3000');

