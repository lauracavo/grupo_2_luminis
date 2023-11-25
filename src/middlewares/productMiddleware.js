const { body } = require("express-validator");

const validateProduct = [
    body("name").notEmpty().isLength({ min: 5 }).withMessage("Debe ingresar nombre del producto"),
    body("brand").notEmpty(),
    body("editorial").optional(),
    body("author").optional(),
    body("detail").notEmpty().isLength({ min: 20 }).withMessage("Debe ingresar el detalle del producto"),
    body("characteristic").notEmpty().isLength({ min: 20 }).withMessage("Debe ingresar el detalle del producto"),
    body("idCategory").exists().withMessage("Debes seleccionar una opción"),
    body("purchasePrice").notEmpty(),
    body("salePrice").notEmpty(),
    body("stock").notEmpty(),
    body("imgProduct").custom((value, { req }) => {
        if (!req.file || !req.file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            throw new Error('Debes subir una imagen (formatos admitidos: JPG, JPEG, PNG, GIF)');
        }
        return true;
    }),
]

module.exports = validateProduct