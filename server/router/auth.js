const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from server router js");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  //   res.send("Register Page");
  res.json({ message: req.body });
});

module.exports = router;
