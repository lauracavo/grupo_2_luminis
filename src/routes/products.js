const express = require("express");
const route = express.Router();
const productsController = require("../controllers/productsController");

route.get("/", productsController.getAll);
route.get("/product/:id", productsController.byId);

module.exports = route;
