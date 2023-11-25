const db = require('../../database/models');
const { Op } = require("sequelize");
const galleta = {                                                       //objeto con funciones para la cookie
    buscar: (list, buscar) =>                                           //busca el indice de un elemento en la cookie
    {
        let elemento = list.find(element => element.id == buscar);
        return list.indexOf(elemento);
    },
    armar: (prod) => {
        let retornar = db.Product.findByPk(prod.id);
        let devolver;
        devolver = {
            id: retornar.id,
            name: retornar.name,
            salePrice: retornar.salePrice,       
            cant: prod.cant
        }
    },
 }
const cartController = {
    cart: async (req,res)=>{        
        
            if (req.cookies.cart) {
                console.log(req.cookies.cart)
                let indices = req.cookies.cart.map((cart) => {
                    return parseInt(cart.id);
                });
                let lista = await db.Product.findAll({ where: {idProduct: {[Op.in]:indices}}});
                console.log(lista)
                let products = lista.map((elemento) => {
                    return {
                        idProduct: elemento.idProduct,
                        name: elemento.name,
                        salePrice: elemento.salePrice,                       
                        cant: req.cookies.cart[galleta.buscar(req.cookies.cart, elemento.idProduct)].cant,
                    }
                });
                res.render('Carrito'  , { products });
            } },  
        
    
    addToCart: (req,res)  =>{  
        let lista = [];
        if (req.cookies.cart) {
            lista = req.cookies.cart;
            if (galleta.buscar(lista, req.params.id) > -1) {
                lista[galleta.buscar(lista, req.params.id)].cant += 1;
            }
            else {
                lista.push({
                    id: req.params.id,
                    cant: 1
                });
            }
        }
        else {
            lista.push({
                id: req.params.id,
                cant: 1
            });
        }
        res.cookie('cart', lista);
        res.redirect('/');
         }
} 
module.exports = cartController;