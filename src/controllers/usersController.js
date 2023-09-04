const path = require("path");
const fs = require("fs");
const dataBaseU = require("../dataBase/usuarios.json");
const session = require("express-session");
const { validationResult } = require("express-validator");
const bcrypt = require ('bcryptjs')


const usersController = {
  register: (req, res) => {
    res.render("register");
  },
  store: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
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
      password: bcrypt.hashSync(req.body.password,10),

    };

    // Agregar el nuevo producto a la lista de productos
    dataBaseU.usuarios.push(newUser);

    // Guardar la información actualizada en el archivo JSON
    fs.writeFileSync(
      path.join(__dirname, "../dataBase/usuarios.json"),
      JSON.stringify(dataBaseU, null, 2)
    );
    res.redirect("/"); // Redirigir al home
    } else {
      res.render("register", { errors: errors.mapped(), old: req.body });
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const usersJson = fs.readFileSync("usuarios.json", { usuarios });
      let users;
      if (usersJson == "") {
        users = [];
      } else {
        users = JSON.parse(usersJson);
      }
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          const usuarioALoguearse = users[i];
        }
      }
      if (usuarioALoguearse == undefined) {
        res.render("login", {
          errors: [{ msg: "El correo ingresado es invalido" }],
        });
      } else {
        req.session.usuarioLogueado = usuarioALoguearse;
      }
    } else {
      res.render("login", { errors: errors.mapped()});
      console.log(errors.mapped());
    }
  },
};

module.exports = usersController;
