const path = require("path");
const dataLibros = require("../dataBase/libros.json");
//const Contenedor = require('./productClassController');
//const direction = require('../dataBase/direction');
//const container = new Contenedor(direction); 


const productsController = {
  getAll: (req, res) => {
    const { libros } = dataLibros;
    res.render("product", { data: libros });
   //const products= container.getAll();
   //const {limit} = req.query;
   //let limitList = products.slice(0,limit);
  // if (limit){
    //send.render(limitList);
   //}
   //send.render (products);
  },

  byId: (req, res) => {
    const { id } = req.params;
    const { libros } = dataLibros;

    const productId = libros.find((prod) => prod.id === id);

    res.render("productDetail", { libroSelect: productId });
  } 
};

module.exports = productsController;
