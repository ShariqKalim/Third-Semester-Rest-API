const mongoose = require("mongoose");

const ADETASKITSchema = new mongoose.Schema({
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

const ADETASKIT = new mongoose.model("ADE_IT_TASK", ADETASKITSchema);

module.exports = ADETASKIT;
