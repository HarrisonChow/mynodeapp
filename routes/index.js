var express = require('express');
var router = express.Router();
var showsMapper = require('../lib/showsMapper');
router.get('/', function(req, res, next) {
  res.send('Shows is here!');
});
router.post('/', function(req, res, next) {
  var body = req.body;
  var response = showsMapper(body.payload);
  res.send({response: response});
});

module.exports = router;
