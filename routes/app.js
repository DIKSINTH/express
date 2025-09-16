const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.listen(3000);
