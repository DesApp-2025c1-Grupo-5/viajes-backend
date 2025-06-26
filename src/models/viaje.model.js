const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {
    static associate(models) {
      Viaje.belongsTo(models.Vehiculo, {
        foreignKey: "id_vehiculo",
        as: "vehiculo",
      });
      Viaje.belongsTo(models.EmpresaTransportista, {
        foreignKey: "id_empresa_transportista",
        as: "empresaTransportista",
      });
    }

    toJSON() {
      // Personalizamos el método toJSON para formatear las fechas
      const values = Object.assign({}, this.get());

      if (values.fecha_salida) {
        values.fecha_salida = values.fecha_salida.toISOString().split("T")[0];
      }
      if (values.fecha_llegada) {
        values.fecha_llegada = values.fecha_llegada.toISOString().split("T")[0];
      }

      return values;
    }
  }

  Viaje.init(
    {
      origen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destino: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_salida: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fecha_llegada: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      id_empresa_transportista: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_chofer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_vehiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipoDeViaje: {
        type: DataTypes.STRING,
        allowNull: true,
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
      modelName: "Viaje",
      tableName: "viajes",
    }
  );

  return Viaje;
};
