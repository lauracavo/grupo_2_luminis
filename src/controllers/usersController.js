const path = require("path");
const fs = require("fs");
const userData = require("../dataBase/users.json");
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
        teacher,
        code,
        password,
        passwordR,
      } = req.body;
  
      const hashPassword = bcrypt.hashSync(password , 10);

      const newUser = {
        name,
        email,
        teacher,
        code,
        password: hashPassword,
        profile_image
      };

      userData.users.push(newUser);
  
      // Guardar la información actualizada en el archivo JSON
      fs.writeFileSync(
        path.join(__dirname, "../dataBase/users.json"),
        JSON.stringify(userData, null, 2)
      );
      res.render("confirmationRegisterUser"); // Redirigir a la página de confirmación

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
        const { users } = userData;
        const { email } = req.body;

        // Busca el usuario en la base de datos por correo electrónico
        const userLogin = users.find(user => user.email === email);

        if (userLogin) {
            const correctPassword = bcrypt.compareSync(req.body.password, userLogin.password);
            if (correctPassword) {
                // Almacena el usuario en la sesión
                req.session.successLoginUser = userLogin;

                // Almacena el correo en una cookie
                res.cookie("email", email, { maxAge: ((1000 * 60) * 60) * 24 });

                // Redirige a la página de perfil y pasa los datos del usuario
                res.render("userProfile", { userInfo: userLogin });
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

  userProfile: (req,res) => {
/*     const enteredUser = req.body.email; // Correo ingresado por el usuario
    // Busca el usuario en el JSON por correo electrónico
    const foundUser = userData.users.find(usuario => usuario.email === enteredUser);

    if (foundUser) {
        // Usuario encontrado, pasa sus datos a la vista de perfil
        res.render('userProfile', { usuario: foundUser });
        console.log(foundUser);
    } */
  },

  editDelete: (req,res) =>{
    const action = req.body.action; // Obtiene el valor del botón "action"

    if (action === 'eliminar') {
      const userEmail = req.params.email; // Obtén el Email del usuario de la URL
    
      const deleteUser = userData.users.findIndex(user => user.email === userEmail); // Encuentra el índice del usuario con el ID proporcionado

          if (deleteUser !== -1) {
              // Elimina al usuario de la matriz
              userData.users.splice(deleteUser, 1);

              // Guarda la información actualizada en el archivo JSON
              fs.writeFileSync(
                  path.join(__dirname, "../dataBase/users.json"),
                  JSON.stringify(userData, null, 2)
              );

              // Redirige al usuario a una página de confirmación
              res.render("USUARIO ELIMINADO");
          }
    } else if (action === 'editar') {
      const userId = req.params.id; // Obtén el ID del usuario de la URL

      // Encuentra el usuario con el ID proporcionado en la matriz
      const user = userData.users.find(user => user.id === userId);
  
      if (user) {
          // Actualiza los campos del usuario con los datos del formulario
          user.name = req.body.name;
          user.email = req.body.email;
  
          // Guarda la información actualizada en el archivo JSON o en tu base de datos
          fs.writeFileSync(
              path.join(__dirname, "../dataBase/users.json"),
              JSON.stringify(userData, null, 2)
          );
  
          // Redirige al usuario a una página de confirmación o a donde desees
          res.render("USUARIO EDITADO");
      }
    } 
  }
};

module.exports = usersController;
