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
      Viaje.belongsTo(models.Chofer, {
        foreignKey: "id_chofer",
        as: "chofer",
      });
      Viaje.belongsTo(models.Deposito, {
        foreignKey: "origen",
        as: "depositoOrigen",
      });
      Viaje.belongsTo(models.Deposito, {
        foreignKey: "destino",
        as: "depositoDestino",
      });
    }

    toJSON() {
      // Personalizamos el método toJSON para formatear las fechas
      const values = Object.assign({}, this.get());

      const formatDateToLocal = (date) => {
        const offset = date.getTimezoneOffset() * 60000; // minutos a milisegundos
        const localISOTime = new Date(date - offset).toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm
        return localISOTime;
      };

      if (values.fecha_salida) {
        values.fecha_salida = formatDateToLocal(new Date(values.fecha_salida));
      }

      if (values.fecha_llegada) {
        values.fecha_llegada = formatDateToLocal(new Date(values.fecha_llegada));
      }

      return values;
    }
  }

  Viaje.init(
    {
      origen: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      destino: {
        type: DataTypes.INTEGER,
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
