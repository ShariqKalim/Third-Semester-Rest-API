const mongoose = require("mongoose");

const DSDTASKECESchema = new mongoose.Schema({
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

const DSDTASKECE = new mongoose.model("DSD_ECE_TASK", DSDTASKECESchema);

module.exports = DSDTASKECE;
