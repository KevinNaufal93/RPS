const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));
app.use("/scripts", express.static("scripts")); //naming public as assets isnt okay, change later

app.get("/", (req, res) => {
  res.render("frontpage");
});

app.get("/play", (req, res) => {
  res.render("mainPage");
});

app.listen(port, console.log("server running on port " + port));
