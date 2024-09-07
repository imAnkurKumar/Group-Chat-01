const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");
const Authorization = require("../middlewares/auth");

router.post(
  "/sendMessage",
  Authorization.authentication,
  chatController.messageStoreToDatabase
);

module.exports = router;
