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
                len: [8,15],
                not: ["[a-z]",'i'],
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