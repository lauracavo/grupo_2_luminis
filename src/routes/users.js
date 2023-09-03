const express = require("express");
const app = express();
const route = express.Router();
const usersController = require("../controllers/usersController");
const upload = require('../middlewares/multerConfig');


route.get("/register", usersController.register);    //localhost2020:/users/register
route.get("/login", usersController.login);          //localhost2020:/users/login
route.post("/store", usersController.store);         //localhost2020:/users/store

app.post('/store', upload.single('profile_image'), (req, res) => {
    res.redirect('/')
  });

module.exports = route;


