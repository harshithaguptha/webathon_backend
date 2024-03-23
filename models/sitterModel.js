const mongoose = require("mongoose");

const sitterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  overnightAvailability: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
    required: true,
  },
  otherService: {
    type: String,
  },
});

const Sitter = mongoose.model("Sitter", sitterSchema);

module.exports = Sitter;
