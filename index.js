const express = require("express");
const app = express();
const port = 3000;
const pool = require("./database/db");

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // taking req.body
app.set("view engine", "ejs");

app.get("/play", (req, res) => {
    res.render("mainPage");
});

app.use("/assets", express.static("assets"));
app.use("/scripts", express.static("scripts"));
app.use("/database", express.static("db"));

const { userRouter } = require("./router");
app.use("/", userRouter);

app.listen(port, console.log("server running on port " + port));
