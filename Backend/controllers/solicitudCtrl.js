var sequelize = require('../ssql');

//Model
const solicitud = sequelize.import("solicitud", require('../models/solicitud'));

var createSolicitud = function(req, res, next){
    sequelize.sync()
    .then(() => solicitud.create({
        salario: req.body.salario,
        fechaIngreso: req.body.fechaIngreso,
    }))
    .then(solicitud => {
        console.log(solicitud.toJSON());
        res.send("Solicitud creada: ");
    });
}

module.exports.createSolicitud = createSolicitud;