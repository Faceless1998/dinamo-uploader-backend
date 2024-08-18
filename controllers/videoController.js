const Video = require('../models/videoModel');

exports.uploadVideo = async (req, res) => {
  try {
    const { name } = req.body;
    const video = req.file ? { url: `/uploads/${req.file.filename}` } : {};

    const newVideo = new Video({
      name,
      video
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
