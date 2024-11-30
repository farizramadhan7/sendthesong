const express = require('express');
const cors = require('cors');
const app = express();

// Port environment yang sesuai dengan platform (Vercel atau localhost)
const port = process.env.PORT || 5000;

// Menggunakan middleware
app.use(cors());
app.use(express.json()); // Untuk menangani JSON request

let cards = []; // Dummy data untuk kartu

// Route untuk root path (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Cards API!');
});

// API untuk mendapatkan semua kartu
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

// API untuk menambahkan kartu baru
app.post('/api/cards', (req, res) => {
  const newCard = req.body;

  // Validasi data
  if (!newCard.id || !newCard.recipientName || !newCard.song || !newCard.message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  cards.push(newCard); // Menambah kartu ke array
  res.status(201).json(newCard); // Mengembalikan kartu yang baru ditambahkan
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
