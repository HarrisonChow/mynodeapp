// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;

var express = require('express');
var router = express.Router();
var showsMapper = require('../lib/showsMapper');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Shows is here!');
});
router.post('/', function(req, res, next) {
  var body = req.body;
  var response = showsMapper(body.payload);
  res.send({response: response});
});

module.exports = router;
