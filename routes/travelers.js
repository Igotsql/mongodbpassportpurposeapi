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

// POST create a new traveler
router.post("/", async (req, res) => {
  try {
    const newTraveler = new Traveler({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      city: req.body.city,
      state: req.body.state,
      passport: req.body.passport,
      favoriteDestination: req.body.favoriteDestination,
      profession: req.body.profession,
      interests: req.body.interests
    });

    const savedTraveler = await newTraveler.save();

    res.status(201).json({
      message: "Traveler created successfully",
      traveler: savedTraveler
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating traveler",
      error: error.message
    });
  }
});
module.exports = router;