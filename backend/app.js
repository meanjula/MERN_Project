const express = require("express");
const app = express();

const DB = `mongodb+srv://anjula:<${process.env.PASSWORD}>@cluster0.xyokn.mongodb.net/mernstack?retryWrites=true&w=majority`;

// middleware, include function that checks the condition and implement it before doing any request action.
const middleware = (req, res, next) => {
  console.log("check the user authentication");
  next();
};

//routing for homepage
app.get("/", (req, res) => {
  res.send("Hello world");
});

//routing for Contact page
app.get("/contact", (req, res) => {
  res.send("Hello Contact Page");
});

//routing for About page
app.get("/about", middleware, (req, res) => {
  res.send("Hello About Page");
});

//routing for Signup page
app.get("/signup", (req, res) => {
  res.send("Hello Signup Page");
});

//routing for Signin page
app.get("/signin", (req, res) => {
  res.send("Hello Signin Page");
});

app.listen(3000, () => {
  console.log(`Server is running at localhost 3000`);
});
