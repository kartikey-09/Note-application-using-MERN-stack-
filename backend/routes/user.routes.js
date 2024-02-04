const express = require("express");
const { UserModel } = require("../models/User.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("All the user");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) 
  {
    // Store hash in your password DB.
    if (err) return res.send({ message: "Something went wrong", status: 0 });

    try {
      let user = new UserModel({ name, email, password: hash });
      await user.save();
      res.send({
        message: "user created",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // we can send a option of how much time this token will be valid
  let option = {
    // it will create a loop of 3 min for accesing data-base, not in login and sign up time
    expiresIn: "3m",
  };

  // cheak user is avilable or not
  try {
    let data = await UserModel.find({ email });
    if (data.length > 0) {
      //creating token from data becuase jab user login ho jayega to data send krenga in the form of token
      let token = jwt.sign({ userId: data[0]._id }, "kartikey", option);

      // Load hash from your password DB.
      bcrypt.compare(password, data[0].password, function (err, result) {
        // result == true
        if (err)
          return res.send({
            message: "Something went wrong: " + err,
            status: 0,
          });
        if (result) {
          res.send({
            message: "user login Sucessfully",
            token: token,
            status: 1,
          });
        } else {
          res.send({
            message: "login Unsucessfull due to incorect password",
            status: 0,
          });
        }
      });
    }
    // when there is no user exist the this else condition will perform
    else {
      res.send({
        message: "user does not exist",
        status: 0,
      });
    }
  } catch (error) {
    // this catch method is for when something is wrong in database
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

module.exports = { userRouter };
