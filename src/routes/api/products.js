const express = require("express");
const router = express.Router(); // Create a router instance

const controller = require("../../controllers/Api/productsController");

router.get("/", controller.list);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.delete("/:id", controller.delete);

module.exports = router;