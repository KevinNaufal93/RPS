const pool = require("./database/db");

module.exports = {
  getPlay: (req, res) => {
    res.render("mainPage");
  },
};
