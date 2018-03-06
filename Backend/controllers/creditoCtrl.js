var credito = require('../models').credito;
var solicituds = require('../models').solicitud;

var listarCredito = function (req, res, next) {
    solicituds.findAll({ where: {
        aprobado: true
    
      }

    
    })
      .then(result => {
        res.send(result);
      });
  };

module.exports.listarCredito = listarCredito;



