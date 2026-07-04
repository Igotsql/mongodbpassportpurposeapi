const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Traveler = require("../models/Traveler");
const Trip = require("../models/Trip");
const Business = require("../models/Business");
const Review = require("../models/Review");

const travelers = require("../data/travelers.json");
const trips = require("../data/trips.json");
const businesses = require("../data/businesses.json");
const reviews = require("../data/reviews.json");

dotenv.config();

const seedDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing. Check your .env file.");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected for seeding.");

    await Traveler.deleteMany({});
    await Trip.deleteMany({});
    await Business.deleteMany({});
    await Review.deleteMany({});

    console.log("Old data removed.");

    await Traveler.insertMany(travelers);
    await Trip.insertMany(trips);
    await Business.insertMany(businesses);
    await Review.insertMany(reviews);

    console.log("Seed data inserted successfully.");
    console.log(`Travelers inserted: ${travelers.length}`);
    console.log(`Trips inserted: ${trips.length}`);
    console.log(`Businesses inserted: ${businesses.length}`);
    console.log(`Reviews inserted: ${reviews.length}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();