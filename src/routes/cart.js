const express = require ('express');
const route = express.Router();
const cartController = require ('../controllers/cartController')
const authMiddleware = require ('../middlewares/authMiddleware')

route.get('/', authMiddleware ,cartController.cart);
route.get('/add/:id', cartController.addToCart)



module.exports=route;