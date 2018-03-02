var sequelize = require('../ssql');

//Model
const credito = sequelize.import("credito", require('../models/credito'));

var createCredito = function(req, res, next){
    sequelize.sync()
    .then(() => credito.create({
        nombre: req.body.nombre,
        valor: req.body.valor,
    }))
    .then(credito => {
        console.log(credito.toJSON());
        res.send("Credito creada: ");
    });
}

module.exports.createCredito = createCredito;