const express = require("express");
const router = express.Router();
const { createData, getData } = require("../controllers/posts");

// Handle file uploads and creation
router.post("/", createData);

// Get data
router.get("/", getData);

module.exports = router;
