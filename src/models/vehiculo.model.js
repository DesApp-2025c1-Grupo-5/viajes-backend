const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    static associate(models) {
      Vehiculo.belongsTo(models.EmpresaTransportista, {
        foreignKey: "id_empresa_transportista",
      });
      Vehiculo.belongsTo(models.Chofer, {
        foreignKey: "id_chofer",
        as: "chofer",
    });
    }
  }

  Vehiculo.init(
    {
      patente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      año: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      volumen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_empresa_transportista: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo_de_vehiculo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_transportista: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_chofer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      observaciones: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Vehiculo",
      tableName: "vehiculos",
    }
  );

  return Vehiculo;
};
