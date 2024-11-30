const express = require('express');
const cors = require('cors');
const app = express();

// Menggunakan port dari Vercel atau default ke 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Untuk meng-handle JSON request

let cards = []; // Array untuk menyimpan kartu

// Route untuk root path (optional, untuk memberi respons saat mengunjungi /)
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

  // Validasi jika data kartu tidak lengkap
  if (!newCard.id || !newCard.recipientName || !newCard.song || !newCard.message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  cards.push(newCard); // Menambahkan kartu ke dalam array
  res.status(201).json(newCard); // Mengembalikan kartu yang baru ditambahkan
});

// API untuk mendapatkan kartu berdasarkan ID
app.get('/api/cards/:id', (req, res) => {
  const { id } = req.params;
  const card = cards.find(c => c.id === id);
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ message: 'Card not found' });
  }
});

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
