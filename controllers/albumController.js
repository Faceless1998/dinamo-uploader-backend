// controllers/albumController.js
const Album = require('../models/albumModel');

exports.createAlbum = async (req, res) => {
  try {
    console.log('Files:', req.files); // Log the uploaded files

    const { name } = req.body;
    const photos = req.files ? req.files.map(file => ({ url: `/uploads/${file.filename}` })) : [];

    const newAlbum = new Album({
      name,
      photos: photos
    });

    await newAlbum.save();
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
