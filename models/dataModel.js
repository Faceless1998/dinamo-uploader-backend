const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  headingEng: { type: String, required: true },
  headingGeo: { type: String, required: true },
  textEng: { type: String, required: true },
  textGeo: { type: String, required: true },
  mainPhoto: { type: String, required: true },
  photos: { type: [String], required: true }, // Array of strings
}, { collection: 'dinamo' });

module.exports = mongoose.model("Data", dataSchema);
