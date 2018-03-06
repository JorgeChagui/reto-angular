'use strict';
var moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
  var date = moment().subtract(18, "years").format("YYYY-MM-DD").toString();
  const User = sequelize.define('usuario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cedula: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "La cédula ingresada ya está registrada"
      },
      allowNull: false,
      validate: {
        isNumeric: true,
        len: {
          args: [5,10],
          msg: "La cédula debe tener una longitud entre 5 y 10"
        } 
      }
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        is: {
          args:  ["^([a-zñÑáéíóúÁÉÍÓÚ])+(\\s[a-zñÑáéíóúÁÉÍÓÚ]+)*$",'i'],
          msg: "Ingrese carácteres válidos en nombre"
        }, 
        len: {
          args: [3,50],
          msg: "El nombre debe tener una longitud entre 3 y 50"
        }  
      }
    },
    primerApellido: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        is: {
          args: ["^[a-zñÑáéíóúÁÉÍÓÚ]+$",'i'],
          msg: "Ingrese carácteres válidos en primer apellido"
        }, 
        len: {
          args: [3,50],
          msg: "El primer apellido debe tener una longitud entre 3 y 50"
        }
      }
    },
    segundoApellido: { 
      type: DataTypes.STRING, 
      allowNull: true,
      validate: {
        is: {
          args: ["^[a-zñÑáéíóúÁÉÍÓÚ]+$",'i'],
          msg: "Ingrese carácteres válidos en primer apellido"
        },
        len: {
          args: [3,50],
          msg: "El segundo apellido debe tener una longitud entre 3 y 50"
        }
      }
    },
    fechaNacimiento: { 
      type: DataTypes.DATEONLY, 
      allowNull: false,
      validate: {
        isDate: true,
        isBefore: {
          args: date,
          msg: "Tienes que ser mayor de 18 años"
        }
      }
    }
  });

  User.associate = function(models) {
    models.usuario.hasMany(models.solicitud);
    models.usuario.belongsTo(models.empresa);
  };
  return User;
}