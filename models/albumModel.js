// models/albumModel.js
const mongoose = require('mongoose');

// Define the schema for images
const photoSchema = new mongoose.Schema({
  url: { type: String, required: true }
}, { _id: false });

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photos: [photoSchema] // Array of photoSchema objects
}, { collection: 'albums' }); // Define the collection name for albums

module.exports = mongoose.model('Album', albumSchema);
