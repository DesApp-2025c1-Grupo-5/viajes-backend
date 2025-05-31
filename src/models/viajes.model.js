const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {}

  Viaje.init({
    origen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_salida: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_llegada: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_vehiculo: {
      type: DataTypes.INT,
      allowNull: false
    },
    carga: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_chofer: {
      type: DataTypes.INT,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'EmpresaTransportista',
    tableName: 'empresa_transportistas'
  });

  return EmpresaTransportista;
};