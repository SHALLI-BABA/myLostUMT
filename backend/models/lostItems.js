const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateLost: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  image: {
    type: String, // This will store the image file path or URL
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('LostItem', lostItemSchema);
