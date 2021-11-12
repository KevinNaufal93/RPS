const jwt = require("jsonwebtoken");
module.exports = {
  authToken: (req, res, next) => {
    return jwt.verify(req.token, "1sampai8", (err, decode) => {
      if (err) {
        return res.status(401).send(err);
      }
      req.user = decode;
      next();
    });
  },
};
