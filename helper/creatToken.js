const jwt = require("jsonwebtoken");
module.exports = {
  creatToken: (payload) => {
    return jwt.sign(payload, "1sampai8", { expiresIn: "6h" });
  },
};
