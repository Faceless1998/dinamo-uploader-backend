const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the data
const DataSchema = new Schema({
  headingEng: { type: String, required: true },
  headingGeo: { type: String, required: true },
  textEng: { type: String, required: true },
  textGeo: { type: String, required: true },
  mainPhoto: { type: String, required: true }, // Store URL or path to the main photo
  photos: [String] // Array to store URLs or paths to additional photos
},{collection: 'posts'});


// Create and export the model
const DataModel = mongoose.model('Data', DataSchema);

module.exports = DataModel;
