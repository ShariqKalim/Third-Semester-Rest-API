const mongoose = require("mongoose");

const MATHTASKITSchema = new mongoose.Schema({
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

const MATHTASKIT = new mongoose.model("MATH_IT_TASK", MATHTASKITSchema);

module.exports = MATHTASKIT;
