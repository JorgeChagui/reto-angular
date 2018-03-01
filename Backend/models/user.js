module.exports = (sequelize, DataTypes) => {
  return sequelize.define('usuario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cedula: { type: DataTypes.STRING, allowNull: false},
    nombre: { type: DataTypes.STRING, allowNull: false},
    primerApellido: { type: DataTypes.STRING, allowNull: false},
    segundoApellido: { type: DataTypes.STRING, allowNull: true},
    fechaNacimiento: {type: DataTypes.DATEONLY, allowNull: false}
  })
}