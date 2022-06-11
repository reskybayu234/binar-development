const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time : ", Date.now());
  next();
});

router.get("/birds", function (req, res) {
  res.send("Birds home page");
});

router.get("/aboutBirds", function (req, res) {
  res.send("About Birds");
});

module.exports = router;
