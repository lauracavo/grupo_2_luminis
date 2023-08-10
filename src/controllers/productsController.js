const path = require('path');
const arrLibros = require('../dataBase/libros.json');


const productsController = {
    getAll: (req,res)=>{
        console.log(arrLibros);
        //  const { results } = arrLibros;

        //  console.log(results)

        // res.render('product', { libros: results });    
    },   
    byId: (req,res)=>{
        const {id} = req.params;
    
        const findLibro = arrLibros.find((libro) =>  libro.id == id);

        res.render('productDetail', { libroSelect: findLibro })
    } 
};    


module.exports = productsController;