const { body } = require("express-validator");

//middleware para validar el formulario de registro
const validateRegister = [
  body("name").notEmpty().withMessage("Debe ingresar nombre"),

  body("lastName").notEmpty().withMessage("Debe ingresar su apellido"),

  body("dni").notEmpty().withMessage("Debe ingresar su DNI"),

  body("email").notEmpty().withMessage("Debe ingresar su email").bail().isEmail().withMessage("Debe ingresar un Email válido"),

  body("username").notEmpty().withMessage("Debe ingresar un nombre de usuario"),

  body("password").notEmpty().withMessage("Debe ingresar una constraseña válida"),

  body("passwordR").notEmpty().withMessage("Debe repetir su contraseña").bail() //.custom nos permite crear una validacion con lo que le pasemos
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Las contraseñas no coinciden');
    }
    return true;
  }),

  body("cellPhone").notEmpty().withMessage("Debe ingresar un numero de telefono"),

  body("address").notEmpty().withMessage("Debe ingresar una dirección"),

  body("city").notEmpty().withMessage("Debe ingresar una ciudad"),

  body("province").notEmpty().withMessage("Debe ingresar una provincia"),

  body("cp").notEmpty().withMessage("Debe ingresar un codigo postal"),
];

module.exports = validateRegister