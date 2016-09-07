const chai = require('chai');
const supertest = require('supertest');
const app = require('../app.js');


const should = chai.should();
const api = supertest(app);

describe('Sending a POST to /api/divide', () => {
  describe('should succeed', () => {
    it ('in dividing 5 by 2.5 should be 2', (done) => {
      api.post('/api/divide')
      .send({
        num1: 5,
        num2: 2.5
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        res.body.result.should.be.equal(2);
        done();
      });
    });
  });
});
