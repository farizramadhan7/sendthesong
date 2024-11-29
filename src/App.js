import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit'; // Import halaman Submit
import Browse from './pages/Browse';
import Details from './pages/Details'; // Pastikan impor halaman Details
import Support from './pages/Support'; // Pastikan halaman Support ada
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/cards/:id" element={<Details />} />
          <Route path="/support" element={<Support />} /> {/* Rute untuk halaman Support */}
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
