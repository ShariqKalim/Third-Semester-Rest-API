const mongoose = require("mongoose");

const NMTASKEESchema = new mongoose.Schema({
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

const NMTASKEE = new mongoose.model("NM_TASK_EE", NMTASKEESchema);

module.exports = NMTASKEE;
