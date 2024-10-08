const express = require('express');
const { createData, getData } = require('../controllers/dataController');
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

router.post('/', upload.fields([
  { name: 'mainPhoto', maxCount: 1 },
  { name: 'photos', maxCount: 10 } // Adjust maxCount as needed
]), createData);

router.get('/', getData);

module.exports = router;
