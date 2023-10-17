const express = require ('express');
const route = express.Router();
const cartController = require ('../controllers/cartController')
const authMiddleware = require ('../middlewares/authMiddleware')

route.get('/', authMiddleware ,cartController.cart);




module.exports=route;