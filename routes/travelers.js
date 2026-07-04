const express = require("express");
const router = express.Router();
const Traveler = require("../models/Traveler");

// GET all travelers
router.get("/", async (req, res) => {
  try {
    const travelers = await Traveler.find();
    res.json(travelers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET travelers with passport true/false
router.get("/passport/:status", async (req, res) => {
  try {
    const passportStatus = req.params.status === "true";

    const travelers = await Traveler.find({
      passport: passportStatus
    });

    res.json(travelers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET travelers by city
router.get("/city/:city", async (req, res) => {
  try {
    const travelers = await Traveler.find({
      city: req.params.city
    });

    res.json(travelers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET travelers by interest
router.get("/interest/:interest", async (req, res) => {
  try {
    const travelers = await Traveler.find({
      interests: req.params.interest
    });

    res.json(travelers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;