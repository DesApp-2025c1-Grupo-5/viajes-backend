const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Deposito extends Model {}

  Deposito.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coordenadas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horarioDesde: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      horarioHasta: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      restriccion_de_acceso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contacto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observaciones: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Deposito",
      tableName: "depositos",
    }
  );

  return Deposito;
};
