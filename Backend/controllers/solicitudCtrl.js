var solicitud = require('../models').solicitud;
var usuario = require('../models').usuario;
var empresa = require('../models').empresa;
var credito = require('../models').credito;
var moment = require('moment');

var createSolicitud = function (req, res, next) {
    // peticion de tipo:
    // {
    //     "usuario": "1",
    //     "empresa": {
    //         "nit": "1111111111",
    //         "nombre": "empresa1"
    //     },
    //     "solicitud": {
    //         "salario": "30000",
    //         "fechaIngreso": "1994-04-02"
    //     }
    // }
    console.log(req.body);

    usuario.findById(req.body.usuario)
        .then(usuario => {
            console.log(usuario.toJSON());
            if (req.body.empresa) {
                empresa.findOrCreate({
                    where: {
                        nit: req.body.empresa.nit,
                        nombre: req.body.empresa.nombre
                    }
                }).spread((empresa, created) => {
                    console.log(empresa.toJSON());
                    solicitud.create({
                        salario: req.body.solicitud.salario,
                        fechaIngreso: moment(req.body.solicitud.fechaIngreso),
                        aprobado: false
                    }).then(solicitud => {
                        console.log(solicitud.toJSON());
                        usuario.setEmpresa(empresa);
                        usuario.addSolicitud(solicitud);
                        var idCredito = 0;
                        var message = "Crédito aprobado";
                        if (moment(solicitud.fechaIngreso).isBefore(moment().subtract(1.5, "years").format("YYYY-MM-DD"))) {
                            console.log("La fecha de ingreso es de antes de 1 año y medio");
                            solicitud.aprobado = true;

                            if ((solicitud.salario > 800000) && (solicitud.salario <= 1000000)) {
                                idCredito = 1;
                            } else {
                                if ((solicitud.salario > 1000000) && (solicitud.salario <= 4000000)) {
                                    idCredito = 2;
                                } else {
                                    if (solicitud.salario > 4000000) {
                                        idCredito = 3;
                                    } else {
                                        message = "Crédito no aprobado: No tiene el salario mínimo requerido";
                                        solicitud.aprobado = false;
                                    }
                                }
                            }
                        } else {
                            message = "Crédito no aprobado: La fecha de ingreso debe ser hace más de 1 año y medio";
                        }

                        solicitud.idCredito = idCredito;
                        solicitud.save().then(() => {
                            credito.findById(solicitud.idCredito).then(credito => {
                                console.log(credito.toJSON());
                                var respuesta = {
                                    estado: solicitud.aprobado,
                                    valor: credito.valor,
                                    message: message
                                }
                                res.status(200).send(respuesta);
                            })
                        })
                    }).catch(error => {
                        res.status(500).send({ message: error.message.toString().replace(/\n/g, "").split(",") });
                    });


                }).catch(error => {
                    res.status(500).send({ message: error.message.toString().replace(/\n/g, "").split(",") });
                });
            } else {

            }
        }).catch(error => {
            res.status(404).send({ message: "Usuario no encontrado" });
        })
};
module.exports.createSolicitud = createSolicitud;