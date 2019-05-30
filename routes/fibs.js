var express = require('express');
var router = express.Router();
const fibonacci = require ('fibonacci');

router.get('/fibs:N', async function(req, res, next) {
  var N = req.params.N;
  let response = await fibonacci(N);
  res.send(response);
});

module.exports = router;

