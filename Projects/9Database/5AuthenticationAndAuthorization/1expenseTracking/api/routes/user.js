const express = require("express");
const checkadmin = require("../middleware/check-auth");
const UserController = require("../controller/user");

const router = express.Router();

router.post("/register", UserController.createUser);

router.post("/login", UserController.userLogin);

router.get("/list", checkadmin, UserController.listUser);


module.exports = router;
