var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gian', header: 'Hello!' });
  //res.send("Hello there!");
});


router.get('/about_me', function(req, res, next) {
	res.send('This is a message about me! My name is ' + req.cookies.name);
});

router.get('/login', function(req, res, next){
	res.render('login', {error: null});
});

router.post('/login', function(req, res, next){
	if(req.body.username && req.body.password){
		var data = req.body.password;
		var hash = crypto.createHash('sha256').update(data).digest('hex');

		console.log('hash', hash);

		req.session.authentication = {
			username: req.body.username,
			password: hash
		}

		res.redirect('/magic/question');
	} else {
		res.render('login', {error: 'Invalid Username or  Password'})
	}
})


router.get('/logout', function(req, res, next){
	req.session.destroy(function(){;
	res.redirect('/');
});

})

module.exports = router;
