const { body } = require("express-validator");

//middleware para validar el formulario de registro
const validarRegistro = [
  body("name").notEmpty().withMessage("Debe ingresar nombre y apellido"),
  body("email").isEmail().withMessage("Debe ingresar un Email válido"),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar una constraseña válida"),
  body("passwordR").notEmpty().withMessage("Debe repetir su contraseña"),
];

module.exports = validarRegistro