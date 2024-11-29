import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import CardBrowse from '../components/CardBrowse';

function Browse() {
  const [filteredCards, setFilteredCards] = useState([]); // State untuk hasil pencarian
  const [hasSearched, setHasSearched] = useState(false); // State untuk status pencarian

  return (
    <div>
      <Navbar />
      {/* Kirim fungsi setFilteredCards dan setHasSearched ke Search */}
      <Search
        setFilteredCards={setFilteredCards}
        setHasSearched={setHasSearched}
      />
      {/* Kirim hasil pencarian dan status pencarian ke CardBrowse */}
      <CardBrowse
        filteredCards={filteredCards}
        hasSearched={hasSearched}
      />
    </div>
  );
}

export default Browse;
