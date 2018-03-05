module.exports = (sequelize, DataTypes) => {
    var Empresa = sequelize.define('empresa',{
        id: {
            type: DataTypes.INTEGER, 
            primaryKey:true, 
            autoIncrement:true,
        },

        nit: {
            type: DataTypes.STRING, 
            allowNull:false,
            validate:{
                len: {
                    args: [10,10],
                    msg: "Ingrese 10 números en NIT"
                  },
                isNumeric: {
                    msg: "Ingrese sólo números en NIT"
                  }
            },
        },

        nombre: {
            type: DataTypes.STRING, 
            allowNull:false,  
            validate:{
                min:2,
            }
        }
    });
    Empresa.associate = function(models) {
        models.empresa.hasMany(models.usuario);
      };
    return Empresa;
}