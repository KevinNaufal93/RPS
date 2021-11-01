const express = require("express");
const app = express();
const port = 3000;
const pool = require("./database/db");

app.use(express.urlencoded({ extended: false} ));
app.use(express.json()) // taking req.body
app.set("view engine", "ejs");

app.use("/assets", express.static("assets")); //naming public as assets isnt okay, change later
app.use("/scripts", express.static("scripts")); 
app.use("/database", express.static("db")); 

const users = []

app.get("/", (req, res) => {
  res.render("frontpage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
  let { username, email, password } = req.body;
  console.log({username, email, password})
  console.log(`data for ${username}'s has passed into POST API`)
  const newUser = await pool.query(`INSERT INTO userGame (userName, userEmail, userPassword) VALUES ($1, $2, $3) RETURNING userGameId, userName;`, [username, email, password]);
  res.status(201).redirect('/').send(`User added`);
  }
  catch (err) {
      console.log(err.message, err)
      throw err;
              }
            });
          
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) =>{
  try {
    let { username, password } = req.body;
    console.log({username, password})
    console.log(`${username}'s has passed into POST API`)
    const findUser = await pool.query(`SELECT * FROM userGame WHERE userGame.userName = '${req.body.username}' AND userGame.userPassword = '${req.body.password}'`);
    users.push({
      name: req.body.username,
    })
    res.status(201).redirect('/').send(`User found`);
    }
    catch (err) {
        console.log(err.message, err)
        throw err;
                }
              });
            
app.get("/play", (req, res) => {
  res.render("mainPage");
});

app.listen(port, console.log("server running on port " + port));
