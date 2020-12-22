const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const { generatePrimeArray, createData, displayTable } = require("./script.js");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const n = req.body.number;
  const primeArray = generatePrimeArray(n);
  const data = createData(primeArray);
  res.send(displayTable(data));
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
