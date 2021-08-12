const mongoose = require("mongoose");

const EDTASKECESchema = new mongoose.Schema({
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

const EDTASKECE = new mongoose.model("ED_ECE_TASK", EDTASKECESchema);

module.exports = EDTASKECE;
