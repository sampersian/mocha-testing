var express = require('express');
var router = express.Router();

//middleware to validate that two numbers have been sent in the request
router.post('/:operation', (req, res, next) => {
  if (!req.body.num1 && !req.body.num2) {
    res.status(432).json({message: "No data fool"});
  }
  next();
})

//this actually does the adding
router.post('/add', function(req, res, next) {
  res.send({result: Number(req.body.num1) + Number(req.body.num2)});
})

router.post('/subtract', function(req, res, next) {
  res.send({result: Number(req.body.num1) - Number(req.body.num2)});
})

router.post('/multiply', function(req, res, next) {
  res.send({result: Number(req.body.num1) * Number(req.body.num2)});
})

router.post('/divide', function(req, res, next) {
  res.send({result: Number(req.body.num1) / Number(req.body.num2)});
})

router.post('/concat', function(req, res, next) {
  res.send({result: String(req.body.num1) + String(req.body.num2)});
})

module.exports = router;
