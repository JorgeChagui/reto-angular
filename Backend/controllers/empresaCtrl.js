var empresa = require('../models').empresa;


var createEmpresa = function (req, res, next) {
    empresa.create({
        nit: req.body.nit,
        nombre: req.body.nombre,
    })
        .then(empresa => {
            console.log(empresa.toJSON());
            res.send("Empresa creada: ");
        })
        .catch(error => {
            res.status(500).send({ message: error.message.toString().replace(/\n/g, "").split(",") });
        });
}

var findById = function (req, res, next) {
    empresa.findById(req.params.id)
        .then(result => {
            res.send(result);
        });
}
module.exports = {
    createEmpresa: createEmpresa,
    findById: findById
};