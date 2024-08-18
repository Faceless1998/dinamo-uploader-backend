const express = require('express');
const upload = require('../config/multer'); // Import the multer configuration
const router = express.Router();

// POST route for uploading files
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    // req.file contains the uploaded file information
    console.log(req.file);

    // Send a success response with the file details
    res.status(200).json({
      message: 'File uploaded successfully',
      file: req.file
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
