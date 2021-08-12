const mongoose = require("mongoose");

const EMTASKEESchema = new mongoose.Schema({
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

const EMTASKEE = new mongoose.model("EM_TASK_EE", EMTASKEESchema);

module.exports = EMTASKEE;
