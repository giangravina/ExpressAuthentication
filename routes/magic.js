var express = require('express');
var router = express.Router();

router.get('/8-ball', function(req, res, next){
var messages =[
        {message: "Signs point to yes", tone: "positive"},
        {message: "Try again later", tone: "neutral"},
        {message: "Outlook not so good", tone: "negative"}
    ];

 res.locals = messages[Math.floor(Math.random() * messages.length)];

 res.render('magic/8-ball');
});

router.get('/question', function(req, res, next){
	res.render('magic/question', {question: null});
});

router.post('/question', function(req, res, next){
	res.cookie('name', req.body.username);
	res.render('magic/question', {question: req.body.question, name: req.body.username});
});


module.exports = router;