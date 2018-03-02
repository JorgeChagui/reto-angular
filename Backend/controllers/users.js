var express = require('express');
var router = express.Router();
var sequelize = require('../ssql');
var moment = require('moment');

//Model
const User = sequelize.import("usuario", require('../models/user'));


console.log("Users controlador");

router.post('/', function (req, res, next) {
  
  sequelize.sync()
    .then(() => User.create({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      primerApellido: req.body.primerApellido,
      segundoApellido: req.body.segundoApellido,
      fechaNacimiento: moment(req.body.fechaNacimiento)
    }))
    .then(user => {
      console.log(user.toJSON());
      res.send(user.toJSON());
    })
    .catch(error => {
      console.log(error.message);
      res.json(error.message, 500)
    });
});

router.get("/", function (req, res, next) {
  sequelize.sync()
    .then(() => User.findAll())
    .then(result => {
      res.send(result);
    });
});
router.post("/:id", function (req, res, next) {
  sequelize.sync()
    .then(() => User.findById(req.params.id))
    .then(result => {
      res.send(result);
    });
});

module.exports = router;
