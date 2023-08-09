const path = require('path');
const dataBaseU = require('../dataBase/usuarios.json');
const arrLibros = require('../dataBase/libros.json');


const productsController = {
    getAll: (req,res)=>{
        const { results } = arrLibros;
        res.render('productos', { libros: results });    
    },   
    byId: (req,res)=>{
        const {id} = req.params;
    
        const findLibro = arrLibros.find((libro) =>  libro.id == id);

        res.render('productDetail', { libroSelect: findLibro })
    } 
};    


module.exports = productsController;