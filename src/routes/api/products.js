const express = require ("express");
const route = express.Router;

const controller = require("../../controllers/Api/productsController")
router.get ("/", controller.list)
router.get ("/:id", controller.show)
router.post ("/", controller.store)
router.detete ("/:id", controller.delete)
