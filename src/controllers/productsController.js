const path = require("path");
const booksData = require("../dataBase/books.json");
const db = require('../../database/models/index')


const productsController = {
    getAll: async (req, res) => {
    // OBTENIENDO LOS DATOS DE LA BASE DE DATOS    
    try{
        let product = await db.Product.findAll()
    
      for(let item of product){
          // console.log(item)
          const imgList = await db.ImageProduct.findOne({ where: {idProduct: item.idProduct}});
          product=[...product,{...item.dataValues, imgList: imgList.dataValues}]
      //     console.log(imgList.dataValues)
       }
      
       res.render("product", {product})
    } catch (error){
          res. send({ result: 'Error', payload: error });
    }
       
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
