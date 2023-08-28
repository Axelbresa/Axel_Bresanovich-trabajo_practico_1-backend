// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const {
 listadoComentario,
 crearComentario,
 obtenerUnComentario
  } = require("../controllers/comentario_controllers");


const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/apis/', listadoComentario);
 
// Crear una reserva
router.post('/api/',crearComentario);

//obtener una reserva
router.get("/api/:id", obtenerUnComentario);


 module.exports = router;