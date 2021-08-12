const mongoose = require("mongoose");

const ITWTASKITSchema = new mongoose.Schema({
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

const ITWTASKIT = new mongoose.model("ITW_IT_TASK", ITWTASKITSchema);

module.exports = ITWTASKIT;
