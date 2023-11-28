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
            cant: Math.min(prod.cant, retornar.stock), // Limitar la cantidad al stock disponible
            stock: retornar.stock, // Agregar el campo stock
        }
    },
 }
const cartController = {
    cart: async (req,res)=>{        
           
            if (req.cookies.cart) {
                
                let indices = req.cookies.cart.map((cart) => {
                    return parseInt(cart.id);
                });
                let lista = await db.Product.findAll({ where: {idProduct: {[Op.in]:indices}}});
                
                let products = lista.map((elemento) => {
                    return {
                        idProduct: elemento.idProduct,
                        name: elemento.name,
                        salePrice: elemento.salePrice,                       
                        cant: req.cookies.cart[galleta.buscar(req.cookies.cart, elemento.idProduct)].cant,
                        stock : elemento.stock
                    }
                });
                
                
               res.render('Carrito', {req:req ,  products, message: products.length === 0 ? 'El carrito está vacío' : null });
                 
                
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
    },

    deleteProductCookie: (req, res) => {      
            
                const lista = req.cookies.cart;
                console.log(req.params.id)
                if (galleta.buscar(lista, req.params.id) > -1) {
                    lista.splice(galleta.buscar(lista, req.params.id), 1);
                }
                res.cookie('cart', lista);
                res.redirect('/Carrito');
            
        },
        buy: async (req, res) => {
              // OBTENIENDO LOS DATOS DE LA BASE DE DATOS    
              let userId;
        try {

            if (req.session.successLoginUser) {
                
                userId = req.session.successLoginUser.idUser; // Asume que la sesión contiene la información del usuario, incluido el ID
                console.log(userId)
            } else {
                // Manejar el caso en que el usuario no esté autenticado
                userId = null
            } 

            let personalData = await db.Personal.findByPk(userId);
            console.log ({personalData})
            
            const user = await db.User.findOne({ where: { idUser: userId } });
            console.log({user})
            let userLogged
            if (req.session.successLoginUser) {
                userLogged = true;
                // console.log(userLogged);
            } else {
                userLogged = false;
                // console.log(userLogged);
            }

            res.render("buy", { personalData, user, userLogged })
        
        } catch (error) {
            res.status(500).send({ result: 'Error', payload: error.message });
        }}
     } 
module.exports = cartController;