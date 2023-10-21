const path = require("path");
const fs = require("fs");
const userData = require("../dataBase/users.json");
const productsData = require("../dataBase/books.json");
const dataBaseUp = require("../dataBase/userTest.json");
const db = require('../../database/models/index')

const mainController = {
  home: (req, res) => {
    // Consulta los productos y las imágenes de la base de datos
    db.Product.findAll()
      .then(products => {
        return db.imageproduct.findAll()
          .then(allImages => {
            res.render("home", { products, allImages });
          })
      })
      .catch(error => {
        res.send({ result: 'Error', payload: error });
      });
  },
};


module.exports = mainController;
