//Import Statements
const mongoose = require("mongoose");

//Create Schema
const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    mobile: {
      type: Number,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);

//Create modal
module.exports = mongoose.model("Form", formSchema);
