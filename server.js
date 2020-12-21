const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const { createTable } = require("./script.js");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const n = req.body.number;

  createTable(n);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
