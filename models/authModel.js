const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    uname: {
      type: String,
    },
    unum: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const authModel = mongoose.model("auth", authSchema);

module.exports = authModel;
