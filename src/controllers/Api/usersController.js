const path = require("path");
const db = require('../../../database/models');

module.exports = {
    // Consulta todos los usuarios con paginación
    list: (req, res) => {
        const limit = req.query.limit || 10; // Número de resultados por página
        const offset = req.query.offset || 0; // Número de resultados que se deben omitir

        db.User.findAndCountAll({
            limit: limit,
            offset: offset
        })
            .then(result => {
                const users = result.rows;
                const totalCount = result.count;

                // Construir las URL de paginación
                const nextPage = offset + limit < totalCount ? `api/users/?limit=${limit}&offset=${offset + limit}` : null;
                const prevPage = offset - limit >= 0 ? `api/users/?limit=${limit}&offset=${offset - limit}` : null;

                res.json({
                    result: "success",
                    payload: users,
                    pagination: {
                        totalCount: totalCount,
                        nextPage: nextPage,
                        prevPage: prevPage
                    }
                });
            })
            .catch(error => {
                res.json({ result: "error", payload: error });
            });
    },

    // Consulta un solo usuario por ID
    show: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                if (user) {
                    res.json({ result: "success", payload: user });
                } else {
                    res.json({ result: "error", payload: "User not found" });
                }
            })
            .catch(error => {
                res.json({ result: "error", payload: error });
            });
    },

    // Crea un nuevo usuario
    store: (req, res) => {
        db.User.create(req.body)
            .then(user => {
                res.status(201).json({
                    result: "success",
                    payload: user
                });
            })
            .catch(error => {
                res.json({ result: "error", payload: error });
            });
    },

    // Elimina un usuario por ID
    delete: (req, res) => {
        db.User.destroy({
            where: { id: req.params.id }
        })
            .then(response => {
                if (response === 1) {
                    res.json({ result: "success", payload: "User deleted successfully" });
                } else {
                    res.json({ result: "error", payload: "User not found" });
                }
            })
            .catch(error => {
                res.json({ result: "error", payload: error });
            });
    }
};
