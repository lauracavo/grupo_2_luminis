const path = require("path");
const db = require('../../../database/models');
const { response } = require("express");
//Pimer endpoint de api
// const op = db.Sequelize.op;
module.exports = {
    //Consulta todos los productos
    list: (req,res) => {
        db.Product.findAll()
        .then (products =>{
            res.json({result: "succes" , playload: products})
        })
        .catch(error => {
            res.json({result: "error" , playload: error})
        })              
    },

    //consulta un solo producto
    show: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then (product =>{
            res.json({result: "succes" , playload: product})
        })
        .catch(error => {
            res.json({result: "error" , playload: error})
        })              
    },
    //Consulta de tipo post para crear un producto
    store: (req,res) => {
        db.Product.create(req.body)
        .then (product =>{
            return res.status(200).json ({
                data: product,
                status: 200
            })
        })
    },
    //consulta de tipo post para eliminar un producto
    delete: (req, res) => {
        db.Product.destroy (req.params.id)
        then ((response) =>{
            
        })
        
        
    }
    
}
