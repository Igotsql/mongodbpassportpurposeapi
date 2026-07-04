const mongoose = require("mongoose");

const travelerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: Number,
  city: String,
  state: String,
  passport: Boolean,
  favoriteDestination: String,
  profession: String,
  yearsInTech: Number,
  ownsBusiness: Boolean,
  businessName: String,
  interests: [String]
});

module.exports = mongoose.model("Traveler", travelerSchema);