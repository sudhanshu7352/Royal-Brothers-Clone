const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    hourly_rate: { type: Number, required: true },
    kilometer_limit: { type: Number, required: true },
    location: { type: String, required: true },
    pickUpDate: { type: Date, required: true,default: null },
    pickUpTime: { type: String, required: true, default: null },
    dropOffDate: { type: Date, required: true,default: null },
    dropOffTime: { type: String, required: true, default: null },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Bike = mongoose.model("bikes", bikeSchema, "bikes");


module.exports = Bike;
