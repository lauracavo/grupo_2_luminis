const path = require("path");
const booksData = require("../dataBase/books.json");
const db = require('../../database/models/index')

const productsController = {
    getAll: async (req, res) => {
    // OBTENIENDO LOS DATOS DE LA BASE DE DATOS    
    try{
        let product = await db.Product.findAll()
    
      for(let item of product){
          
          const imgList = await db.ImageProduct.findOne({ where: {idProduct: item.idProduct}});
          product=[...product,{...item.dataValues, imgList: imgList.dataValues}]
      //     console.log(imgList.dataValues)
       }
      
       res.render("product", {product})
    } catch (error){
          res. send({ result: 'Error', payload: error });
    }
       
},   

    byId: async (req, res) => {
        const {id} = req.params
    try{
        let product = await db.Product.findByPk(parseInt(id));
        
        if (!product) {
            return res.status(404).send({ result: 'Error', payload: 'Product not found' });
        }

        
       
const imgList = await db.ImageProduct.findAll({ where: { idProduct: product.idProduct } });

        // Add imgList to the product object
        product.dataValues.imgList = imgList.map(img => img.dataValues);

        console.log("objeto product", { product });
        res.render('productDetail', { product });
    } catch(error){
            res.send({result: 'Error', payload: error})
        }
    },
 }

module.exports = productsController;
