const express = require("express");
const route = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerConfig");
const { body } = require("express-validator");
const app = express();

//middleware para validar el formulario de registro
const validarRegistro = [
  body("name").notEmpty().withMessage("Debe ingresar nombre y apellido"),
  body("email").isEmail().withMessage("Debe ingresar un Email válido"),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar una constraseña válida"),
  body("passwordR").notEmpty().withMessage("Debe repetir su contraseña"),
];
//middleware para validar el formulario de login
const validarLogin = [
  body("email").isEmail().withMessage("Debe ingrear un Email válido"),
  body("password").notEmpty().withMessage("Debe ingresar su contraseña"),
];

route.get("/register", usersController.register); //localhost2020:/users/register
route.get("/login", usersController.login); //localhost2020:/users/login
route.post("/store", validarRegistro, usersController.store); //localhost2020:/users/store
route.post("/processLogin", validarLogin, usersController.processLogin); //localhost:2020/users/processLogin

app.post("/users/store", upload.single("profile_image"), (req, res) => {
 res.redirect("/");
});

route.get("/userProfile", usersController.userProfile);

module.exports = route;
