// TODO: Crear controladores para cada una de las rutas de reserva.
const { where } = require ("sequelize");
const User = require("../models/comentario_models");
const ctrl = {};


// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.listadoComentario= async (req, res)=>{
    try {
      const reservas = await User.findAll({
          where: {
              estado: true
          }
      });
  
      return res.json(reservas);
  } catch (error) {
      console.log('Error al obtener las reservas', error);
      return res.status(500).json({
          message: 'Error al obtener las reservas'
      })
  }
  }

// Obtener una reserva
ctrl.obtenerUnComentario= async (req, res)=>{
    try {
      const { id } = req.params;
      const reserva = await User.findOne({
          whare: {
              estado: true,
              id
          }
      });
      return res.json(reserva);
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          message: 'Error al obtener la reserva'
      })
  }
}

// Crear una reserva
ctrl.crearComentario = async (req, res) => {
    const {    
    comentario } = req.body;
  
      try{
        const NuevaReserva = new User  ({  
         comentario })
  
          await NuevaReserva.save()
  
          return res.status(201).json({
            message: 'Se creo la reserva'
  
          })
  
      }catch{
        console.log('Error al crear la reserva')
          return res.status(500).json({
            message: 'Error al crear un comentario'
          })
      }
  
  };



module.exports = ctrl;