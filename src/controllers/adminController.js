const path = require("path");
const dataLibros = require("../dataBase/libros.json");
let { libros } = dataLibros;
const fs = require ('fs');
//const dataFile = path.join(__dirname, "..", "dataBase", "libros.json");

const adminController = {
  getAll: (req, res) => {
   //const { libros } = dataLibros;
    console.log({libros});
    res.render("administrador", { data: libros });
  },
  create: (req, res) => {
    const { id } = req.params;
    //const { data } = dataBase;
    

    const productId = libros.find((prod) => prod.id === id);

    res.render("formCreate", { libroSelect: productId });
  },
 store: (req, res) => {
    console.log("metodo subir");
    const nombre = req.body.nombre
    console.log(nombre);
    //const { id, nombre, editorial, autor, fechaPublicacion, detalle, caracteristica, categoria, precio, img } = req.body;
    const nuevoProducto = { 
      id,
      nombre,
      editorial,
      autor,
      fechaPublicacion,
      detalle,
      caracteristica,
      categoria,
      precio,
      img
     };
     console.log(nuevoProducto);
    dataLibros.libros.push(nuevoProducto);
    fs.writeFileSync(path.join(__dirname, "../dataBase/libros.json"), JSON.stringify(dataLibros, null, 2));
    res.redirect("/administrador")
  }
};

module.exports = adminController;
