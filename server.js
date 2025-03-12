const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello, World!"));

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

module.exports = app; 
