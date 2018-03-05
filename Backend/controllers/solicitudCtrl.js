var solicitud = require('../models').solicitud;

var createSolicitud = function (req, res, next) {
    solicitud.create({
        salario: req.body.salario,
        fechaIngreso: req.body.fechaIngreso,
    })
        .then(solicitud => {
            console.log(solicitud.toJSON());
            res.send("Solicitud creada: ");
        });
}

module.exports.createSolicitud = createSolicitud;