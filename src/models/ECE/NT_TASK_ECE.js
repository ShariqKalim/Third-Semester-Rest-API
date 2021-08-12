const mongoose = require("mongoose");

const NTTASKECESchema = new mongoose.Schema({
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

const NTTASKECE = new mongoose.model("NT_ECE_TASK", NTTASKECESchema);

module.exports = NTTASKECE;
