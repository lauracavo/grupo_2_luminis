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
        const { usuarios } = dataBaseU;
        const { email } = req.body;

        // Busca el usuario en la base de datos por correo electrónico
        const usuarioALoguearse = usuarios.find(user => user.email === email);

        if (usuarioALoguearse) {
            const contrasenaCorrecta = bcrypt.compareSync(req.body.password, usuarioALoguearse.password);
            if (contrasenaCorrecta) {
                // Almacena el usuario en la sesión
                req.session.usuarioLogueado = usuarioALoguearse;

                // Almacena el correo en una cookie
                res.cookie("email", email, { maxAge: ((1000 * 60) * 60) * 24 });

                // Redirige a la página de perfil y pasa los datos del usuario
                res.render("userProfile", { datosUsuario: usuarioALoguearse });
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
/*     const usuarioIngresado = req.body.email; // Correo ingresado por el usuario
    // Busca el usuario en el JSON por correo electrónico
    const usuarioEncontrado = dataBaseU.usuarios.find(usuario => usuario.email === usuarioIngresado);

    if (usuarioEncontrado) {
        // Usuario encontrado, pasa sus datos a la vista de perfil
        res.render('userProfile', { usuario: usuarioEncontrado });
        console.log(usuarioEncontrado);
    } */
  },

  editarEliminar: (req,res) =>{
    const action = req.body.action; // Obtiene el valor del botón "action"

    if (action === 'eliminar') {
      const userEmail = req.params.email; // Obtén el Email del usuario de la URL
    
      const usuarioAEliminar = dataBaseU.usuarios.findIndex(user => user.email === userEmail); // Encuentra el índice del usuario con el ID proporcionado

          if (usuarioAEliminar !== -1) {
              // Elimina al usuario de la matriz
              dataBaseU.usuarios.splice(usuarioAEliminar, 1);

              // Guarda la información actualizada en el archivo JSON
              fs.writeFileSync(
                  path.join(__dirname, "../dataBase/usuarios.json"),
                  JSON.stringify(dataBaseU, null, 2)
              );

              // Redirige al usuario a una página de confirmación
              res.redirect("/confirmacion-eliminacion");
          }
    res.send('Usuario eliminado');
    } else if (action === 'editar') {
        const userId = req.params.id; // Obtén el ID del usuario de la URL
        res.send('Usuario editado');
    } else {
        res.send('Acción desconocida'); // Manejar cualquier otro valor de "action"
    }
  }
};

module.exports = usersController;
