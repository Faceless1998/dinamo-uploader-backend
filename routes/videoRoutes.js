const express = require('express');
const { uploadVideo } = require('../controllers/videoController');
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

// Handle single file upload for video
router.post('/', upload.single('video'), uploadVideo);

module.exports = router;
