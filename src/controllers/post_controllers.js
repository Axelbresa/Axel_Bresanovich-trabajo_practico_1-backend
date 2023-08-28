// TODO: Crear controladores para cada una de las rutas de reserva.
const { where } = require ("sequelize");
const post = require("../models/post_models");
const user=require("../models/usuario_models")
const ctrl = {};



// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.listadoPost= async (req, res)=>{
    try {
      const Post = await post.findAll({
          include: {
            model: user,
            as: 'usuario',
            attributes: ['nombre_completo', "correo"]
          }
      });
  
      return res.json(Post);
  } catch (error) {
      console.log('Error al obtener las reservas', error);
      return res.status(500).json({
          message: 'Error al obtener las reservas'
      })
  }
  }

// Obtener una reserva
ctrl.obtenerUnPost= async (req, res)=>{
    try {
      const { id } = req.params;
      const reserva = await post.findOne({
        include: {
          model: user,
          as: 'usuario',
          attributes: ['nombre_completo', "correo"]
        },
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
ctrl.crearPost = async (req, res) => {
    const {    
    titulo,
    contenido,
    usuario_id } = req.body;
  
      try{
        const nuevo_usuario = new post  ({  
         titulo,
         contenido,
       usuario_id })

  
          await nuevo_usuario.save()
  
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
ctrl.actualizarPost=async(req, res)=>{
    try {
      const { id } = req.params;
      const reserva = await post.findByPk(id);
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
ctrl.EliminarPost = async (req, res)=>{
    try {
      const { id } = req.params;
      if(!id){
          throw({
              status: 400,
              message: 'No se ha enviado el id de la reserva'
          })
      }
      const reserva = await post.findByPk(id);
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