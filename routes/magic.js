var express = require('express');
var router = express.Router();

router.get('/8-ball', function(req, res, next){
var messages =[
        {message: "Signs point to yes", tone: "positive"},
        {message: "Try again later", tone: "neutral"},
        {message: "Outlook not so good", tone: "negative"}
    ];

 res.locals.message = messages[Math.floor(Math.random() * messages.length)];
 res.locals.name = req.cookies.name;
 res.locals.question = req.cookies.question;

 res.render('magic/8-ball');
});

router.get('/question', function(req, res, next){
	res.clearCookie('question');
	res.render('magic/question', {question: null, name: null, name: req.cookies.name});
});

router.post('/question', function(req, res, next){
	res.cookie('name', req.body.username);
	res.cookie('question', req.body.question);
	//res.render('magic/question', {question: req.body.question, name: req.body.username});
	res.redirect('/magic/8-ball');
});


module.exports = router;