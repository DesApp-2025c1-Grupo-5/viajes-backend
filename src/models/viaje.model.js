const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {

    static associate(models) {
      Viaje.belongsTo(models.Vehiculo, {
        foreignKey: 'id_vehiculo',
        as: 'vehiculo'
      });
      Viaje.belongsTo(models.EmpresaTransportista, {
        foreignKey: 'id_empresa_transportista',
        as: 'empresaTransportista'
      }); 
    }

  }

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
      allowNull: true
    },
    id_vehiculo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carga: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_chofer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoDeViaje: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nroViaje: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_empresa_transportista: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    provinciaOrigen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    provinciaDestino: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Viaje',
    tableName: 'viajes'
  });

  return Viaje;
};