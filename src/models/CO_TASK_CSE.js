const mongoose = require("mongoose");

const COTASKCSESchema = new mongoose.Schema({
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

const COTASKCSE = new mongoose.model("CO_CSE_TASK", COTASKCSESchema);

module.exports = COTASKCSE;
