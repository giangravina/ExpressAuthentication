var express = require('express');
var app = express();

var myLogger = function(req, res, next){
	console.log('LOGGED', req.url)
	next();
}

app.get('/', function(req, res, next){
	res.send("Hello world!");
	next()
});

app.use(myLogger);

app.listen(3000);