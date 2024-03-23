const express = require("express");
const { saveSitter } = require("../controllers/sitterController");

const router = express.Router();

// Route to save sitter data
router.post("/save-sitter", saveSitter);

module.exports = router;
