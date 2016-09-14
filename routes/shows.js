var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Shows is here!');
});
router.post('/', function(req, res, next) {
  var body = req.body;
  var response = body.payload.map(function(element) {
    var image = element.image.showImage;
    var slug = element.slug;
    var title = element.title;
    return {image: image, slug: slug, title: title};
  });
  res.send({response: response});
})

module.exports = router;
