const { body } = require("express-validator");

//middleware para validar el formulario de registro
const validateRegister = [
  body("fullName").notEmpty().withMessage("Debe ingresar nombre"),

  body("email").notEmpty().withMessage("Debe ingresar su email").bail().isEmail().withMessage("Debe ingresar un Email válido"),

  body("password").notEmpty().withMessage("Debe ingresar una constraseña válida"),

  body("passwordR").notEmpty().withMessage("Debe repetir su contraseña").bail() //.custom nos permite crear una validacion con lo que le pasemos
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Las contraseñas no coinciden');
    }
    return true;
  }),
];

module.exports = validateRegister