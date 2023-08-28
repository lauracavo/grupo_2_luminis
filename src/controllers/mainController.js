const path = require("path");
const fs = require("fs");
const dataBaseU = require("../dataBase/usuarios.json");
const dataProductos = require("../dataBase/libros.json");
const dataBaseUp = require("../dataBase/usuarioPrueba.json");

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
  store: (req, res) => {
    //definimos los datos que queremos obtener del formulario
    const {
      name,
      email,
      docente,
      code,
      password,
      passwordR,
    } = req.body;

    // Crear un nuevo producto
    const newUser = {
      name,
      email,
      docente,
      code,
      password,
      passwordR,
    };

    // Agregar el nuevo producto a la lista de productos
    dataBaseUp.usuarios.push(newUser);

    // Guardar la información actualizada en el archivo JSON
    fs.writeFileSync(
      path.join(__dirname, "../dataBase/usuarioPrueba.json"),
      JSON.stringify(dataBaseUp, null, 2)
    );

    res.redirect("/"); // Redirigir de nuevo a la página de administrador
  },

};

module.exports = mainController;
