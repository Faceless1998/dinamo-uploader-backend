const Data = require('../models/dataModel');

exports.createData = async (req, res) => {
  try {
    console.log(req.body); // Log the request body
    console.log(req.files); // Log the uploaded files

    const { headingEng, headingGeo, textEng, textGeo } = req.body;
    if (!req.files['mainPhoto'] || req.files['mainPhoto'].length === 0) {
      throw new Error('Main photo is required');
    }
    
    const mainPhoto = `/uploads/${req.files['mainPhoto'][0].filename}`;
    const photos = req.files['photos'] ? req.files['photos'].map(file => `/uploads/${file.filename}`) : [];

    const newData = new Data({
      headingEng,
      headingGeo,
      textEng,
      textGeo,
      mainPhoto,
      photos
    });

    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.error(error); // Log the error
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
