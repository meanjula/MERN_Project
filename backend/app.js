const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");

//once included in app.js acess from anywhere
dotenv.config({ path: "./config.env" });

require("./database/connection");
// const User = require("./model/userSchema");

//use middleware
app.use(express.json()); //parsing json data posted by user.
app.use(require("./router/authentication"));

const PORT = process.env.PORT;

// middleware, include function that checks the condition and perform it before doing any request action.
const middleware = (req, res, next) => {
  console.log("check the user authentication");
  next();
};

//routing for homepage
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

//routing for Contact page
app.get("/contact", (req, res) => {
  res.send("Hello Contact Page");
});

//routing for About page
app.get("/about", middleware, (req, res) => {
  res.send("Hello About Page");
});

//routing for Signup page
app.get("/register", (req, res) => {
  res.send("Hello Signup Page");
});

//routing for Signin page
app.get("/signin", (req, res) => {
  res.send("Hello Signin Page");
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost ${PORT}`);
});
