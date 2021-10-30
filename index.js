const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use("/assets", express.static("assets")); //naming public as assets isnt okay, change later
app.use("/scripts", express.static("scripts")); 

app.get("/", (req, res) => {
  res.render("frontpage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/play", (req, res) => {
  res.render("mainPage");
});

app.listen(port, console.log("server running on port " + port));
