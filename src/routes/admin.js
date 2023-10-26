const express = require("express");
const route = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../middlewares/multerConfigProd");

/* localhost:2020/admin   PRODUCTOS  */
route.get("/", adminController.getAll);
route.get("/formCreate", adminController.create);
// route.post("/store", adminController.store); // Cambiado a ruta "/store"
route.post("/store", upload.array('imgProduct', 4), adminController.store);
route.get('/edit/:id', adminController.edit); // renderiza el form edit
route.put('/edit/:id', adminController.editProduct); // Guarda los cambios realizados
route.delete ("/delete/:id", adminController.delete);


/* localhost:2020/admin   USUARIOS  */

route.get("/userListAdmin" , adminController.listUser);
module.exports = route;
