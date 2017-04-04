var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/charts', function(req, res, next) {
  res.render('chart', { title: 'Express' });
});

module.exports = router;
