const path = require("path");
const booksData = require("../dataBase/books.json");
const db = require('../../database/models/index')


const productsController = {
    getAll: (req, res) => {
    // OBTENIENDO LOS DATOS DE LA BASE DE DATOS    
            db.Product.findAll()
            .then(products =>{
                //res.send({result: 'Succes', payload: products})
                res.render("product", { products });
            })
            .catch(error=>{
                res.send({result: 'Error', payload: error})
            })
        },

    byId: (req, res) => {
        const {id} = req.params
        db.Product.findByPk(parseInt(id))
        .then(product=>{
            res.render('productDetail', {product})
        })
        .catch(error=>{
            res.send({result: 'Error', payload: error})
        })
        }
 };

module.exports = productsController;
