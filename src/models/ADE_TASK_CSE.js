const mongoose = require("mongoose");

const ADETASKCSESchema = new mongoose.Schema({
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

const ADETASKCSE = new mongoose.model("ADE_CSE_TASK", ADETASKCSESchema);

module.exports = ADETASKCSE;
