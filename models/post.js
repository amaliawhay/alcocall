const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true,
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
