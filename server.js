// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const lostItemsRoutes = require('./routes/lostItems');
app.use('/api/lostitems', lostItemsRoutes);

// Replace this with your routes later
app.get('/', (req, res) => {
  res.send('Lost & Found Backend Running');
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch(err => console.log(err));
