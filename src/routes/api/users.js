const express = require("express");
const router = express.Router();
const controller = require("../../controllers/Api/usersController");

// Define las rutas de usuario directamente en el objeto router
router.get("/", controller.list);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.delete("/:id", controller.delete);

module.exports = router;