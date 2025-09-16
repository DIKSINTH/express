const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});
app.listen(3000);
