// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("fibs", () => {
  describe("GET /-5", () => {
    // Test the fibs endpoint
    it("should return fibs with N=-5", (done) => {
      chai.request(app)
        .get('/fibs/-5')
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});