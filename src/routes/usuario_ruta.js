// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const {
    crearUsuarios,
    listadoUsuarios,
    obtenerUnUsuario,
  } = require("../controllers/usuario_controllers");


const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================
// Crear una reserva
router.post('/api/',crearUsuarios);

// // Obtener todas las reservas
 router.get('/apis/', listadoUsuarios); 

// //obtener una reserva
 router.get("/api/:id", obtenerUnUsuario);
 

 module.exports = router;