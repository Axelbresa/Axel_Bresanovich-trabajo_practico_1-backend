const Post = require('../models/post_models');
const comentario = require('../models/comentario_models');
const User = require('../models/usuario_models');
const {sequelize} = require('../database/db');

// Uno a uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla 
User.hasMany(Post, {  foreignKey: "usuario_id", sourceKey: "id" });

// Añade una clave userId a la tabla 
Post.belongsTo(User, {foreignKey: "usuario_id", targetKey: 'id' });

Post.hasMany(comentario, { foreignKey:"postId", sourceKey:"id"});

// Añade una clave userId a la tabla 

comentario.belongsTo(Post, {foreignKey:"postId", targetKey:"id"});

User.sync().then(()=>{
    console.log('se creo la tabla de usuarios')
    Post.sync().then(()=>{
        console.log('se creo la tabla de Post')
        comentario.sync().then(()=>{
            console.log('se creo la tabla comentario')
        })
    })
})



sequelize.models = {
    User,
    Post, 
    comentario,
}

module.exports = sequelize