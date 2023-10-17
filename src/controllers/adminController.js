const path = require("path");
const fs = require("fs");
const booksData = require("../dataBase/books.json");
const db = require('../../database/models/index');
const upload = require("../middlewares/multerConfigProd");



const adminController = {
  getAll: (req, res) => {
    db.Product.findAll()
      .then(product =>{
          //res.send({result: 'Succes', payload: products})
          res.render("admin", { product });
      })
      .catch(error=>{
          res.send({result: 'Error', payload: error})
      })
  },
  create:  async(req, res) => {
   const allCategories = await db.Categorie.findAll({})
    
     console.log(await db.Categorie.findAll({attributes: ["name"]}))
      
      res.render ('formCreate', {allCategories})        
     // Renderiza la página de creación de productos
  },

  store: async(req, res) => {
    try {
     const {
      name, brand, editorial, author, detail, characteristic, purchasePrice, salePrice, stock, idCategory
    } = req.body; 

    // Crear el producto 
    const product = await db.Product.create({
      name, brand, editorial, author, detail, characteristic, purchasePrice, salePrice, stock, idCategory
    });

         const idProduct = product.idProduct; 
         console.log(idProduct)
         
         // Guardar las imágenes asociadas al producto 
         const imgProduct = req.file;
         console.log (req.file)
         
          // Verificamos si hay una imagen cargada
    if (imgProduct) {
      // Si hay una imagen cargada, la guardamos
      const imageRecord = { name: imgProduct.filename, idProduct };
      await db.imageproduct.create(imageRecord);
    } else {
      // Si no hay imagen cargada, guardamos una imagen por defecto
      const defaultImageRecord = { name: 'sinImagen.png', idProduct }; 
      await db.imageproduct.create(defaultImageRecord);
    }
             res.redirect("/admin"); 
          } 
          catch (error) { 
            console.error(error); res.status(500).send("Ha ocurrido un error al crear el producto."); }
   },   
  edit: (req,res)=>{       
     db.Product.findByPk(req.params.id)
     .then(products => {
       res.render("formEdit", { products})
     })
     .catch(error =>{
      res.send({result: 'Error', payload: error})
     })
    },
   
    editProduct: async (req,res) => {       
        try {
          const {id} = req.params;
          await db.Product.update(req.body, {
           
            where: {idProduct: parseInt(id)}
          });
          res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
      } catch (error) {
          // Manejar el error aquí
          console.error(error); // Puedes imprimir el error en la consola para depuración
          res.status(500).send("Ha ocurrido un error al crear el producto.");
      }
    },
  delete: (req,res)=>{
    console.log ("eliminando");
    const {id} = req.params;
    console.log (req.params.id);
    db.Product.destroy({
      where:{idProduct: parseInt(id)}
  })
  .then(result=>{
      res.send({result: 'Succes', payload: result})
  })
  .catch(error=>{
      res.send({result: 'Error', payload: error})
  })
  res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
    // const {books} = booksData

    // const productId= books.find((element)=>{
    //   return element.id == id
    // });

      // booksData.books = booksData.books.filter((element)=>{
      //   return element.id != id
    // })
    
//  fs.writeFileSync(
//         path.join(__dirname, "../dataBase/books.json"),
//         JSON.stringify(booksData, null, 2)
//       );
  
     
  },

  };

module.exports = adminController;
