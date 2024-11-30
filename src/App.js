import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit'; // Import halaman Submit
import Browse from './pages/Browse';
import Details from './pages/Details'; // Pastikan impor halaman Details
import Support from './pages/Support'; // Pastikan halaman Support ada
import { CardProvider } from './context/CardContext';
import Search from './components/Search'; // Impor Search component
import CardBrowse from './components/CardBrowse'; // Impor CardBrowse component

function App() {
  const [filteredCards, setFilteredCards] = useState([]); // Initialize as an empty array

  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/cards/:id" element={<Details />} />
          <Route path="/support" element={<Support />} /> {/* Rute untuk halaman Support */}
          {/* Rute untuk halaman pencarian */}
          <Route
            path="/search"
            element={
              <>
                <Search setFilteredCards={setFilteredCards} /> {/* Panggil Search untuk input */}
                <CardBrowse filteredCards={filteredCards} /> {/* Panggil CardBrowse untuk menampilkan hasil */}
              </>
            }
          />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
