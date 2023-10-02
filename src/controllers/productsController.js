const path = require("path");
const booksData = require("../dataBase/books.json");
//const container = require('./productClassController');
//const direction = require('../dataBase/direction');
//const newContainer = new container(direction); 


const productsController = {
  getAll: (req, res) => {
    const { books } = booksData;
    res.render("product", { data: books });
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
    const { books } = booksData;

    const productId = books.find((prod) => prod.id === id);

    res.render("productDetail", { bookselect: productId });
  } 
};

module.exports = productsController;
