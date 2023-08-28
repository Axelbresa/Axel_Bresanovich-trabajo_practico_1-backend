// TODO: Crear controladores para cada una de las rutas de reserva.
const { where } = require ("sequelize");
const User = require("../models/comentario_models");
const ctrl = {};

// ==========================================
//    Controladores para renderizar vistas
// ==========================================

// Obtener todas las reservas
ctrl.lista = (req, res) => {
    res.send("lista_comentarios");
  };
// Formulario para crear una reserva
ctrl.crearreserva = (req, res) => {
    res.send("crear_comentarios");
  };
// Formulario para editar una reserva
ctrl.renderEditar=(req, res)=>{
    const reservaId = req.params.id;
    res.send("editar_comentarios", { id: reservaId });
  };

// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.listadoReserva= async (req, res)=>{
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
ctrl.obtenerUnaReserva= async (req, res)=>{
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
ctrl.crearUsuarios = async (req, res) => {
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

// Actualizar una reserva
ctrl.actualizarReserva=async(req, res)=>{
    try {
      const { id } = req.params;
      const reserva = await User.findByPk(id);
      await reserva.update(req.body)
      return res.json({
          message: 'Reserva actualizada exitosamente'
      });
  } catch (error) {
      console.log('Error al actualizar la reserva', error);
      return res.status(error.status || 500).json({
          message: error.message
      })
  }
  }

// Eliminar una reserva de forma lógica
ctrl.EliminarReserva = async (req, res)=>{
    try {
      const { id } = req.params;
      if(!id){
          throw({
              status: 400,
              message: 'No se ha enviado el id de la reserva'
          })
      }
      const reserva = await User.findByPk(id);
      await reserva.update({ estado: false });
      return res.json({ message: 'Reserva se eliminó correctamente' })
  } catch (error) {
      console.log('Error al eliminar la reserva', error);
      return res.status(error.status || 500).json({
          message: error.message || 'Error al eliminar la reserva'
      })
  }
  }
  


module.exports = ctrl;