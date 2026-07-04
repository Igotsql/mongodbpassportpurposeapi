const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// GET all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET trips by country
router.get("/country/:country", async (req, res) => {
  try {
    const trips = await Trip.find({
      country: req.params.country
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET trips by status
router.get("/status/:status", async (req, res) => {
  try {
    const trips = await Trip.find({
      status: req.params.status
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET trips under a budget amount
router.get("/budget-under/:amount", async (req, res) => {
  try {
    const trips = await Trip.find({
      budget: { $lte: Number(req.params.amount) }
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET trips over a budget amount
router.get("/budget-over/:amount", async (req, res) => {
  try {
    const trips = await Trip.find({
      budget: { $gt: Number(req.params.amount) }
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;