const mongoose = require("mongoose");

const ITWTASKCSESchema = new mongoose.Schema({
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

const ITWTASKCSE = new mongoose.model("ITW_CSE_TASK", ITWTASKCSESchema);

module.exports = ITWTASKCSE;
