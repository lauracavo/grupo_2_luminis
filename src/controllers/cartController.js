const path = require('path');

const cartController = {
    cart: (req,res)=>{        
        
        res.render('Carrito');   
    }
}
module.exports = cartController;