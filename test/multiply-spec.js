const chai = require('chai');
const supertest = require('supertest');
const app = require('../app.js');


const should = chai.should();
const api = supertest(app);

describe('Sending a POST to /api/multiply', () => {
  describe('should succeed', () => {
    it ('in multiplying 500 and 2.5 together should be 1250', (done) => {
      api.post('/api/multiply')
      .send({
        num1: 500,
        num2: 2.5
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        res.body.result.should.be.equal(1250);
        done();
      });
    });
  });
});
