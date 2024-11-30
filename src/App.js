import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit';
import Browse from './pages/Browse';
import Details from './pages/Details';
import Support from './pages/Support';
import { CardProvider } from './context/CardContext';
import Search from './components/Search';
import CardBrowse from './components/CardBrowse';

function App() {
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/cards/:id" element={<Details />} />
          <Route path="/support" element={<Support />} />
          <Route
            path="/search"
            element={
              <>
                <Search setFilteredCards={setFilteredCards} />
                <CardBrowse filteredCards={filteredCards} />
              </>
            }
          />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
