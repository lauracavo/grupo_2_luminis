const express = require("express");
const route = express.Router();
const productsController = require("../controllers/productsController");
const multer = require('multer')

route.get("/", productsController.getAll);
route.get("/productDetail/:id", productsController.byId);

module.exports = route;
