const express = require ('express');
const route = express.Router();
const productsController = require ('../controllers/productsController')

route.get('/productos', productsController.getAll);
route.get('/productDetail/:id', productsController.byId);




module.exports=route;