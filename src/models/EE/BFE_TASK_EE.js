const mongoose = require("mongoose");

const BFETASKEESchema = new mongoose.Schema({
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

const BFETASKEE = new mongoose.model("BFE_TASK_EE", BFETASKEESchema);

module.exports = BFETASKEE;
