const express = require("express");
const route = express.Router();
const usersController = require("../controllers/usersControllerVersionLaura");
const { body } = require("express-validator");

//MIDDLEWARES
const upload = require("../middlewares/multerConfig");
const validateRegister = require("../middlewares/validateRegister")
const validateLogin = require("../middlewares/validateLogin");
const authMiddleware = require("../middlewares/authMiddleware")


route.get("/register", usersController.register); //localhost2020:/users/register
route.post("/store", upload.single('profile_image'), validateRegister, usersController.store); //localhost2020:/users/store
route.get("/login", usersController.login); //localhost2020:/users/login
route.post("/processLogin", validateLogin, usersController.processLogin); //localhost:2020/users/processLogin

route.get("/userProfile", usersController.userProfile);//localhost2020:/users/userProfile
route.get("/editUser", usersController.viewEdit);
route.post("/editUser/:id", usersController.actualizar);
route.get("/viewPassword", usersController.viewPassword)
route.post("/editPassword", usersController.editPassword)
route.post("/eliminarUsuario", usersController.eliminar)

//route.get("/confirmation-deleteUser", usersController.viewDelete);

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