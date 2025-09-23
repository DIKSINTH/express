const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const path = require("path");

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route handling
app.use("/admin", adminRoutes);
app.use(shopRoutes); // shop will handle "/"
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view/404.html"));
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
