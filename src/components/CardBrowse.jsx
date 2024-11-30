import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database'; // Import ref and onValue
import { database } from '../firebase/firebaseConfig'; // Import your Firebase database instance

function CardBrowse({ hasSearched }) {
  const [filteredCards, setFilteredCards] = useState([]); // Initialize state
  const [allCards, setAllCards] = useState([]); // State untuk menyimpan semua card

  useEffect(() => {
    // Getting data from Firebase Realtime Database
    const cardsRef = ref(database, 'cards'); // 'cards' is the path in Firebase
    
    // Listening for real-time changes to data
    onValue(cardsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Converting data into an array and updating the state
        const cardArray = Object.keys(data).map((key) => {
          const card = data[key];
          return {
            id: key,
            recipientName: card.recipientName,
            message: card.message,
            song: card.song, // Store song data (including name, artist, album, etc.)
          };
        });
        setAllCards(cardArray); // Simpan semua card untuk digunakan dalam pencarian
        setFilteredCards(cardArray); // Set filtered cards to all cards initially
      }
    });

    // Cleanup when the component unmounts
    return () => setFilteredCards([]); // Clear filtered cards on unmount
  }, []); // Empty array ensures it runs only once when the component mounts

  // Jika pencarian sudah dilakukan, tampilkan filteredCards
  const cardsToShow = hasSearched ? filteredCards : allCards;

  return (
    <div className="w-full h-full max-w-2xl mx-auto p-4 mt-16 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {cardsToShow.length > 0 ? (
          cardsToShow.map((card) => {
            const { id, recipientName, message, song } = card;
            const { name: songName, artists, album } = song || {};
            const albumCover = album?.images[2]?.url;
            const artistName = artists?.[0]?.name;

            return (
              <a
                key={id}
                href={`/cards/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border bg-card text-card-foreground shadow relative w-full h-[200px] cursor-pointer overflow-hidden hover:bg-gray-950/[.05] transition-colors duration-200"
              >
                <div className="flex flex-col space-y-1.5 p-4 ">
                  <p className="text-sm font-medium text-gray-500 mb-6">To: {recipientName}</p>
                  <p
                    className="text-4xl text-gray-800 mt-8" // Pesan lebih ke bawah
                    style={{
                      fontFamily: 'ReenieBeanie',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {message}
                  </p>
                  <div className="flex items-center space-x-2 ">
                    {albumCover && (
                      <img src={albumCover} alt="Album Cover" className="w-9 h-9 object-cover mt-9" />
                    )}
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-700 mt-9">{songName}</p>
                      <p className="text-xs text-gray-500 mt-9">{artistName}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <div className="text-center text-gray-500">No cards found</div>
        )}
      </div>
    </div>
  );
}

export default CardBrowse;
