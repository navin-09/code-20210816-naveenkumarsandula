const express = require("express");
Router = express.Router();

Router.get("/", (req, res) => res.send("Application Home Route"));

const { bmiCalculator } = require("../controllers/bmiCalculator");

Router.post("/bmiCalculator", (req, res) => {
  bmiCalculator(req, res);
});

module.exports = Router;
