const path = require("path");
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
  try {
        let product = await  db.Product.findByPk(id);
     
        const imgList = await db.ImageProduct.findAll({ where: { idProduct: product.idProduct } });
       
             res.render("productDetail", { product, imgList })
            // res.json(  {product , imgList } )
            
          
        } catch (error) {
                 res.status(500).send({ result: 'Error', payload: error.message });
                }
    },
 }

module.exports = productsController;
