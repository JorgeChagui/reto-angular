var express = require('express');
var router = express.Router();
var sequelize = require('../ssql');

//Model
const empresa = sequelize.import("empresa", require('../models/empresa'));

console.log("Empresas controlador");

router.post('/', function(req, res, next){
    sequelize.sync()
    .then(() => empresa.create({
        nit: req.body.nit,
        nombre: req.body.nombre,
    }))
    .then(empresa => {
        console.log(empresa.toJSON());
        res.send("Empresa creada: ");
    });
});

module.exports = router;