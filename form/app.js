const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/input", (req, res, next) => {
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
app.use("/output", (req, res, next) => {
  console.log("Form Data :", req.body);
  res.send("<h1>Form Submitted Successfully</h1>");
});
app.listen(3000);
