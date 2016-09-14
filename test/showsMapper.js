var request = require("request");
var chai = require("chai");
var expect  = chai.expect;
var server = require('../app');
var showsMapper = require('../lib/showsMapper');

describe('showsMapper', function() {
  it('should return expect array', function() {
    var shows = [
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
    ];

    expect(showsMapper(shows)).to.eql([{
      image: "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
      slug: "show/16kidsandcounting",
      title: "16 Kids and Counting"
    }]);
  });

  it('should get only the shows that drm is true', function() {
    var shows = [
      {
        "drm": false,
        "episodeCount": 1,
        "image": {
          "showImage": "picture1.jpg"
        },
        "slug": "show/slug1",
        "title": "title1",
      },
      {
        "drm": true,
        "episodeCount": 1,
        "image": {
          "showImage": "picture2.jpg"
        },
        "slug": "show/slug2",
        "title": "title2",
      }
    ];

    expect(showsMapper(shows)).to.eql([{
      image: "picture2.jpg",
      slug: "show/slug2",
      title: "title2"
    }]);
  });

  it('should get only the shows that episode count larger than zero', function() {
    var shows = [
      {
        "episodeCount": 0,
        "drm": true,
        "image": {
          "showImage": "picture1.jpg"
        },
        "slug": "show/slug1",
        "title": "title1",
      },
      {
        "episodeCount": 3,
        "drm": true,
        "image": {
          "showImage": "picture2.jpg"
        },
        "slug": "show/slug2",
        "title": "title2",
      }
    ];

    expect(showsMapper(shows)).to.eql([{
      image: "picture2.jpg",
      slug: "show/slug2",
      title: "title2"
    }]);
  });

  it("should not broke if image is not found in shows", function() {
    var shows = [
      {
        "episodeCount": 1,
        "drm": true,
        "slug": "show/slug2",
        "title": "title2",
      }
    ];

    expect(showsMapper(shows)).to.eql([{
      image: undefined,
      slug: "show/slug2",
      title: "title2"
    }]);
  });
  
});
