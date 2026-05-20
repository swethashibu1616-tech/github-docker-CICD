const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("SWETHA SHIBU GITHUB DOCKER CI/CD Running Sucessfully");
});

app.get("/health", (req, res) => {
  res.send("Healthy");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});