const path = require("path");
const dataLibros = require("../dataBase/libros.json");

const productsController = {
  getAll: (req, res) => {
    const { libros } = dataLibros;
    res.render("product", { data: libros });
  },
  byId: (req, res) => {
    const { id } = req.params;
    const { libros } = dataLibros;

    const productId = libros.find((prod) => prod.id === id);

    res.render("productDetail", { libroSelect: productId });
  },
};

module.exports = productsController;
