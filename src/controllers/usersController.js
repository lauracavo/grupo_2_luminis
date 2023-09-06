const path = require("path");
const fs = require("fs");
const dataBaseU = require("../dataBase/usuarios.json");
const session = require("express-session");
const { validationResult } = require("express-validator");
const bcrypt = require ('bcryptjs');
const { log } = require("console");


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
    res.redirect("login"); // Redirigir al login
    } else {
      res.render("register", { errors: errors.mapped(), old: req.body });
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()){
      const {usuarios} = dataBaseU;
      let users = usuarios;
      //console.log(users);
      let usuarioALoguearse;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          const contrasenaCorrecta = bcrypt.compareSync(req.body.password, users[i].password);
          if (contrasenaCorrecta){
            usuarioALoguearse = users[i];
            //console.log('CORREO ENCONTRADO');
            //console.log(usuarioALoguearse);
          }
        }
      };
      if (usuarioALoguearse == undefined) {
        //console.log('CORREO NO ENCONTRADO');
        res.render("login", {errors: [{ msg: "CORREO O CONTRASEÑA INCORRECTOS" }],
        });
      } else {
        req.session.usuarioLogueado = usuarioALoguearse;
        res.redirect("userProfile")
      };
      //console.log("DATOS INGRESADOS");
    }else{
      res.render("login", { errors: errors.mapped()});
    }
  },
  userProfile: (req,res) => {
    res.render("userProfile");
  }
};

module.exports = usersController;
