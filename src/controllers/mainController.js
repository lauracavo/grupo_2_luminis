
const db = require('../../database/models/index');



const mainController = {

  home: async (req, res) => {
try{
    let product = await db.Product.findAll()

  for(let item of product){
      // console.log(item)
      const imgList = await db.ImageProduct.findOne({ where: {idProduct: item.idProduct}});
      product=[{...item.dataValues, imgList: imgList.dataValues}]
  //     console.log(imgList.dataValues)
   }
  
   res.render("home", {product})
} catch (error){
      res. send({ result: 'Error', payload: error });
}
   
    },
  
  aboutUs: async (req, res) => {
    try{
      res.render("aboutUs")
    } catch (error){
      res. send({ result: 'Error', payload: error });
    }
},
    }

   
      module.exports = mainController








  // index: (req, res) => {
  //   // Consulta los productos y las imágenes de la base de datos
  //   db.Product.findAll()
  //     .then(products => {
  //       return db.imageproduct.findAll({
  //       attributes: ['idProduct', [sequelize.fn('MIN', sequelize.col('idImgProduct')), 'minIdImgProduct']],
  //       group: ['idProduct'],        
  //       })
  //         .then(allImages => {
  //           const promises = allImages.map(image => {
  //               const minIdImgProduct = image.dataValues.minIdImgProduct;   
  //               console.log (minIdImgProduct) 
  //               return db.imageproduct.findOne({
  //                 where: { idImgProduct: minIdImgProduct },
  //               });
  //          })
  //          return Promise.all(promises)
  //             .then(images => {
  //               res.render("home", { products, allImages: images });
  //         })
  //       })
  //       .catch(error => {
  //         console.log (' esta promesa no puede ejercutarse')
  //         res.send({ result: 'Error', payload: error });
  //       });
  //     })
  //       .catch(error => {
  //         console.log ('promesa 2 no se ha cumplido')
  //       res.send({ result: 'Error', payload: error });
  //     });
  // }}




