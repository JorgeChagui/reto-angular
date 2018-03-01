var moment = require('moment');
console.log(moment().subtract(18, "years").format("YYYY-MM-DD").toString());

var date = moment().subtract(18, "years").format("YYYY-MM-DD").toString();

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('usuario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [5,10]
      }
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'], 
        len: [3,50]
      }
    },
    primerApellido: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'], 
        len: [3,50]
      }
    },
    segundoApellido: { 
      type: DataTypes.STRING, 
      allowNull: true,
      validate: {
        is: ["^[a-z]+$",'i'], 
        len: [3,50]
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
  })
}