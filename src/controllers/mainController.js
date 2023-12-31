
const db = require('../../database/models/index');



const mainController = {

  home: async (req, res) => {
try{
    let products = await db.Product.findAll({ limit: 4 });
    const product = await Promise.all(products.map(async (item) => {
           const imgList = await db.ImageProduct.findOne({ where: {idProduct: item.idProduct}});
           return { ...item.dataValues, imgList: imgList.dataValues };
            }));

        let userLogged
        if(req.session.successLoginUser){
          userLogged = true;
        } else{
          userLogged = false;
        }
        
        res.render("home", {product, userLogged})
      } catch (error){
            res. send({ result: 'Error', payload: error });
        }
   
    },
  
  aboutUs: async (req, res) => {
    try {
      let userLogged
        if(req.session.successLoginUser){
          userLogged = true;
        } else{
          userLogged = false;
        }
      res.render("aboutUs" , {userLogged})
    } catch (error){
      res.send({ result: 'Error', payload: error });
    }
},

  frequentQuestions: async (req, res) => {
    try {
      let userLogged
        if(req.session.successLoginUser){
          userLogged = true;
        } else{
          userLogged = false;
        }
      res.render("frequentQuestions" , {userLogged})
    } catch (error) {
      res.send({ result: 'Error', payload: error});
    }
  }
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




