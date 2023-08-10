const express = require ('express');
const route = express.Router();
const cartController = require ('../controllers/cartController')

route.get('/', mainController.cart);




module.exports=route;