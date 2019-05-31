var express = require('express');
var router = express.Router();
const fibonacci = require ('fibonacci');
const fibtastic = require("fibtastic");

router.get('/:N', async function(req, res, next) {
  const startNumber = 1;
  var N = req.params.N;
  if (N < 0) {
    console.log("input less than 0");
    let error = "error value less than 0 submitted";
    res.status(500);
    res.send(error);
  }
  let response = {};
  response.sequence = await fibtastic.sequence(startNumber, N);
  response.report = await fibonacci.iterate(N);
  //let response = await fibonacci.iterate(N);
  res.send(response);
});

module.exports = router;