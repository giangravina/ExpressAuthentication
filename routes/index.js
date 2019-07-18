var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gian', header: 'Hello!' });
  //res.send("Hello there!");
});


router.get('/about_me', function(req, res, next) {
	res.send('This is a message about me! My name is ' + req.cookies.name);
});


module.exports = router;
