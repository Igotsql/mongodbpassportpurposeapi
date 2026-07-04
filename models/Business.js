const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: String,
  country: String,
  category: String,
  blackOwned: Boolean,
  rating: Number,
  website: String,
  tags: [String]
});

module.exports = mongoose.model("Business", businessSchema);