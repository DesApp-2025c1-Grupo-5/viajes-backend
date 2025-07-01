const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chofer extends Model {
    static associate(models) {
      Chofer.belongsTo(models.EmpresaTransportista, {
        foreignKey: "id_empresa_transportista",
        as: "empresaTransportista",
      });
      Chofer.belongsTo(models.Vehiculo, {
        foreignKey: "id_vehiculo",
        as: "vehiculo",
      });
      Chofer.hasMany(models.Viaje, {
        foreignKey: "id_chofer",
      });
    }

    toJSON() {
      // Personalizamos el método toJSON para formatear las fechas
      const values = Object.assign({}, this.get());

      if (values.fecha_nacimiento) {
        values.fecha_nacimiento = values.fecha_nacimiento
          .toISOString()
          .split("T")[0];
      }

      return values;
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
      id_vehiculo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
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
      modelName: "Chofer",
      tableName: "choferes",
    }
  );

  return Chofer;
};
