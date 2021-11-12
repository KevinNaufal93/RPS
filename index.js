const express = require("express");
const app = express();
const port = 3000;
const pool = require("./database/db");

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // taking req.body
app.set("view engine", "ejs");

app.use("/assets", express.static("assets")); //naming public as assets isnt okay, change later
app.use("/scripts", express.static("scripts"));
app.use("/database", express.static("db"));

const { userRouter } = require("./router");
app.use("/user", userRouter);

app.listen(port, console.log("server running on port " + port));
