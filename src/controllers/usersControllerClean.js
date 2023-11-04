const path = require("path");
const fs = require("fs");
// const userData = require("../dataBase/users.json");
const session = require("express-session");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const upload = require("../middlewares/multerConfig");
// const { log, error } = require("console");
const db = require("../../database/models");
const { Console } = require("console");

const usersControllerClean = {
  register: (req, res) => {
    res.render("register");
  },
  store: (req, res) => {
    let errors = validationResult(req);
    console.log(errors)
    if (errors.isEmpty()) {
      // Si la foto de perfil se cargó correctamente, accedemos a ella
      const profile_image = req.file ? req.file.filename : null;

      const {
        fullName,
        image,
        password,
        email,
        rol
      } = req.body;
      const hashPassword = bcrypt.hashSync(password, 10);


      // Almacenamos los datos del usuario en un objeto
      const user = {
        fullName: fullName,
        password: hashPassword,
        email: email,
        image: req.file.filename,
        rol: (req.body?.teacher == 'on')? 'profesor' : 'cliente'
        
      };

      // Guardamos el usuario en la base de datos
      db.User.create(user);
      res.redirect("/users/login")

    }
  },
  login: (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      // const { users } = userData;   Se usaba con json
      const { email } = req.body;

      // Busca el usuario en la base de datos por correo electrónico
      const userLogin = await db.User.findOne({ where: { email: email } });
      // // Busca el usuario en la base de datos por correo electrónico
      // const userLogin = users.find(user => user.email === email);
      
      if (userLogin) {
        const correctPassword = bcrypt.compareSync(req.body.password, userLogin.password);
        if (correctPassword) {
          // Almacena el usuario en la sesión
          req.session.successLoginUser = userLogin;

          // Almacena el correo en una cookie
          res.cookie("email", email, { maxAge: ((1000 * 60) * 60) * 24 });

          // Redirige a la página de perfil y pasa los datos del usuario
          // res.render("userProfile", { userInfo: userLogin });
            res.redirect("/users/userProfile")

        } else {
          res.render("login", { errors: [{ msg: "CORREO O CONTRASEÑA INCORRECTOS" }] });
        }
      } else {
        res.render("login", { errors: [{ msg: "CORREO O CONTRASEÑA INCORRECTOS" }] });
      }
    } else {
      res.render("login", { errors: errors.mapped() });
    }
  },

  userProfile: async (req, res) => {
    const enteredUser = req.cookies.email; // Correo ingresado por el usuario (session / coockies)
     


    // Busca el usuario en la base de datos por correo electrónico
    const foundUser = await db.User.findOne({ where: { email: enteredUser } });

    if (foundUser) {
      // Usuario encontrado, pasa sus datos a la vista de perfil
      res.render('userProfile', { userInfo: foundUser });
    } else {
      // Usuario no encontrado
      res.status(404).send('Usuario no encontrado');
    }
  },

viewEdit: async (req, res) => {
  const enteredUser = req.cookies.email; // Correo ingresado por el usuario (session / coockies)
     


  // Busca el usuario en la base de datos por correo electrónico
  const foundUser = await db.User.findOne({ where: { email: enteredUser } });

  if (foundUser) {
    // Usuario encontrado, pasa sus datos a la vista de perfil
    console.log(foundUser)
    res.render('../views/editUser.ejs', { userInfo: foundUser });
  } else {
    // Usuario no encontrado
    res.status(404).send('Usuario no encontrado');
  }



},

viewDelete: async (req, res) => {
  const enteredUser = req.cookies.email; // Correo ingresado por el usuario (session / coockies)
     


  // Busca el usuario en la base de datos por correo electrónico
  const foundUser = await db.User.findOne({ where: { email: enteredUser } });

  if (foundUser) {
    // Usuario encontrado, pasa sus datos a la vista de perfil
    console.log(foundUser)
    res.render('../views/confirmation-deleteUser.ejs', { userInfo: foundUser });
  } else {
    // Usuario no encontrado
    res.status(404).send('Usuario no encontrado');
  }



},






  editDelete: async (req, res) => {
    const action = req.body.action; // Obtiene el valor del botón "action"

    if (action === 'eliminar') {
      const userEmail = req.params.email; // Obtén el Email del usuario de la URL

      const deleteUser = await db.Users.findOne({ where: { email: userEmail } }); // Encuentra el usuario con el correo electrónico proporcionado

      if (deleteUser) {
        // Elimina al usuario de la base de datos
        // db.User.destroy({where: { email : email}})
        deleteUser.destroy();

        // Redirige al usuario a una página de confirmación
        res.redirect("/confirmation-deleteUser");
      }
    } else if (action === 'editar') {
      const userId = req.params.id; // Obtén el ID del usuario de la URL

      // Encuentra el usuario con el ID proporcionado en la base de datos
      const user = await db.Users.findOne({ where: { id: userId } });

      if (user) {
        // Actualiza los campos del usuario con los datos del formulario
        user.name = req.body.name;
        user.email = req.body.email;

        // Actualiza el usuario en la base de datos
        user.save();

        // Redirige al usuario a una página de confirmación o a donde desees
        res.redirect("/confirmation-edicion");
      }
    } else {
      res.status(400).send("Acción no válida");
    }
  },

  // Otros métodos del controlador
};

module.exports = usersControllerClean;