const path = require("path");
const booksData = require("../dataBase/books.json");
//const container = require('./productClassController');
//const direction = require('../dataBase/direction');
//const newContainer = new container(direction); 
const db = require('../../database/models/index')


const productsController = {
  getAll: (req, res) => {
    // FORMA TRABAJANDO CON JSON
   // const { books } = booksData;
    //res.render("product", { data: books });

    // OBTENIENDO LOS DATOS DE LA BASE DE DATOS    
      db.Product.findAll()
      .then(products =>{
          //res.send({result: 'Succes', payload: products})
          res.render("product", { products });
      })
      .catch(error=>{
          res.send({result: 'Error', payload: error})
      })
  },
    // db.product.findAll()
    //   .then (products => {
    //     res.send ({result: 'succes', payload: products})
    //   })
    //   .catch(error =>{
    //     res.send({result: 'Error' , payload: error})
    //   })
   //const products= container.getAll();
   //const {limit} = req.query;
   //let limitList = products.slice(0,limit);
  // if (limit){
    //send.render(limitList);
   //}
   //send.render (products);

  byId: (req, res) => {
    const { id } = req.params;
    const { books } = booksData;

    const productId = books.find((prod) => prod.id === id);

    res.render("productDetail", { bookselect: productId });
  } 
};

module.exports = productsController;
