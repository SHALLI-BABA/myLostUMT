const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /@umt\.edu\.pk$/  // restrict to UMT emails
  },
  password: String,
  isAdmin: {
  type: Boolean,
  default: false
}
});

module.exports = mongoose.model('User', userSchema);
