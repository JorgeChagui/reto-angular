var moment = require('moment');
var User = require('../models').usuario;



var createUser = function (req, res, next) {
  if (req.body.segundoApellido === "") {
    req.body.segundoApellido = null;
  }
  User.create({
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    primerApellido: req.body.primerApellido,
    segundoApellido: req.body.segundoApellido,
    fechaNacimiento: moment(req.body.fechaNacimiento)
  })
    .then(user => {
      console.log(user.toJSON());
      res.send(user.toJSON());
    })
    .catch(error => {
      console.log(error.message);
      res.json(error.message);
    });
}

var findAll = function (req, res, next) {
  User.findAll()
    .then(result => {
      res.send(result);
    });
};

var findById = function (req, res, next) {
  User.findById(req.params.id)
    .then(result => {
      res.send(result);
    });
}

module.exports = {
  createUser: createUser,
  findAll: findAll,
  findById: findById
}