const mongoose = require("mongoose");

const MATHTASKECESchema = new mongoose.Schema({
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

const MATHTASKECE = new mongoose.model("MATH_ECE_TASK", MATHTASKECESchema);

module.exports = MATHTASKECE;
