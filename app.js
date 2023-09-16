const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

const fs = require("fs");
const path = require("path");

const mainRoute = require("./src/routes/main");
const productsRoute = require("./src/routes/products");
const cartRoute = require("./src/routes/cart");
const adminRoute = require("./src/routes/admin");
const usersRoute = require("./src/routes/users");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const session = require("express-session");
app.use(
  session({
    secret: "Luminis",
    resave: false, // Para las versiones mas recientes pedia poner el resave y el saveUninitialized
    saveUninitialized: true, //
  })
);

app.use(cookieParser());

const port = process.env.PORT || 2020;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
//linea para que use el ejs
app.set("view engine", "ejs");
//linea para ubicar la carpeta views
app.set("views", "./src/views");
// nos permite trabajar los formularios
//app.use(express.urlencoded,{( extended: false)});

app.use("/", mainRoute);
app.use("/product", productsRoute);
app.use("/cart", cartRoute);
app.use("/administrador", adminRoute);
app.use("/users", usersRoute);
