const express = require("express");
const route = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../middlewares/multerConfigProd");

/* localhost:2020/admin */
route.get("/", adminController.getAll);
route.get("/formCreate", adminController.create);
// route.post("/store", adminController.store); // Cambiado a ruta "/store"
route.post("/store", upload.single('imgProduct'), adminController.store);
route.get('/edit/:id', adminController.edit); // renderiza el form edit
route.put('/edit/:id', adminController.editProduct); // Guarda los cambios realizados
route.delete ("/delete/:id", adminController.delete);

module.exports = route;
