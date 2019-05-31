// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("fibs", () => {
  describe("GET /:6", () => {
    // Test the fibs endpoint
    var expect = chai.expect;
    it("should return fibs with N=6", (done) => {
      chai.request(app)
        .get('/fibs/6')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.sequence).to.eql([
            1,
            1,
            2,
            3,
            5,
            8
          ])
          done();
        });
    });
  });
});