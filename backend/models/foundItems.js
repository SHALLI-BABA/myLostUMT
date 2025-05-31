const mongoose = require('mongoose');

const foundItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  locationFound: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL or filename for uploaded image
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FoundItem', foundItemSchema);
