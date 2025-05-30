const mongoose = require('mongoose');

const foundItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  dateFound: { type: Date, default: Date.now },
  location: String,
  foundBy: String,
  contactInfo: String,
  imageUrl: String,
  // add other fields as per your needs
});

module.exports = mongoose.model('FoundItem', foundItemSchema);
