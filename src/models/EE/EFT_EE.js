const mongoose = require("mongoose");

const EFTEESchema = new mongoose.Schema({
  topic: {
    type: String,
    require: true,
    trim: true,
  },
  date: {
    type: String,
    require: true,
    trim: true,
  },
  time: {
    type: String,
    require: true,
    trim: true,
  },
  link: {
    type: String,
    require: true,
    trim: true,
  },
});

const EFTEE = new mongoose.model("EFT_EE", EFTEESchema);

module.exports = EFTEE;
