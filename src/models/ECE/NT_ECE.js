const mongoose = require("mongoose");

const NTECESchema = new mongoose.Schema({
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

const NTECE = new mongoose.model("NT_ECE", NTECESchema);

module.exports = NTECE;
