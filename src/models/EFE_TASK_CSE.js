const mongoose = require("mongoose");

const EFETASKCSESchema = new mongoose.Schema({
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

const EFETASKCSE = new mongoose.model("EFE_CSE_TASK", EFETASKCSESchema);

module.exports = EFETASKCSE;
