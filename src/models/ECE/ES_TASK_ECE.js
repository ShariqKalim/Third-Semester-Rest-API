const mongoose = require("mongoose");

const ESTASKECESchema = new mongoose.Schema({
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

const ESTASKECE = new mongoose.model("ES_ECE_TASK", ESTASKECESchema);

module.exports = ESTASKECE;
