const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET reviews by business name
router.get("/business/:businessName", async (req, res) => {
  try {
    const reviews = await Review.find({
      businessName: req.params.businessName
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET reviews by traveler name
router.get("/traveler/:travelerName", async (req, res) => {
  try {
    const reviews = await Review.find({
      travelerName: req.params.travelerName
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET reviews with rating greater than or equal to amount
router.get("/rating/:rating", async (req, res) => {
  try {
    const reviews = await Review.find({
      rating: { $gte: Number(req.params.rating) }
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;