const mongoose = require("mongoose");

const noteschema = mongoose.Schema(
  {
    title: { type: String, require: true },
    body: { type: String, require: true },
    user: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const NoteModel = mongoose.model("note", noteschema);
module.exports = {
  NoteModel,
};
