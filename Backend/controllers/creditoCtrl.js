var credito = require('../models').credito;
var solicituds = require('../models').solicitud;
var usuario = require('../models').usuario;
var listarCredito = function (req, res, next) {
  
  usuario.findById(req.params.id)
    
        solicituds.findAll({ 
     
            where: {
              
            aprobado: true,
            usuarioId: req.params.id
        }
        }).then(result => {
           res.send(result);
           }).catch(error => {
      res.status(404).send({ message: "Usuario no encontrado" });
  })
    
    
    
};
var Valor = function (req, res, next) {
  
  usuario.findById(req.params.id)
    
         credito.findAll({ 
        })
          .then(result => {
           res.send(result);
           }).catch(error => {
      res.status(404).send({ message: "Usuario no encontrado" });
  })
    
    
    
};

module.exports= {
  
  listarCredito: listarCredito,
  Valor: Valor

}



