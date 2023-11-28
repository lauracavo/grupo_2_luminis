const express = require("express");
const app = express();

//configuracion de cors
const cors = require ("cors");
app.use (cors());

const session = require("express-session");
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

app.use(
  session({
    secret: "Luminis",
    resave: false, // Para las versiones mas recientes pedia poner el resave y el saveUninitialized
    saveUninitialized: true, //
  })
);

const port = process.env.PORT || 2020;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

//Middlewares de cookies
app.use(cookieParser());

const autoLogin = require('./src/middlewares/autoLogin');
app.use(autoLogin);

const loginMiddleware = require('./src/middlewares/loginMiddleware');
app.use(loginMiddleware);


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
app.use("/Carrito", cartRoute);
app.use("/admin", adminRoute);
app.use("/users", usersRoute);
app.use("/productos", productsRoute)

//api de producto
const productsApiRoute = require("./src/routes/api/products");
app.use("/api/products", productsApiRoute); 

//api de users
const usersApiRoute = require("./src/routes/api/users");
app.use("/api/users", usersApiRoute); 

// //api de categorie
// const categorieApiRoute = require("./src/routes/api/categorie");
// app.use("/api/categorie", categorieApiRoute); 

app.use (express.static(path.resolve(__dirname, "../public")));

//creo la coleccion de mis recursos (APIS)
app.use("/api/products", productsApiRoute);
app.use("/api/users", usersApiRoute);
// app.use("/api/categori", categorieApiRoute)

