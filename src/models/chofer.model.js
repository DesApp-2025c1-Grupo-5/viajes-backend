const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chofer extends Model {
    static associate(models) {
      Chofer.belongsTo(models.EmpresaTransportista, {
        foreignKey: "id_empresa_transportista",
      });
    }
  }

  Chofer.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      licencia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_empresa_transportista: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observaciones: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Chofer",
      tableName: "choferes",
    }
  );

  return Chofer;
};
