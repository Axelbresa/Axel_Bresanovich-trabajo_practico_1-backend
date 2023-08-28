// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const {
 listadoComentario,
 crearComentario,
 obtenerUnComentario
  } = require("../controllers/comentario_controllers");
 // require("../middwars/validationschema")


const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/apis/', listadoComentario);
 
// Crear una reserva
router.post('/api/:postId',crearComentario);

//obtener una reserva
router.get("/api/:id", obtenerUnComentario);

//obtener los Middlewares


 module.exports = router;