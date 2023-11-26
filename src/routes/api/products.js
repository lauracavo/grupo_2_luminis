const express = require("express");
const router = express.Router(); // Create a router instance

const controller = require("../../controllers/Api/productsController");

router.get("/", controller.list);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.delete("/:id", controller.delete);

// Nueva ruta para manejar la solicitud GET a "/"
router.get("/", (req, res) => {
    // Puedes enviar algún contenido o redirigir a otra ruta según tus necesidades
    res.send("¡Bienvenido a la página de productos!");
  });

module.exports = router;