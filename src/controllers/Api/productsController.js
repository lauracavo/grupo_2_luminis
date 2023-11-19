const path = require("path");
const db = require('../../../database/models');
const { response } = require("express");

module.exports = {
    // Consulta todos los productos con paginación
    list: (req, res) => {
        if (req.query.limit || req.query.offset) {
            const limit = parseInt(req.query.limit) || 10;
            const offset = parseInt(req.query.offset) || 0;

            db.Product.findAndCountAll({
                limit: limit,
                offset: offset,
            })
            .then(result => {
                const products = result.rows;
                const totalItems = result.count;
                
                //construir las URL de paginacion
                const nextPage = offset + limit < totalItems ? `/api/products/?limit=${limit}&offset=${offset + limit}` : null;
                const prevPage = offset > 0 ? `/api/products/?limit=${limit}&offset=${Math.max(0, offset - limit)}` : null;

                res.json({
                    result: "success",
                    payload: {
                        products: products,
                        next: nextPage,
                        previous: prevPage
                    }
                });
            })
            .catch(error => {
                res.json({ result: "error", payload: error });
            });
        } else {
            // Consulta todos los productos sin paginación
            db.Product.findAll()
            .then(products => {
                res.json({ result: "success", payload: products });
            })
            .catch(error => {
                res.json({ result: "error", payload: error });
            });
        }
    },

    // Consulta un solo producto
    show: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            res.json({ result: "success", payload: product });
        })
        .catch(error => {
            res.json({ result: "error", payload: error });
        });
    },

    // Consulta de tipo post para crear un producto
    store: (req, res) => {
        db.Product.create(req.body)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200
            });
        })
        .catch(error => {
            res.json({ result: "error", payload: error });
        });
    },

    // Consulta de tipo post para eliminar un producto
    delete: (req, res) => {
        db.Product.destroy(req.params.id)
        .then(response => {
            // Realiza acciones adicionales si es necesario
            res.json({ result: "success", payload: response });
        })
        .catch(error => {
            res.json({ result: "error", payload: error });
        });
    }
};
