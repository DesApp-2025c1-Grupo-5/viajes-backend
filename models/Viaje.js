const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// class ?? extends Model {}

const Viaje = sequelize.define('Viaje', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    //autoIncrement: true, (depende de como lo usemos)
  },
  origen: DataTypes.STRING,
  destino: DataTypes.STRING,
  fecha_salida: DataTypes.DATE,
  fecha_llegada: DataTypes.DATE,
  vehiculo: DataTypes.STRING,
}, {
  tableName: 'viajes',
  timestamps: false,
});

module.exports = Viaje;
