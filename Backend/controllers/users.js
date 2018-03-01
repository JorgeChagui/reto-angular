var express = require('express');
var router = express.Router();
var sequelize = require('../ssql');

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
      fechaNacimiento: new Date(Date.parse(req.body.fechaNacimiento))
    }))
    .then(user => {
      console.log(user.toJSON());
      res.send("Usuario creado: ");
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
