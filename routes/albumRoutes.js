// routes/albumRoutes.js
const express = require('express');
const { createAlbum, getAlbums } = require('../controllers/albumController');
const multer = require('multer');
const router = express.Router();

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle multiple file uploads for photos
router.post('/', upload.array('photos', 10), createAlbum); // Adjust maxCount as needed
router.get('/', getAlbums);

module.exports = router;
