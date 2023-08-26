const path = require("path");
const dataBaseU = require("../dataBase/usuarios.json");
const dataProductos = require("../dataBase/libros.json");

const mainController = {
  home: (req, res) => {
    const { libros } = dataProductos;
    res.render("home", { data: libros });
  },
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
};

module.exports = mainController;
