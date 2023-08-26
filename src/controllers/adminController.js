const path = require("path");
const fs = require("fs");
const dataLibros = require("../dataBase/libros.json");

const adminController = {
  getAll: (req, res) => {
    const { libros } = dataLibros;
    res.render("administrador", { data: libros });
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
      path.join(__dirname, "../dataBase/libros.json"),
      JSON.stringify(dataLibros, null, 2)
    );

    res.redirect("/administrador"); // Redirigir de nuevo a la página de administrador
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
        path.join(__dirname, "../dataBase/libros.json"),
        JSON.stringify(dataLibros, null, 2)
      );
  
      res.redirect("/administrador"); // Redirigir de nuevo a la página de administrador
  },

  };

module.exports = adminController;
