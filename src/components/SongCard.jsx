import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ref, get } from 'firebase/database';
import { database } from '../firebase/firebaseConfig';
import { format } from 'date-fns';

function SongCard() {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const navigate = useNavigate(); // Initialize useNavigate
  const [card, setCard] = useState(null); // State untuk menyimpan card
  const [loading, setLoading] = useState(true); // State untuk loading

  // Mengambil data card berdasarkan ID (UUID)
  useEffect(() => {
    const cardRef = ref(database, `cards/${id}`);
    get(cardRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCard(snapshot.val()); // Menyimpan data card jika ditemukan
        } else {
          setCard(null); // Jika card tidak ditemukan
        }
        setLoading(false); // Menghentikan loading
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Menghentikan loading jika error
      });
  }, [id]);

  // Jika masih loading atau data tidak ditemukan
  if (loading) {
    return <div className="text-center mt-16 text-gray-500">Loading...</div>;
  }

  if (!card) {
    return <div className="text-center mt-16 text-gray-500">Card not found</div>;
  }

  const { recipientName, song, message, date } = card;
  const { id: songId } = song; // Hanya gunakan `id` dari objek song

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto my-8">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-xl mb-4 mt-4">
          Hello,
          <span className="text-3xl ml-2" style={{ fontFamily: 'ReenieBeanie' }}>
            {recipientName}
          </span>
        </h1>
        <div className="max-w-md mx-auto">
          <p className="text-lg text-slate-500 mb-6">
            There's someone sending you a song, they want you to hear this song that maybe you'll like :)
          </p>
          <div className="w-full">
            {/* Embed Spotify track */}
            <iframe
              src={`https://open.spotify.com/embed/track/${songId}`}
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
              {message}
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Sent on {format(new Date(date), 'MMMM dd, yyyy')}
            </p>
            {/* Tombol Send a Song */}
            <div className="mt-6">
              <p className="text-gray-500 mb-4">Want to send a song to a friend?</p>
              <button
                onClick={() => navigate('/submit')} // Gunakan navigate untuk redirect
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
              >
                Send a song
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
