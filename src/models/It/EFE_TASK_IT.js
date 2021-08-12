const mongoose = require("mongoose");

const EFETASKITSchema = new mongoose.Schema({
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

const EFETASKIT = new mongoose.model("EFE_IT_TASK", EFETASKITSchema);

module.exports = EFETASKIT;
