import React from 'react';
import { useParams } from 'react-router-dom';
import { useCardContext } from '../context/CardContext';
import { format } from 'date-fns'; // Import format from date-fns

function SongCard() {
  const { id } = useParams();
  const { cards } = useCardContext();
  const card = cards.find(card => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-y-auto my-8">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-xl mb-4 mt-4">
          Hello,
          <span className="text-3xl ml-2" style={{ fontFamily: 'ReenieBeanie' }}>
            {card.recipientName}
          </span>
        </h1>
        <div className="max-w-md mx-auto">
          <p className="text-lg text-slate-500 mb-6">
            There's someone sending you a song, they want you to hear this song that maybe you'll like :)
          </p>
          <div className="w-full">
            <iframe
              src={`https://open.spotify.com/embed/track/${card.song.id}`}
              width="100%"
              height="240"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed"
            ></iframe>
          </div>
          <div className="mt-8 w-full px-4 sm:px-8 lg:px-16">
            <p className="text-lg text-slate-700">Also, here's a message from the sender:</p>
            <p
              className="text-4xl text-slate-500 mt-4"
              style={{ fontFamily: 'ReenieBeanie' }}
            >
              {card.message}
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Sent on {format(new Date(card.date), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-center space-y-4">
          <p className="text-slate-700">Want to send a song to a friend?</p>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-primary/90 h-9 py-2 px-6"
          >
            Send a song
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
