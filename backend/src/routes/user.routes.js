const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.Controller.js");



//list all users
router.get("/users", controller.listAll);
router.get("/users/:id", controller.listDetailed);

module.exports = router;
