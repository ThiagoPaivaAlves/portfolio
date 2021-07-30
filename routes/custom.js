var express = require('express');
var router = express.Router();

/* GET home about */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'A little bit about me', page:'about' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Bullet proof certified projects', page:'project' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', page:'contact' });
});

module.exports = router;
