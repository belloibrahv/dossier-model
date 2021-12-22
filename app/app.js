const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World... Thank God it wednesday");
});

const port = 3000;

app.listen(port, function () {
  console.log("Application running on http://localhost:" + port);
});
