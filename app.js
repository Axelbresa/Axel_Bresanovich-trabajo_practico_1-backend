// Imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");



require("dotenv").config();

const  sequelize  = require("./src/database/relaciones");



const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"public")))
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));


//setting
const PORT = process.env.PORT || 3200;

//static files
 app.use(express.static(path.join(__dirname,"public")))


app.use("/c",require('./src/routes/comentario_ruta')); 
 app.use("/u",require('./src/routes/usuario_ruta')); 
 app.use("/p",require('./src/routes/post_ruta')); 


//arrancampos el servidor
app.listen(PORT, function (req, res) {
  console.log("la app esta escuchando en http://localhost: " + PORT);
});

//conexion a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("nos hemos conectado a la base de datos");
  })
  .catch((error) => {
    console.log("se ha producido un error", error);
  });