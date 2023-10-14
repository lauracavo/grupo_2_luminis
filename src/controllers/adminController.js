const path = require("path");
const fs = require("fs");
const booksData = require("../dataBase/books.json");
const db = require('../../database/models/index');



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
        await db.Product.create(req.body);
        console.log( (req.body))
        res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
    } catch (error) {
        // Manejar el error aquí
        console.error(error); // Puedes imprimir el error en la consola para depuración
        res.status(500).send("Ha ocurrido un error al crear el producto.");
    }
},
   
  edit: (req,res)=>{       
     db.Product.findByPk(req.params.id)
     .then(products => {
       res.render("formEdit", { products})
     })
     .catch(error =>{
      res.send({result: 'Error', payload: error})
     })

    // const bookId = req.params.id;
    // const book = booksData.books.find(book => book.id === bookId);

    // res.render('formEdit', { data: book }); 
  },

  editProduct: (req,res) =>{
    console.log ("entraste a editar");
    const {id} = req.params;
    console.log(req.params.id)
    const {
      name,
      editorial,
      author,
      publishDate,
      datail,
      characteristic,
      category,
      price,
    } = req.body;
    const productId=booksData.books.find((element)=>{
      return element.id == id
  });

        name ? productId.name = name: productId.name;
        editorial ? productId.editorial = editorial: productId.editorial;
        author ? productId.author = author: productId.author;
        publishDate ? productId.publishDate = publishDate: productId.publishDate;
        datail ? productId.datail = datail: productId.datail;
        characteristic ? productId.characteristic = characteristic: productId.characteristic;
        category ? productId.category = category: productId.category;
        price ? productId.price = price: productId.price;

        fs.writeFileSync(
          path.join(__dirname, "../dataBase/books.json"),
          JSON.stringify(booksData, null, 2)
        );
    
        res.redirect("/admin");
  },


  delete: (req,res)=>{
    console.log ("eliminando");
    const {id} = req.params;
    console.log (req.params.id);
    db.Product.destroy({
      where:{id_product: parseInt(id)}
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
