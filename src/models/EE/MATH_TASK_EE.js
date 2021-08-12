const mongoose = require("mongoose");

const MATHTASKEESchema = new mongoose.Schema({
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

const MATHTASKEE = new mongoose.model("MATH_TASK_EE", MATHTASKEESchema);

module.exports = MATHTASKEE;
