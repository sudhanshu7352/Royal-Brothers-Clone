const express = require("express");
const router = express.Router();
const Bikes = require("../models/bike.model");

router.get("/", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

router.get("/:id", async (req, res) => {
  const bikeId = req.params.id;
  const bikes = await Bikes.findById(bikeId).lean().exec();
  res.status(200).json({ data: bikes });
});


module.exports = router;
