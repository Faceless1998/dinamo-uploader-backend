// routes/dataRoutes.js

const express = require('express');
const { createData, getData } = require('../controllers/dataController');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('photo'), createData);
router.get('/', getData);

module.exports = router;
