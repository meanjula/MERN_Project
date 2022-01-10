const express = require("express");

const router = express.Router();

//routing for homepage
router.get("/", (req, res) => {
  res.send("Hello world from router");
});

//getting datbase connection and import User
require("../database/connection");
const User = require("../model/userSchema");

//storing data to databse using promises
// router.post("/register", (req, res) => {
//   const { first, last, username, email, phone, role, password, repassword } =
//     req.body;

//   //validating the user input
//   if (
//     !first ||
//     !last ||
//     !username ||
//     !email ||
//     !phone ||
//     !role ||
//     !password ||
//     !repassword
//   ) {
//     return res.status(422).json({ error: "please fill the field" });
//   }

//   //using promises if email exist in databse return err else save data in databse
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already exist" });
//       }
//       // create user collection
//       const user = new User({
//         first,
//         last,
//         username,
//         email,
//         phone,
//         role,
//         password,
//         repassword,
//       });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed to register" }));
//     })
//     .catch((err) => console.log(err));
// });

//storing data to databse using async await

router.post("/register", async (req, res) => {
  const { first, last, username, email, phone, role, password, repassword } =
    req.body;

  //validating the user input
  if (
    !first ||
    !last ||
    !username ||
    !email ||
    !phone ||
    !role ||
    !password ||
    !repassword
  ) {
    return res.status(422).json({ error: "please fill the field" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    }
    // create user collection
    const user = new User({
      first,
      last,
      username,
      email,
      phone,
      role,
      password,
      repassword,
    });
    await user.save();
    res.status(201).json({ message: "registered successfully" });
  } catch (err) {
    console.log(err);
  }

  //using promises if email exist in databse return err else save data in databse
});

module.exports = router;
