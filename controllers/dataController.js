const Data = require('../models/dataModel');

exports.createData = async (req, res) => {
  try {
    const { headingEng, headingGeo, textEng, textGeo, mainPhoto, photos } = req.body;
    const newData = new Data({
      headingEng,
      headingGeo,
      textEng,
      textGeo,
      mainPhoto,
      photos: JSON.parse(photos) // Assuming photos is a JSON string
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
