const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  travelerName: {
    type: String,
    required: true
  },
  businessName: {
    type: String,
    required: true
  },
  rating: Number,
  title: String,
  review: String,
  dateVisited: String
});

module.exports = mongoose.model("Review", reviewSchema);