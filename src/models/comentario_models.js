// TODO: Crear modelo de datos de usuario
const { DataTypes, sequelize } = require("../database/db");

const comentario = sequelize.define(
  "Reserva",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
   
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "comentarios",
  }
);

// Crear tabla si no existe ({force: true} borra y crea la tabla)
comentario.sync({ force: false }).then(() => {
  console.log("Tabla de comentarios creada");
});

module.exports = comentario;