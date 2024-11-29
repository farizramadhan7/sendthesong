import React, { useState, useEffect } from 'react';
import { useCardContext } from '../context/CardContext';

function CardBrowse() {
  const { cards } = useCardContext();
  const [filteredCards, setFilteredCards] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!hasSearched) {
      setFilteredCards(cards);
    }
  }, [cards, hasSearched]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 mt-24">
      <div className="space-y-6">
        {filteredCards.length === 0 ? (
          <p>No cards found.</p>
        ) : (
          filteredCards.map((card) => (
            <div key={card.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <h3 className="font-semibold">{card.recipientName}</h3>
              <p>{card.message}</p>
              <div className="mt-2">
                <p>
                  <strong>Song: </strong>{card.song?.name || 'No song selected'}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CardBrowse;
