const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('Canary Test', () => {
  it('the string hello should be hello', () => {
    const hello = "hello";
    hello.should.be.equal('hello');
  });
});

describe('Type Test', () => {
  it('the string hello should be hello', () => {
    const hello = "hello";
    hello.should.be.a('string');
  });
});
