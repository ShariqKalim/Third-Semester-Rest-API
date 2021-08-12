const mongoose = require("mongoose");

const DSAITSchema = new mongoose.Schema({
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

const DSAIT = new mongoose.model("DSA_IT", DSAITSchema);

module.exports = DSAIT;
