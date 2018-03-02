const user = sequelize.import(__dirname + "/Backend/models/user")
module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('credito',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },

        salario: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                max: 100000000,
            },
        },

        fechaIngreso: {
            type: DataTypes.DATEONLY,             
        },

    });
}
