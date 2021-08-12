const mongoose = require("mongoose");

const EFTTASKEESchema = new mongoose.Schema({
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

const EFTTASKEE = new mongoose.model("EFT_TASK_EE", EFTTASKEESchema);

module.exports = EFTTASKEE;
