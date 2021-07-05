const mongoose = require("mongoose"),
validator = require('validator');
passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'First name can\'t be empty'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Last name can\'t be empty'
  },
  username: {
    type: String,
    trim: true,
    required: 'Username name can\'t be empty'
  },
  email: {
    type: String,
    trim: true,
    index:true, 
    unique:true,
    sparse:true,
    required: 'Email can\'t be empty'
  },
  password: {
    type: String,
    required: 'Password can\'t be empty'
  },
  joined: { type: Date, default: Date.now() },
  bookIssueInfo: [
    {
      book_info: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Issue",
        },
      },
    },
  ],
  gender: {
    type : String,
    required: 'Gender can\'t be empty'
  },
  address: {
    type: String,
    required: 'Address can\'t be empty'
  },
  image: {
    type: String,
    default: "",
  },
  violationFlag: { type: Boolean, default: false },
  fines: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
