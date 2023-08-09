const { log } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");
const mainRoute = require('./src/routes/main') 
const productsRoute = require('./src/routes/products') 

const app = express();

const port = process.env.PORT || 2020;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use('/', mainRoute);
app.use ('/',productsRoute)





