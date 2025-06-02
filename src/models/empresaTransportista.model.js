const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EmpresaTransportista extends Model {}

  EmpresaTransportista.init({
    razon_social: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuit_rut: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provincia_estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    domicilio_fiscal: {
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