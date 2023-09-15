const express = require("express");
const route = express.Router();
const usersController = require("../controllers/usersController");
const { body } = require("express-validator");

//MIDDLEWARES
const upload = require("../middlewares/multerConfig");
const validarRegistro = require("../middlewares/validarRegistro")

//middleware para validar el formulario de login
const validarLogin = [
  body("email").isEmail().withMessage("Debe ingrear un Email válido"),
  body("password").notEmpty().withMessage("Debe ingresar su contraseña"),
];

route.get("/register", usersController.register); //localhost2020:/users/register
route.get("/login", usersController.login); //localhost2020:/users/login
route.post("/store", upload.single('profile_image'), validarRegistro, usersController.store); //localhost2020:/users/store
route.post("/processLogin", validarLogin, usersController.processLogin); //localhost:2020/users/processLogin
route.get("/userProfile", usersController.userProfile); //localhost2020:/users/userProfile


module.exports = route;



// // Posible Remember Me Config.
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();

// // Use the cookieParser middleware to parse cookies from the request
// app.use(cookieParser());

// // Define the login route
// app.post('/login', (req, res) => {
//   // Get the username and password from the request body
//   const { username, password } = req.body;

//   // Check if the remember me checkbox was checked
//   const rememberMe = req.body.remember_me === 'on';

//   // If the remember me checkbox was checked, set a cookie with the username and password
//   if (rememberMe) {
//     res.cookie('username', username, { maxAge: 3600 });
//     res.cookie('password', password, { maxAge: 3600 });
//   }
// });

// // Define the home route
// app.get('/', (req, res) => {
//   // Get the username and password from the cookies
//   const username = req.cookies.username;
//   const password = req.cookies.password;
// });