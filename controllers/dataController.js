const Data = require('../models/dataModel');

exports.createData = async (req, res) => {
  try {
    console.log('Files:', req.files); // Log the uploaded files

    const { headingEng, headingGeo, textEng, textGeo } = req.body;
    const mainPhotoPath = req.files['mainPhoto'] ? `/uploads/${req.files['mainPhoto'][0].filename}` : null;
    const photos = req.files['photos'] ? req.files['photos'].map(file => ({ url: `/uploads/${file.filename}` })) : [];

    const newData = new Data({
      headingEng,
      headingGeo,
      textEng,
      textGeo,
      mainPhoto: mainPhotoPath,
      photos: photos
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
