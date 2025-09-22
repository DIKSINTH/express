const express = require("express");
const routes = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view/add-product.html"));
});

routes.post("/add-product", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Form Data:", req.body); // { title: 'your input' }
  res.send("<h1>Form Submitted Successfully</h1>");
});

module.exports = routes;
