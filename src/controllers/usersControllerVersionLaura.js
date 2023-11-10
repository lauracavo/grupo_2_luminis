const { validationResult } = require("express-validator");
const session = require("express-session");
const db = require("../../database/models");
const bcrypt = require('bcryptjs');

const usersControllerVersionLaura = {
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
          const { email } = req.body;
    
          // Busca el usuario en la base de datos por correo electrónico
          const userLogin = await db.User.findOne({ where: { email: email } });
         
          
          if (userLogin) {
            const correctPassword = bcrypt.compareSync(req.body.password, userLogin.password);
            if (correctPassword) {
              // Almacena el usuario en la sesión
              req.session.successLoginUser = userLogin;
    
              // Almacena el correo en una cookie
              res.cookie("email", email, { maxAge: ((1000 * 60) * 60) * 24 });
    
              // Redirige a la página de perfil y pasa los datos del usuario
              res.redirect("/users/userProfile")
              console.log (req.params.idUser)
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

    viewEdit: (req, res) => {
        const enteredUser = req.cookies.email; // Correo ingresado por el usuario (session / coockies)
           
        // Busca el usuario en la base de datos por correo electrónico
        let pedidoUser = db.User.findOne({ where: { email: enteredUser } });
        let pedidoPersonal = db.Personal.findOne({ where: { email: enteredUser } });
      
        Promise.all ([pedidoUser , pedidoPersonal])
          .then (function ([usuario , datosPersonales]){
            res.render ('userProfile', { userInfo: usuario , userData: datosPersonales })
          })
    },

    actualizar: (req, res) =>{
      const enteredUser = req.cookies.email;

        db.User.update ({
            fullName: fullName,
            email: email,
        } , {
          where : {
            email: enteredUser
          }
        })



    }
      
    
}


module.exports = usersControllerVersionLaura;