const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlengeh: [3, "username must be atleast 3 character long"],
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlengeh: [13, "username must be atleast 13 character long"],
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlengeh: [5, "password must be 5 character long"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
