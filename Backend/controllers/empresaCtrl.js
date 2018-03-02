var sequelize = require('../ssql');

//Model
const empresa = sequelize.import("empresa", require('../models/empresa'));

var createEmpresa = function(req, res, next){
    sequelize.sync()
    .then(() => empresa.create({
        nit: req.body.nit,
        nombre: req.body.nombre,
    }))
    .then(empresa => {
        console.log(empresa.toJSON());
        res.send("Empresa creada: ");
    });
}

module.exports.createEmpresa = createEmpresa;