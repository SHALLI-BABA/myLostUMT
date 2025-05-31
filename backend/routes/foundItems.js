const express = require('express');
const router = express.Router();
const FoundItem = require('../models/foundItems');
const auth = require('../middleware/auth');

// CREATE - POST /api/founditems
router.post('/', async (req, res) => {
  try {
    const newItem = new FoundItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json({ message: 'Found item added!', item: savedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - GET /api/founditems
router.get('/', async (req, res) => {
  try {
    const query = {};
    if (req.query.category) query.category = req.query.category;
    if (req.query.location) query.location = req.query.location;
    if (req.query.date) query.date = req.query.date;

    const items = await FoundItem.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - PUT /api/founditems/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await FoundItem.findByIdAndUpdate(
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

// DELETE - DELETE /api/founditems/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await FoundItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted', item: deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
