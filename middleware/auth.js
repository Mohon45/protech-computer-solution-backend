const jwt = require("jsonwebtoken");
const { httpResponse } = require("../utils/httpResponse");

const auth = {
  verifyToken: (req, res, next) => {
    const authToken = req.cookies.token;
    const refreshToken = req.cookies.refreshToken;
    const token = authToken;
    if (token === undefined) {
      const err = new Error(
        JSON.stringify(httpResponse("error_auth", {}, "User not logged in."))
      );
      err.status = 401;
      return next(err);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        const err = new Error(
          JSON.stringify(httpResponse("error_auth", {}, "Token expired."))
        );
        err.status = 403;
        return next(err);
      }
      req.user = user;
      next();
    });
  },
};

module.exports = auth;
