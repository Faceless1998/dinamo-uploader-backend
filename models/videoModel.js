const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  video: { url: { type: String, required: true } }
}, { collection: 'videos' });

module.exports = mongoose.model('Video', videoSchema);
