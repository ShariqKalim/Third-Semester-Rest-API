const mongoose = require("mongoose");

const MATHTASKCSESchema = new mongoose.Schema({
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

const MATHTASKCSE = new mongoose.model("MATH_CSE_TASK", MATHTASKCSESchema);

module.exports = MATHTASKCSE;
