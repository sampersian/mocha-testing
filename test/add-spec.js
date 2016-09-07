const chai = require('chai');
const supertest = require('supertest');
const app = require('../app.js');


const should = chai.should();
const api = supertest(app);

describe('Sending a POST to /api/add', () => {
  describe('should succeed', () => {
    it ('in adding 5 and 2 together should be 7', (done) => {
      api.post('/api/add')
      .send({
        num1: 5,
        num2: 2
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        res.body.result.should.be.equal(7);
        done();
      });
    });
  });

  describe('Should fail', () => {
    it('when nothing is sent in', (done) => {
      api.post('/api/add')
      .expect(432)
      .end((err, res) => {
        if(err) return done(err);
        res.body.message.should.be.equal('No data fool')
        done();
      })
    })
  })
});
