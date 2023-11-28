const express = require("express");
const router = express.Router(); // Create a router instance
const controller = require("../../controllers/Api/productsController");
const productsController = require("../../controllers/Api/productsController");

router.get("/", productsController.list);
router.get("/:id", productsController.show);
router.post("/", productsController.store);
router.delete("/:id", productsController.delete);

module.exports = router;