var express = require('express');
var router = express.Router();
var sequelize = require('../ssql');
var User = require('../models/user');


/* GET users listing. */
router.get('/', function (req, res, next) {
  sequelize.sync()
    .then(() => User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });
  res.send({ hola: "no", chao: "si" });
});

router.get("/all", function(req, res, next){
  sequelize.sync()
    .then(() => User.findAll())
    .then(result => {
      console.log(result);
      res.send(result);
    });
});

module.exports = router;
