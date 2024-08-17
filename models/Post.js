const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    description: { type: String },
  },
  { _id: false }
);

const postSchema = new mongoose.Schema(
  {
    headingEng: { type: String, required: true },
    headingGeo: { type: String, required: true },
    textEng: { type: String, required: true },
    textGeo: { type: String, required: true },
    photo: { type: String, required: true },
    photoes: [photoSchema],
  },
  { collection: "posts" }
);

module.exports = mongoose.model("Data", postSchema);
