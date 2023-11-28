const express = require ('express');
const route = express.Router();
const cartController = require ('../controllers/cartController')
const authMiddleware = require ('../middlewares/authMiddleware')

route.get('/', authMiddleware ,cartController.cart);
route.get('/add/:id', cartController.addToCart);
route.post('/delete/:id', cartController.deleteProductCookie);

route.get('/buy',authMiddleware, cartController.buy)

module.exports=route;