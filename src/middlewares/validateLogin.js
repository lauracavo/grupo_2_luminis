const { body } = require("express-validator");

//middleware para validar el formulario de login
const validateLogin = [
    body("email").isEmail().withMessage("Debe ingrear un Email válido"),
    body("password").notEmpty().withMessage("Debe ingresar su contraseña"),
  ];

module.exports = validateLogin