const { log } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const port = process.env.PORT || 2020;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
app.get("/productos", (req, res) => {
  res.sendFile(__dirname + "/views/productos.html");
});
app.get("/comprar", (req, res) => {
  res.sendFile(__dirname + "/views/comprar.html");
});
app.get("/carrito", (req, res) => {
  res.sendFile(__dirname + "/views/carrito.html");
});
app.get("/productDetail", (req, res) => {
  res.sendFile(__dirname + "/views/productDetail.html");
});

app.listen(port, () => console.log("Servidor corriendo en el puerto ${port}"));
