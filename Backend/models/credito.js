module.exports = (sequelize, DataTypes) => {
    var credito = sequelize.define('credito',{
        id: {
            type: DataTypes.INTEGER, 
            primaryKey:true, 
            autoIncrement:true,
        },

        nombre: {
            type: DataTypes.STRING, 
            allowNull:false,  
            validate:{
                min:5,
            },

        valor: {
            type:DataTypes.INTEGER,
            allowNull: false,
        }
        }
    });

    return credito;
}