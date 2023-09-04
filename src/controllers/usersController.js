const path = require("path");
const fs = require("fs");
const dataBaseU = require("../dataBase/usuarios.json");
const { validationResult } = require("express-validator");
const session = require ("express-session")

const usersController = {
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req,res) => {
    const errors = validationResult (req);
    if (errors.isEmpty()) {
      const usersJson = fs.readFileSync ("usuarios.json", {usuarios})
      let users;
      if (usersJson == ""){
        users = [];
      }else {
        users = JSON.parse (usersJson);
      }
      for (let i=0; i < users.length; i++) {
      if (users[i].email == req.body.email){
        const usuarioALoguearse = users[i]
      }
    }
     if (usuarioALoguearse == undefined) {
      res.render ("login", {
        errors: [{msg:"El correo ingresado es invalido"}]
      })
     }else {
      req.session.usuarioLogueado = usuarioALoguearse;
     }

  }else {
    res.render ("login")
  }
},

  store: (req, res) => {
    //definimos los datos que queremos obtener del formulario
    const {
      name,
      email,
      docente,
      code,
      profile_image
    } = req.body;

    // Crear un nuevo producto
    const newUser = {
      name,
      email,
      docente,
      code,
      profile_image,
      
    };

    // Agregar el nuevo producto a la lista de productos
    dataBaseU.usuarios.push(newUser);

    // Guardar la información actualizada en el archivo JSON
    fs.writeFileSync(
      path.join(__dirname, "../dataBase/usuarios.json"),
      JSON.stringify(dataBaseU, null, 2)
    );

    res.redirect("/"); // Redirigir de nuevo a la página de administrador
  },

};


module.exports = usersController;
