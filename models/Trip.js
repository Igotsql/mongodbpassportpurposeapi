const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  travelerName: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  departureDate: String,
  returnDate: String,
  tripType: String,
  budget: Number,
  hotel: String,
  status: String
});

module.exports = mongoose.model("Trip", tripSchema);