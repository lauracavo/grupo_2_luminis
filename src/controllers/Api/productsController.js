const path = require("path");
const booksData = require("../../dataBase/books.json");
const db = require('../../../database/models');
const { response } = require("express");
//Pimer endpoint de api
const op = db.Sequelize.op;
module.exports = {
    //Consulta todos los productos
    list: (req,res) => {
        db.product.findAll ()
        .then (products =>{
            console.log ({data:products})
            return res.status(200).json ({
                total: products.length,
                data: products,
                status: 200

            })
        })
    },

    //consulta un solo producto
    show: (req,res) => {
        db.product
        .findByPk (req.params.id)
        .then (product =>{
            return res.status(200).json ({
                data: product,
                status: 200
            })
        })
    },
    //Consulta de tipo post para crear un producto
    store: (req,res) => {
        db.product
        .create (req.body)
        .then (product =>{
            return res.status(200).json ({
                data: product,
                status: 200
            })
        })
    },
    //consulta de tipo post para eliminar un producto
    delete: (req, res) => {
        db.product
        .destroy (req.params.id)
        then ((response) =>{
            
        })
        
        
    }
    
}
