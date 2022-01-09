const express = require("express");

const router = express.Router();

//routing for homepage
router.get("/", (req, res) => {
  res.send("Hello world from router");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});
module.exports = router;
