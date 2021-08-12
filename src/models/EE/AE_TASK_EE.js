const mongoose = require("mongoose");

const AETASKEESchema = new mongoose.Schema({
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

const AETASKEE = new mongoose.model("AE_TASK_EE", AETASKEESchema);

module.exports = AETASKEE;
