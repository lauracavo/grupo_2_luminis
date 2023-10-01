const path = require("path");
const fs = require("fs");
const booksData = require("../dataBase/books.json");

const adminController = {
  getAll: (req, res) => {
    const { books } = booksData;
    res.render("admin", { data: books });
  },

  create: (req, res) => {
    res.render("formCreate"); // Renderiza la página de creación de productos
  },

  store: (req, res) => {
    //definimos los datos que queremos obtener del formulario
    const {
      id,
      name,
      editorial,
      author,
      publishDate,
      datail,
      characteristic,
      category,
      price,
    } = req.body;

    // Crear un nuevo producto
    const newProduct = {
      id,
      name,
      editorial,
      author,
      publishDate,
      datail,
      characteristic,
      category,
      price,
    };

    // Agregar el nuevo producto a la lista de productos
    booksData.books.push(newProduct);

    // Guardar la información actualizada en el archivo JSON
    fs.writeFileSync(
      path.join(__dirname, "../dataBase/books.json"),
      JSON.stringify(booksData, null, 2)
    );

    res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
  },

  edit: (req,res)=>{
    const bookId = req.params.id;
    const book = booksData.books.find(book => book.id === bookId);

    res.render('formEdit', { data: book });
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
    const {books} = booksData

    // const productId= books.find((element)=>{
    //   return element.id == id
    // });

      booksData.books = booksData.books.filter((element)=>{
        return element.id != id
    })
    
 fs.writeFileSync(
        path.join(__dirname, "../dataBase/books.json"),
        JSON.stringify(booksData, null, 2)
      );
  
      res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
  },

  };

module.exports = adminController;
