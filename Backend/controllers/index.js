var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({hola: "no",
            chao: "si" 
          });
});

module.exports = router;
