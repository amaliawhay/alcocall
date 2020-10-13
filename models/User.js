const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: "Username is required.",
  },
  password: {
    type: String,
    trim: true,
    required: "Username is required",
  },
  age: {
    type: Number,
    required: true,
    // validate: [
    //   ({ age }) => age >= 21,
    //   "You must be 21 or older to sign in",
    // ],
  },
  userFavorites: {
    type: Array,
    required: false,
  },
});

const User = mongoose.model("User", postSchema);

module.exports = User;
