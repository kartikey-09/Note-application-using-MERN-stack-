const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// this is for the authication of user while login and signup
function authenticator(req, res, next) {
  // every time we get and post the data we have to cheak the user is authenticated or not
  const token = req.headers.authorization;
  jwt.verify(token, "kartikey", (err, decode) => {
    if(err) return res.send({
        message: "Token is not valid plese login ",
        status: 2,
      })
    if (decode) {
      req.body.user = decode.userId;
      next();
    } else {
      res.send({
        message: "Token is not valid plese login ",
        status: 2,
      });
    }
  });
}

module.exports={
    authenticator
}