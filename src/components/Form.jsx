import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCardContext } from '../context/CardContext'; // Pastikan import context dengan benar
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const [songQuery, setSongQuery] = useState('');
  const [songResults, setSongResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State untuk notifikasi
  const { setCards } = useCardContext(); // Mengakses setCards dari context

  const fetchAccessToken = async () => {
    try {
      const clientId = '257d706bf30545b59fd06913413dba3e';
      const clientSecret = '032cf020561842e2b57e28e0333565ef';
      const authString = btoa(`${clientId}:${clientSecret}`);

      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            'Authorization': `Basic ${authString}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error('Error fetching access token', error);
    }
  };

  const searchSongs = async (query) => {
    if (!accessToken) return;
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: 'track',
          limit: 5,
        },
      });
      setSongResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error searching songs', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: uuidv4(),
      recipientName,
      message,
      song: selectedSong,
      date: new Date(),
      isVisible: false, // Tambahkan properti ini untuk membedakan apakah kartu sudah terlihat
    };

    // Simpan data ke context dan localStorage
    setCards((prevCards) => {
      const updatedCards = [...prevCards, newCard];
      localStorage.setItem('cards', JSON.stringify(updatedCards)); // Simpan ke localStorage
      return updatedCards;
    });

    // Reset form setelah submit
    setRecipientName('');
    setMessage('');
    setSongQuery('');
    setSelectedSong(null);

    // Tampilkan notifikasi
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div className="space-y-8 w-full max-w-3xl mx-auto px-4 sm:px-0 mt-20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Recipient Name</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Enter recipient's name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">Song</label>
          <input
            type="text"
            value={songQuery}
            onChange={(e) => {
              setSongQuery(e.target.value);
              searchSongs(e.target.value);
            }}
            placeholder="Search for a song..."
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {songResults.length > 0 && (
            <ul className="bg-white border border-gray-300 rounded-md mt-2">
              {songResults.map((song) => (
                <li
                  key={song.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-3"
                  onClick={() => {
                    setSongQuery(song.name);
                    setSelectedSong(song);
                    setSongResults([]); // Clear search results when a song is selected
                  }}
                >
                  <img
                    src={song.album.images[2]?.url}
                    alt="Album cover"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <p className="text-gray-900">{song.name}</p>
                    <p className="text-gray-600 text-sm">{song.artists[0].name}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedSong && (
          <div className="mt-4 p-4 bg-gray-100 border rounded-md flex items-center space-x-4">
            <img
              src={selectedSong.album.images[1]?.url}
              alt="Selected song cover"
              className="w-20 h-20 rounded"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900">{selectedSong.name}</p>
              <p className="text-gray-600">{selectedSong.artists[0].name}</p>
              <p className="text-gray-500 text-sm">Album: {selectedSong.album.name}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded-md text-center">
          Message Sent!
        </div>
      )}
    </div>
  );
}

export default Form;
