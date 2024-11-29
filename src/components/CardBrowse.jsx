import React from 'react';

function CardBrowse({ filteredCards, hasSearched }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 mt-16 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <a
              key={card.id}
              href={`/cards/${card.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border bg-card text-card-foreground shadow relative w-full max-w-xs cursor-pointer overflow-hidden hover:bg-gray-950/[.05] transition-colors duration-200"
            >
              <div className="flex flex-col space-y-1.5 p-4">
                <p className="text-sm font-medium text-gray-500">To: {card.recipientName}</p>
                <p
                  className="mt-2 text-3xl text-gray-800"
                  style={{
                    fontFamily: 'ReenieBeanie',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.message}
                </p>
                <div className="flex items-center p-1 pt-7 gap-2">
                  <img
                    src={card.song.album.images[2]?.url}
                    alt={`${card.song.name} album cover`}
                    className="flex-shrink-0 w-10 h-10"
                  />
                  <div className="flex flex-wrap gap-1 bg-slate-300/20 rounded-sm">
                    <p className="text-sm font-medium text-gray-800 truncate">{card.song.name} -</p>
                    <p className="text-gray-600 text-sm">{card.song.artists[0].name}</p>
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          hasSearched && <p className="text-center text-gray-500">No cards found. Try searching.</p>
        )}
      </div>
    </div>
  );
}

export default CardBrowse;
