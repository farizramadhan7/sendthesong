import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import CardBrowse from '../components/CardBrowse';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/firebaseConfig';
import Footer from '../components/Footer';

function Browse() {
  const [cards, setCards] = useState([]); // Menyimpan semua kartu dari Firebase
  const [filteredCards, setFilteredCards] = useState([]); // Menyimpan hasil pencarian
  const [hasSearched, setHasSearched] = useState(false); // Menandai apakah pencarian telah dilakukan

  useEffect(() => {
    const cardsRef = ref(database, 'cards');
    onValue(cardsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cardArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCards(cardArray);
      }
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Search
          cards={cards}
          setFilteredCards={setFilteredCards}
          setHasSearched={setHasSearched}
        />
        <CardBrowse filteredCards={filteredCards} hasSearched={hasSearched} />
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
