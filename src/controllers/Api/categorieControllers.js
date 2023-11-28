// const path = require("path");
// const db = require('../../../database/models');
// const { response } = require("express");

// module.exports = {
//     // Consulta todas las categorias con paginación
//     list: (req, res) => {
//         if (req.query.limit || req.query.offset) {
//             const limit = parseInt(req.query.limit) || 10;
//             const offset = parseInt(req.query.offset) || 0;

//             db.Categorie.findAndCountAll({
//                 limit: limit,
//                 offset: offset,
//             })
//             .then(result => {
//                 const categorie = result.rows;
//                 const totalItems = result.count;
                
//                 //construir las URL de paginacion
//                 const nextPage = offset + limit < totalItems ? `/api/categorie/?limit=${limit}&offset=${offset + limit}` : null;
//                 const prevPage = offset > 0 ? `/api/categorie/?limit=${limit}&offset=${Math.max(0, offset - limit)}` : null;

//                 res.json({
//                     result: "success",
//                     payload: {
//                         category: categorie,
//                         next: nextPage,
//                         previous: prevPage
//                     }
//                 });
//             })
//             .catch(error => {
//                 res.json({ result: "error", payload: error });
//             });
//         } else {
//             // Consulta todas categorias sin paginación
//             db.Categorie.findAll()
//             .then(categorie => {
//                 res.json({ result: "success", payload: categorie });
//             })
//             .catch(error => {
//                 res.json({ result: "error", payload: error });
//             });
//         }
//     },

//     // Consulta una sola categoria
//     show: (req, res) => {
//         db.Categorie.findByPk(req.params.id)
//         .then(categorie => {
//             res.json({ result: "success", payload: category });
//         })
//         .catch(error => {
//             res.json({ result: "error", payload: error });
//         });
//     },

//     // Consulta de tipo post para crear una categoria
//     store: (req, res) => {
//         db.Categorie.create(req.body)
//         .then(product => {
//             return res.status(200).json({
//                 data: categorie,
//                 status: 200
//             });
//         })
//         .catch(error => {
//             res.json({ result: "error", payload: error });
//         });
//     },

//     // Consulta de tipo post para eliminar un categoria
//     delete: (req, res) => {
//         db.Categorie.destroy(req.params.id)
//         .then(response => {
//             // Realiza acciones adicionales si es necesario
//             res.json({ result: "success", payload: response });
//         })
//         .catch(error => {
//             res.json({ result: "error", payload: error });
//         });
//     }
// };
