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
