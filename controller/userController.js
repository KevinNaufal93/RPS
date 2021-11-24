const pool = require("../database/db");
const express = require("express");
const app = express();

app.use("/assets", express.static("assets"));
app.use("/scripts", express.static("scripts"));
app.use("/database", express.static("db"));

const users = [];
const userStatus = [];

module.exports = {
  landingPage: (req, res) => {
    res.render("frontpage", {user: users});
    console.log(`user is currently ${users}`)
  },

  getRegister: (req, res) => {
    res.render("register");
  },

  register: async (req, res) => {
    try {
      let { username, email, password } = req.body;
      console.log({ username, email, password });
      console.log(`data for ${username}'s has passed into POST API`);
      const newUser = await pool.query(
        `INSERT INTO userGame (userName, userEmail, userPassword) VALUES ($1, $2, $3) RETURNING userGameId, userName;`,
        [username, email, password]
      );
      res.status(201).redirect("/").send({ message: "User added" });
    } catch (err) {
      console.log(err.message, err);
      throw err;
    }
  },

  getLogin: (req, res) => {
    res.render("login", {userCheck: userStatus});
    console.log(userStatus)
    userStatus.pop()
  },

  login: async (req, res) => {
    try {
      let { username, password } = req.body;
      console.log({ username, password });
      console.log(`${username}'s has passed into POST API`);
      const findUser = await pool.query(
        `SELECT * FROM userGame WHERE userName = '${req.body.username}' AND userPassword = '${req.body.password}'`
      );
      
        if (findUser.rowCount > 0) {
        users.push( req.body.username );
        res.status(201).redirect("/");
        } else {
          userStatus.push("Invalid User")
          res.status(404).redirect("/login");
          console.log(userStatus);
        }
    } catch (err) {
      console.log(err.message, err);
      throw err;
    }
  },

  logout: async (req, res) => {
    try {
      users.pop();
      res.status(201).redirect("/");
    } catch (err) {
      console.log(err.message, err);
      throw err;
    }
  },

  getDashboard: (req, res) => {
    res.render("dashboard");
  },

  deleteUser: async (req, res) => {
    try {
      let { userGameId } = req.body;
      console.log({ userGameId });
      console.log(`${userGameId}'s is ready to get deleted in API`);
      const deleteUser = await pool.query(
        `DELETE FROM userGame WHERE userGame.userGameId = '${req.body.userGameId}'`
      );
      res.status(201).redirect("/dashboard").send({ message: "User deleted" });
    } catch (err) {
      console.log(err.message, err);
      throw err;
    }
  },

  updateUser: async (req, res) => {
    try {
      let { userGameId, username } = req.body;
      console.log({ userGameId, username });
      console.log(`${userGameId} username's is ready to be updated in API`);
      const updateUser = await pool.query(
        `UPDATE userGame SET userName = '${req.body.username}' WHERE userGameId = ${req.body.userGameId}`
      );
      res
        .status(201)
        .redirect("/dashboard")
        .send({ message: "Username changed" });
    } catch (err) {
      console.log(err.message, err);
      throw err;
    }
  },
};
