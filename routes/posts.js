const express = require("express");
const { createData, getData } = require("../controllers/posts");
const multer = require("multer");
const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle file uploads and creation
router.post(
  "/",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "photoes", maxCount: 10 },
  ]),
  createData
);

// Get data
router.get("/", getData);

module.exports = router;
