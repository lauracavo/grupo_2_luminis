const express = require ('express');
const route = express.Router();
const cartController = require ('../controllers/cartController')

route.get('/', cartController.cart);




module.exports=route;