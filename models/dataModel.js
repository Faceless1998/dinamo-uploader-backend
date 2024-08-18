const mongoose = require('mongoose');

// Define the schema for images
const photoSchema = new mongoose.Schema({
  url: { type: String, required: true }
}, { _id: false });

const dataSchema = new mongoose.Schema({
  headingEng: { type: String, required: true },
  headingGeo: { type: String, required: true },
  textEng: { type: String, required: true },
  textGeo: { type: String, required: true },
  mainPhoto: { type: String, required: false }, // Assuming this is a URL or path
  photos: [photoSchema] // Array of photoSchema objects
}, { collection: 'posts' }); // Updated to 'posts'

module.exports = mongoose.model('Data', dataSchema);
