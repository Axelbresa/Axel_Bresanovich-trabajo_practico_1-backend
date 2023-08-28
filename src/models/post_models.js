// TODO: Crear modelo de datos de usuario
const { DataTypes, sequelize } = require("../database/db");
//require("./usuario_models")

const post = sequelize.define(
  "Reserva",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    contenido: {
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
    tableName: "post",
  }
);



// post.belongsTo(usuario)
// Usuario.hasMany(post)
// await post.sync();

// Crear tabla si no existe ({force: true} borra y crea la tabla)
// post.sync({ force: false }).then(() => {
//   console.log("Tabla de post creada");
// });

module.exports = post;