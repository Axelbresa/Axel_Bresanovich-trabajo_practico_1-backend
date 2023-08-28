// TODO: Crear modelo de datos de usuario
const { DataTypes, sequelize } = require("../database/db");
//require("./post_models")

const usuario = sequelize.define(
  "usuario",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_completo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
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
    tableName: "usuario",
  }
);

// await usuario.sync();

//Crear tabla si no existe ({force: true} borra y crea la tabla)
// usuario.sync({ force: true }).then(() => {
//   console.log("Tabla de usuario creada");
// });

module.exports = usuario;