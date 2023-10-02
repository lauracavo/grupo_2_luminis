const path = require("path");
const fs = require("fs");
const userData = require("../dataBase/users.json");
const productsData = require("../dataBase/books.json");
const dataBaseUp = require("../dataBase/userTest.json");

const mainController = {
  home: (req, res) => {
    const { books } = productsData;
    res.render("home", { data: books });
  },
  
};

module.exports = mainController;
