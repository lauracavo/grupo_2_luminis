const express = require("express");
const route = express.Router();
const usersController = require("../controllers/usersController");
const upload = require('../routes/main');


route.get("/register", usersController.register);    //localhost2020:/users/register
route.get("/login", usersController.login);          //localhost2020:/users/login
route.post("/store", usersController.store);         //localhost2020:/users/store

module.exports = route;


