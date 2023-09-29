const path = require("path");
const fs = require("fs");
const dataBaseU = require("../dataBase/usuarios.json");
const dataProductos = require("../dataBase/books.json");
const dataBaseUp = require("../dataBase/userTest.json");

const mainController = {
  home: (req, res) => {
    const { libros } = dataProductos;
    res.render("home", { data: libros });
  },
  
};

module.exports = mainController;
