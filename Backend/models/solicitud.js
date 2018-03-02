module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.import(__dirname + "/Backend/models/user")
    const solicitud = sequelize.define('solicitud',{
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
    
    solicitud.hasMany(user, {foreignKey : 'id'});;
    return solicitud;
}
