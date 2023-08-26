const path = require("path");
const dataLibros = require("../dataBase/libros.json");

const adminController = {
  getAll: (req, res) => {
    const { libros } = dataLibros;
    res.render("administrador", { data: libros });
  },
};

module.exports = adminController;
