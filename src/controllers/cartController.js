const arrLibros = require('../dataBase/libros.json');


const cartController = {
    home: (req,res)=>{        
        
        res.render('cart');   
    }
}