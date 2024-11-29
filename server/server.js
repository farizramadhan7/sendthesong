const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Koneksi MongoDB
mongoose.connect('mongodb://localhost:27017/cardsApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Model Kartu
const cardSchema = new mongoose.Schema({
  recipientName: String,
  message: String,
  song: {
    name: String,
    artist: String,
    album: String,
    albumImageUrl: String,
  },
});

const Card = mongoose.model('Card', cardSchema);

// Route untuk mendapatkan semua kartu
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route untuk menyimpan kartu baru
app.post('/api/cards', async (req, res) => {
  const { recipientName, message, song } = req.body;
  const newCard = new Card({ recipientName, message, song });

  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
