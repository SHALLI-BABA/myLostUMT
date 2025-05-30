const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  location: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LostItem', lostItemSchema);
