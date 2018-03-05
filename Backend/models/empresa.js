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
                len: [10,10],
                isNumeric: true,
            },
        },

        nombre: {
            type: DataTypes.STRING, 
            allowNull:false,  
            validate:{
                min:5,
            }
        }
    });
    Empresa.associate = function(models) {
        models.empresa.hasMany(models.usuario);
      };
    return Empresa;
}