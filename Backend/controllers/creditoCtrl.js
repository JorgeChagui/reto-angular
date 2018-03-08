var credito = require('../models').credito;
var solicituds = require('../models').solicitud;
var usuario = require('../models').usuario;
var listarCredito = function (req, res, next) {
  
  usuario.findById(req.body.usuario)
    
        solicituds.findAll({ 
     
            where: {
            aprobado: true,
            usuarioId: req.body.usuario 
        }
        }).then(result => {
           res.send(result);
           }).catch(error => {
      res.status(404).send({ message: "Usuario no encontrado" });
  })
    
    
    
};

module.exports.listarCredito = listarCredito;


