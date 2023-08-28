const express = require("express");
const route = express.Router();
const mainController = require("../controllers/mainController");

route.get("/", mainController.home);
route.get("/register", mainController.register);
route.get("/login", mainController.login);
route.post("/store", mainController.store);

module.exports = route;
