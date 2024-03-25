const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/image", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "깃허브.png"));
});

app.listen(process.env.PORT || 3000);
