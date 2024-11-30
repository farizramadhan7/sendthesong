import React from 'react';

function CardBrowse({ filteredCards }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 mt-16 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => {
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
                className="rounded-xl border bg-card text-card-foreground shadow relative w-full max-w-xs cursor-pointer overflow-hidden hover:bg-gray-950/[.05] transition-colors duration-200"
              >
                <div className="flex flex-col space-y-1.5 p-4">
                  <p className="text-sm font-medium text-gray-500">To: {recipientName}</p>
                  <p
                    className="mt-2 text-3xl text-gray-800"
                    style={{
                      fontFamily: 'ReenieBeanie',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {message}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    {albumCover && (
                      <img
                        src={albumCover}
                        alt="Album Cover"
                        className="w-9 h-9 object-cover"
                      />
                    )}
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-700">{songName}</p>
                      <p className="text-xs text-gray-500">{artistName}</p>
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
