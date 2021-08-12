const mongoose = require("mongoose");

const ECTEESchema = new mongoose.Schema({
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

const ECTEE = new mongoose.model("ECT_EE", ECTEESchema);

module.exports = ECTEE;
