const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

// hashing password (this method is called before save function)
userSchema.pre("save", async function (next) {
  //if password is changed then hashing it
  console.log("hi from inside");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.repassword = await bcrypt.hash(this.repassword, 12);
  }
  next();
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
