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
route.get("/logout", usersController.logout)

route.get("/userProfile", usersController.userProfile);//localhost2020:/users/userProfile
route.get("/editUser", usersController.viewEdit);
route.post("/editUser/:id", usersController.actualizar);
route.get("/viewPassword", usersController.viewPassword)
route.post("/editPassword", usersController.editPassword)
route.get("/viewPhoto", usersController.viewPhoto)
route.post("/editPhoto", upload.single('profile_image'), usersController.editPhoto)
route.post("/eliminarUsuario", usersController.eliminar)

//route.get("/confirmation-deleteUser", usersController.viewDelete);

module.exports = route;