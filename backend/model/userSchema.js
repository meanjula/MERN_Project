const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first: {
    type: String,
    require: true,
  },
  last: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  repassword: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("USER", userSchema);
module.exports = User;
