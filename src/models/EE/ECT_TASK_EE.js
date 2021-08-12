const mongoose = require("mongoose");

const ECTTASKEESchema = new mongoose.Schema({
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

const ECTTASKEE = new mongoose.model("ECT_TASK_EE", ECTTASKEESchema);

module.exports = ECTTASKEE;
