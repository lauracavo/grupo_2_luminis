const express = require("express");
const route = express.Router();
const productsController = require("../controllers/productsController");

/* localhost:2020/prodcutos */
route.get("/", productsController.getAll);
route.get("/productDetail/:id", productsController.byId);



module.exports = route;
