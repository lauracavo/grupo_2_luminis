const path = require("path");
const db = require('../../../database/models');

module.exports = {
    // Consulta todos los usuarios
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.json({ result: "success", payload: user });
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
