const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dateLost: { type: Date, default: Date.now },
  location: String,
  found: { type: Boolean, default: false }
  // Add other fields you want here
});

module.exports = mongoose.model('LostItem', lostItemSchema);
