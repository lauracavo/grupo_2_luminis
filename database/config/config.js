require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || 'luminis_web',
    "password": process.env.DB_PASSWORD || 'luminis',
    "database": process.env.DB_NAME || 'luminis_db',
    "host": process.env.DB_HOST || 'mysql-luminis.alwaysdata.net',
    "dialect": 'mysql',
    "operatorAliases": false
  }}

