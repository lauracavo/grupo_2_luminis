const path = require("path");
const fs = require("fs");
const dataLibros = require("../dataBase/books.json");

const adminController = {
  getAll: (req, res) => {
    const { libros } = dataLibros;
    res.render("admin", { data: libros });
  },

  create: (req, res) => {
    res.render("formCreate"); // Renderiza la página de creación de productos
  },

  store: (req, res) => {
    //definimos los datos que queremos obtener del formulario
    const {
      id,
      nombre,
      editorial,
      autor,
      fechaPublicacion,
      detalle,
      caracteristica,
      categoria,
      precio,
    } = req.body;

    // Crear un nuevo producto
    const newProduct = {
      id,
      nombre,
      editorial,
      autor,
      fechaPublicacion,
      detalle,
      caracteristica,
      categoria,
      precio,
    };

    // Agregar el nuevo producto a la lista de productos
    dataLibros.libros.push(newProduct);

    // Guardar la información actualizada en el archivo JSON
    fs.writeFileSync(
      path.join(__dirname, "../dataBase/books.json"),
      JSON.stringify(dataLibros, null, 2)
    );

    res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
  },

  edit: (req,res)=>{
    const libroId = req.params.id;
    const libro = dataLibros.libros.find(libro => libro.id === libroId);

    res.render('formEdit', { data: libro });
  },

  editProduct: (req,res) =>{
    console.log ("entraste a editar");
    const {id} = req.params;
    console.log(req.params.id)
    const {
      nombre,
      editorial,
      autor,
      fechaPublicacion,
      detalle,
      caracteristica,
      categoria,
      precio,
    } = req.body;
    const productoId=dataLibros.libros.find((element)=>{
      return element.id == id
  });

        nombre ? productoId.nombre = nombre: productoId.nombre;
        editorial ? productoId.editorial = editorial: productoId.editorial;
        autor ? productoId.autor = autor: productoId.autor;
        fechaPublicacion ? productoId.fechaPublicacion = fechaPublicacion: productoId.fechaPublicacion;
        detalle ? productoId.detalle = detalle: productoId.detalle;
        caracteristica ? productoId.caracteristica = caracteristica: productoId.caracteristica;
        categoria ? productoId.categoria = categoria: productoId.categoria;
        precio ? productoId.precio = precio: productoId.precio;

        fs.writeFileSync(
          path.join(__dirname, "../dataBase/books.json"),
          JSON.stringify(dataLibros, null, 2)
        );
    
        res.redirect("/admin");
  },


  eliminar: (req,res)=>{
    console.log ("eliminando");
    const {id} = req.params;
    console.log (req.params.id);
    const {libros} = dataLibros

    // const productoId= libros.find((element)=>{
    //   return element.id == id
    // });

      dataLibros.libros = dataLibros.libros.filter((element)=>{
        return element.id != id
    })
    
 fs.writeFileSync(
        path.join(__dirname, "../dataBase/books.json"),
        JSON.stringify(dataLibros, null, 2)
      );
  
      res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
  },

  };

module.exports = adminController;
