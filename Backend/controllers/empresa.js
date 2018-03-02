var express = require('express');
var router = express.Router();
var sequelize = require('../ssql');

//Model
const empresa = sequelize.import("empresa", require('../models/empresa'));

router.post('/', function(req, res, next){
    sequelize.sync()
    .then(() => empresa.create({
        nit: req.body.nit,
        nombre: req.body.nombre,
    }))
});

module.exports = router;