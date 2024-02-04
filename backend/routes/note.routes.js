const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel");

const noteRouter = express.Router();
noteRouter.use(authenticator);

// api of note model
// http://localhost:4000/note
noteRouter.get("/", async (req, res) => {
  let token = req.headers.authorization;

  jwt.verify(token, "kartikey", async (err, decode) => {
    try {
      let data = await NoteModel.find({ user: decode.userId });
      res.send({
        data: data,
        message: "Sucess",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: "failed",
        message: error.message,
        status: 0,
      });
    }
  });
});

// Api for creating a note
// http://localhost:4000/note/create
noteRouter.post("/create", async (req, res) => {
  try {
    // when a request came for creating this try method is call  in which note is created, after that await mode help oyt to save
    // and respond it with a message of note created
    let note = new NoteModel(req.body);
    await note.save();
    res.send({
      message: "Note created",
      status: 1,
    });
  } catch (error) {
    // when their is is some error then catch method is called nd user get the error with the exact mesaage
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

// when u need to update a note in your account, this api will call
noteRouter.patch("/", async (req, res) => {
  let { id } = req.headers;
  try {
    await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({
      message: "Note Updated",
      status: 1,
    });
  } catch (error) {
    res.send({
        message:error.message,
        status: 0,
      });
  }
});


// when u need to delete a note in your account, this api will call
noteRouter.delete("/", async (req, res) => {;[=
]
    let { id } = req.headers;
    try {
      await NoteModel.findByIdAndDelete({ _id: id });
      res.send({
        message: "Note Deleted",
        status: 1,
      });
    } catch (error) {
      res.send({
          message:error.message,
          status: 0,
        });
    }
  });

module.exports = {
  noteRouter,
};
