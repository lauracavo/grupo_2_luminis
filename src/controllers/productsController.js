const path = require("path");
const arrLibros = require("../dataBase/libros.json");

const productsController = {
  getAll: (req, res) => {
    res.render("product", arrLibros);
    //console.log(arrLibros);
    //  const { results } = arrLibros;

    //  console.log(results)

    //  res.render("product", { libros: results });
  },
  byId: (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const { results } = arrLibros;

    const product = results.find((prod) => prod.id === id);

    res.render("product", { product });

    /*     const { id } = req.params;

    const findLibro = arrLibros.find((libro) => libro.id == id);

    res.render("productDetail", { libroSelect: findLibro }); */
  },
};

module.exports = productsController;
