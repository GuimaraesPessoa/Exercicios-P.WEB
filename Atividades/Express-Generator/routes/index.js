var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Notícias' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Sobre' });
});

module.exports = router;