const path = require("path");
const fs = require("fs");
const dataBaseU = require("../dataBase/usuarios.json");
const session = require("express-session");
const { validationResult } = require("express-validator");
const bcrypt = require ('bcryptjs');
const upload = require("../middlewares/multerConfig");
const { log, error } = require("console");


const usersController = {
  register: (req, res) => {
    res.render("register");
  },
  store: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {

      // Si la foto de perfil se cargó correctamente, accedemos a ella
      const profile_image = req.file ? req.file.filename : null;

      //cargamos el resto de los datos
      const {
        name,
        email,
        docente,
        code,
        password,
        passwordR,
      } = req.body;
  
      const hashPassword = bcrypt.hashSync(password , 10);

      const newUser = {
        name,
        email,
        docente,
        code,
        password: hashPassword,
        profile_image
      };

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
      /* console.log(errors); */
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
        const email = req.body.email
        res.cookie ("email", email, {maxAge: ((1000 * 60) * 60) * 24})
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
