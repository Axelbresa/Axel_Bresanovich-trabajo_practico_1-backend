// TODO: Crear controladores para cada una de las rutas de reserva.
const { where } = require ("sequelize");
const post = require("../models/post_models");
const comentario=require("../models/comentario_models")
const ctrl = {};



// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.listadoComentario= async (req, res)=>{
    try {
      const Post = await comentario.findAll({
        
            model: post,
         
            
          
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
ctrl.obtenerUnComentario= async (req, res)=>{
    try {
      const { id } = req.params;
      const reserva = await comentario.findOne({
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
    comentario,
    postid } = req.body;
  
      try{
        const nuevo_usuario = new comentario  ({  
          comentario,
          postid
        })

  
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




module.exports = ctrl;