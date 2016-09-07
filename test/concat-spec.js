const chai = require('chai');
const supertest = require('supertest');
const app = require('../app.js');


const should = chai.should();
const api = supertest(app);

describe('Sending a POST to /api/concat', () => {
  describe('should succeed', () => {
    it ('in concatinating 5 and 2 together should be 52', (done) => {
      api.post('/api/concat')
      .send({
        num1: 5,
        num2: 2
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        res.body.result.should.be.equal("52");
        done();
      });
    });
  });
});
