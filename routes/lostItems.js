const express = require('express');
const router = express.Router();
const LostItem = require('../models/lostItems'); // Make sure this model file exists

// POST /api/lostitems - add a lost item
router.post('/', async (req, res) => {
  try {
    const newItem = new LostItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json({ message: 'Lost item added!', item: savedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/lostitems - get all lost items
router.get('/', async (req, res) => {
  try {
    const items = await LostItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
