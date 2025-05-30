const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  location: String,
  found: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LostItem', lostItemSchema);
