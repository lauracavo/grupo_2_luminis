const path = require("path");
const fs = require("fs");
const userData = require("../dataBase/users.json");
const productsData = require("../dataBase/books.json");
const dataBaseUp = require("../dataBase/userTest.json");
const db = require('../../database/models/index')

const mainController = {
  home: (req, res) => {
    // const { books } = productsData;
    // res.render("home", { data: books });

    const products = db.Product.findAll()
    const allimages =  db.imageproduct.findAll({})
    .then(products, allImages =>{
        //res.send({result: 'Succes', payload: products})
        res.render("home", { products, allImages });
    })
    .catch(error=>{
        res.send({result: 'Error', payload: error})
    })
  },
  
};

module.exports = mainController;
