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
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.deepEqual({
            "sequence": [
            1,
            1,
            2,
            3,
            5,
            8
          ],
            "report": {
            "number": "8",
              "length": 1,
              "iterations": "6",
              "ms": 2
          }
          })
          done();
        });
    });
  });
});