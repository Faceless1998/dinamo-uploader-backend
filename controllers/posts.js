const Data = require("../models/Post"); // Ensure this path is correct

// Handle file uploads and creation
exports.createData = async (req, res) => {
  try {
    const { headingEng, headingGeo, textEng, textGeo } = req.body;

    // Handle files
    const photo = req.files['photo'] ? `/uploads/${req.files['photo'][0].filename}` : null;
    const photoes = req.files['photoes'] ? req.files['photoes'].map((file) => `/uploads/${file.filename}`) : [];

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

// Retrieve data
exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
