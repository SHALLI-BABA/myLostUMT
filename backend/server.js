// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const lostItemsRoutes = require('./routes/lostItems');
app.use('/api/lostitems', lostItemsRoutes);

const foundItemsRoutes = require('./routes/foundItems');
app.use('/api/founditems', foundItemsRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Replace this with your routes later
app.get('/', (req, res) => {
  res.send('Lost & Found Backend Running');
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mylostumt', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch(err => console.log(err));
