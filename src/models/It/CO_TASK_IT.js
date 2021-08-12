const mongoose = require("mongoose");

const COTASKITSchema = new mongoose.Schema({
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

const COTASKIT = new mongoose.model("CO_IT_TASK", COTASKITSchema);

module.exports = COTASKIT;
