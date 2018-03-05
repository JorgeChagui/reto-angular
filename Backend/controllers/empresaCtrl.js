var empresa = require('../models').empresa;


var createEmpresa = function (req, res, next) {
    empresa.create({
        nit: req.body.nit,
        nombre: req.body.nombre,
    })
        .then(empresa => {
            console.log(empresa.toJSON());
            res.send("Empresa creada: ");
        });
}

module.exports.createEmpresa = createEmpresa;