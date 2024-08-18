const express = require('express');
const { createData, getData } = require('../controllers/dataController');
const multer = require('multer');
const router = express.Router();

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle file uploads for multiple files if needed
// Updated endpoint to support multiple photo uploads
router.post('/', upload.array('photos'), createData);
router.get('/', getData);

module.exports = router;
