const express = require("express");
const app = express();
const port = 3000;
const { client } = require("./db");

app.set("view engine", "ejs");

app.use("/assets", express.static("assets")); //naming public as assets isnt okay, change later
app.use("/scripts", express.static("scripts")); 
app.use(express.urlencoded({ extended: true} ));


app.get("/", (req, res) => {
  res.render("frontpage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// app.post("/register/user", (req, res) => {

//     let username = req.body.username;
//     let password = req.body.password;
//     let email = req.body.email;
//     console.log(`${username}, ${email}, ${password} accessed into API`)
//     let insertQuery = `Insert into user_biodata (username, email, password) values (
//       ${client.escape(username)},
//       ${client.escape(email)},
//       ${client.escape(password)});`
//     db.query(insertQuery, (err, result) => {
//         if (err) {
//             return res.send({err, message: "Invalid input"})
//         }
//         if (result[0]) {     
//               console.log("Account has been verified")
//               return res.status(200).send({ dataLogin: result[0], message:"Login Success"})
//         } else {
//             console.log(`result[0] is ${result[0]}`)
//         }
//     })
//   });

  app.post("/register", (req, res) => {
    let { username, email, password } = req.body;
    console.log({username, email, password})
    console.log(`data for ${username}'s has passed into POST API`)
    client.query(`INSERT INTO user_game (username, email, password) VALUES ($1, $2, $3) RETURNING user_game_id, password`, [username, email, password],
              (err, results) => {
                if (err) {
                  throw err;
                } else {
                  console.log(results.rows);
                  res.redirect("/");
                }
              }
            )
          });

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login/user", (req, res) =>{
  //ToDo:
  //send data to DB
})

app.get("/play", (req, res) => {
  res.render("mainPage");
});

app.listen(port, console.log("server running on port " + port));
