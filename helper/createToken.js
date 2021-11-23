const jwt = require("jsonwebtoken");
module.exports = {
  createToken: (payload) => {
    return jwt.sign(payload, "1sampai8", { expiresIn: "6h" });
  },
};
