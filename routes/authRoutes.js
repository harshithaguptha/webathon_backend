const express = require("express");
const mongoose = require("mongoose");
const {
  registerOwner,
  registerSitter,
  loginOwner,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register-owner", registerOwner);

router.post("/register-sitter", registerSitter);

router.post("/login", loginOwner);

module.exports = router;
