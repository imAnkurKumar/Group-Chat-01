const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getMainPage);
router.post("/signUp", userController.postUserSignUP);
router.post("/login", userController.postUserLogin);
module.exports = router;
