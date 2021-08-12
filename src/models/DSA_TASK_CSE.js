const mongoose = require("mongoose");

const DSATASKCSESchema = new mongoose.Schema({
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

const DSATASKCSE = new mongoose.model("DSA_CSE_TASK", DSATASKCSESchema);

module.exports = DSATASKCSE;
