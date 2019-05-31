var express = require('express');
var router = express.Router();
const fibonacci = require ('fibonacci');

router.get('/:N', async function(req, res, next) {
  var N = req.params.N;
  let response = await fibonacci.iterate(N);
  res.send(response);
});

module.exports = router;