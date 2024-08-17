const Data = require("../models/Post"); // Ensure this path is correct
const multer = require("multer");
const path = require("path");

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

exports.createData = async (req, res) => {
  try {
    const { headingEng, headingGeo, textEng, textGeo } = req.body;

    // Handle files
    const photo = req.file ? `/uploads/${req.file.filename}` : null;
    const photoes = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    const newData = new Data({
      headingEng,
      headingGeo,
      textEng,
      textGeo,
      photo,
      photoes,
    });

    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
