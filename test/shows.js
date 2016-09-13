var request = require("request");
var chai = require("chai");
var expect  = chai.expect;
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);

describe('/shows', function() {
  it('return status 200', function(done) {
    chai.request(server)
      .get('/shows')
      .end(function(err,res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("Contain the body text", function(done) {
    chai.request(server)
      .get('/shows')
      .end(function(err, res){
        expect(res.text).to.equal('Shows is here!');
        done();
      });
    });
});
