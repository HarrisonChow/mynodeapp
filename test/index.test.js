var request = require("request");
var chai = require("chai");
var expect  = chai.expect;
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);
var payload =
{
  "payload": [
    {
      "country": "UK",
      "description": "What's life like when you have enough children to field your own football team?",
      "drm": true,
      "episodeCount": 3,
      "genre": "Reality",
      "image": {
        "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
      },
      "language": "English",
      "nextEpisode": null,
      "primaryColour": "#ff7800",
      "seasons": [
        {
          "slug": "show/16kidsandcounting/season/1"
        }
      ],
      "slug": "show/16kidsandcounting",
      "title": "16 Kids and Counting",
      "tvChannel": "GEM"
    }
  ]
}

describe('/shows', function() {
  it('return status 200', function(done) {
    chai.request(server)
      .post('/shows')
      .send(payload)
      .end(function(err,res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("Contain the body text", function(done) {
    var responseText = {
      response: [
        {
          image: "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
          slug: "show/16kidsandcounting",
          title: "16 Kids and Counting"
        }
      ]
    }
    chai.request(server)
      .post('/shows')
      .send(payload)
      .end(function(err, res){
        expect(res.text).to.equal(JSON.stringify(responseText));
        done();
      });
    });
});
