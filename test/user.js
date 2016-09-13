var expect  = require("chai").expect;
var request = require("request");

describe("User endpoint", function() {
  describe("User endpoint first test", function() {
    var url = "http://localhost:3000/user";
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    it("direct to users url", function() {
      request(url, function(error, response, body) {
        expect(body).to.equal("respond with a resource");
      });
    });
  });
});
