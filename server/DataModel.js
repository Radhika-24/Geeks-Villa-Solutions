const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    State: {
      type: String,
      required: true,
      unique: true,
    },
    Confirmed: {
      type: Number,
      default: 0,
      required: true,
    },
    Recovered: {
        type: Number,
        default: 0,
        required: true,
    },
    Deceased: {
        type: Number,
        default: 0,
        required: true,
    },
    Tested: {
        type: Number,
        default: 0,
        required: true,
    },
    Other: {
        type: Number,
        default: 0,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CovidDataModel", dataSchema);
