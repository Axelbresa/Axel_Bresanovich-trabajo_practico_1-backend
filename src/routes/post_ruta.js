// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const {
  
    crearPost,
    listadoPost,
    obtenerUnPost,
    actualizarPost,
    EliminarPost,
  } = require("../controllers/post_controllers");


const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/apis/', listadoPost);
 
// Crear una reserva
router.post('/crear-post',crearPost);

//obtener una reserva
router.get("/api/:id", obtenerUnPost);
 

// Actualizar una reserva
router.put('/api/:id', actualizarPost);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',EliminarPost);

 module.exports = router;