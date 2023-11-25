const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res, next) => {
  res.send("hello from node!");
});

app.listen(port, () => {
  console.log(`server started on ${port} !`);
});
