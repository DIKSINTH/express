const express = require("express");
const routes = express.Router();
routes.get("/input", (req, res, next) => {
  res.send(`
    <body>
      <h1>Add Name</h1>
      <form action="/output" method="POST">
        <input type="text" name="username" />
        <input type="submit" />
      </form>
    </body>
  `);
});
routes.post("/output", (req, res, next) => {
  console.log("Form Data :", req.body);
  res.send("<h1>Form Submitted Successfully</h1>");
});
module.exports = routes;
