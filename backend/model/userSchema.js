const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

// hashing password (this method is called before save function)
userSchema.pre("save", async function (next) {
  //if password is changed then hashing it
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.repassword = await bcrypt.hash(this.repassword, 12);
  }
  next();
});

// generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
