const express = require('express');
const router = express.Router();
const FoundItem = require('../models/foundItems'); // Make sure this model file exists

// POST /api/founditems - add a found item
router.post('/', async (req, res) => {
  try {
    const newItem = new FoundItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json({ message: 'Found item added!', item: savedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/founditems - get all found items
router.get('/', async (req, res) => {
  try {
    const items = await FoundItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
