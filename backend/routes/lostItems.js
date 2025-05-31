const express = require('express');
const router = express.Router();
const LostItem = require('../models/lostItems');
const auth = require('../middleware/auth');

// CREATE - POST /api/lostitems
router.post('/', async (req, res) => {
  try {
    const newItem = new LostItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json({ message: 'Lost item added!', item: savedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - GET /api/lostitems
router.get('/', async (req, res) => {
  try {
    const query = {};
    if (req.query.category) query.category = req.query.category;
    if (req.query.location) query.location = req.query.location;
    if (req.query.date) query.date = req.query.date;

    const items = await LostItem.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - PUT /api/lostitems/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await LostItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item updated', item: updatedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - DELETE /api/lostitems/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await LostItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted', item: deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
