const express = require("express");
const router = express.Router(); // Create a router instance
const controller = require("../../controllers/Api/categorieControllers");
const categorieController = require("../../controllers/Api/categorieControllers");

router.get("/", categorieController.list);
router.get("/:id", categorieController.show);
router.post("/", categorieController.store);
router.delete("/:id", categorieController.delete);

module.exports = router;