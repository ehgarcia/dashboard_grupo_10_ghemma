const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorys.controller.js");

router.get("/", controller.listAll);

module.exports = router;