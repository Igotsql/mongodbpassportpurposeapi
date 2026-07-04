const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

// GET all businesses
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Black-owned businesses
router.get("/black-owned", async (req, res) => {
  try {
    const businesses = await Business.find({
      blackOwned: true
    });

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET businesses by country
router.get("/country/:country", async (req, res) => {
  try {
    const businesses = await Business.find({
      country: req.params.country
    });

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET businesses by city
router.get("/city/:city", async (req, res) => {
  try {
    const businesses = await Business.find({
      city: req.params.city
    });

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET businesses by category
router.get("/category/:category", async (req, res) => {
  try {
    const businesses = await Business.find({
      category: req.params.category
    });

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET businesses with rating greater than or equal to amount
router.get("/rating/:rating", async (req, res) => {
  try {
    const businesses = await Business.find({
      rating: { $gte: Number(req.params.rating) }
    });

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;