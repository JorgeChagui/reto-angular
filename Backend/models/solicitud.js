var moment = require('moment');
module.exports = (sequelize, DataTypes) => {
    // const user = sequelize.import("usuario", require('../models/user'));
    var date = moment().format("YYYY-MM-DD").toString();
    const solicitud = sequelize.define('solicitud', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        salario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 0,
                max: 100000000
            },
        },

        fechaIngreso: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true,
                isBefore: {
                    args: date,
                    msg: "La fecha tiene que ser anterior a la actual"
                }
            }
        },
        idCredito: {
            type: DataTypes.INTEGER
        },
        aprovado: {
            type: DataTypes.BOOLEAN
        }
    }

    );
    solicitud.associate = function (models) {
        models.solicitud.belongsTo(models.usuario);
    };
    return solicitud;
}
