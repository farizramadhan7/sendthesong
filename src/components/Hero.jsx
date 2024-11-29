import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundImage from '../assets/img/himatelMonochrome.png';

function Hero() {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  // Fungsi untuk navigasi ke halaman yang diinginkan
  const handleTellYourStory = () => {
    navigate('/submit'); // Arahkan ke halaman Submit
  };

  const handleSupportSendTheSong = () => {
    navigate('/support'); // Arahkan ke halaman Support
  };

  return (
    <div
      className="relative py-10 md:py-24 max-w-[90%] md:max-w-2xl mx-auto text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center 80px', // Mengatur gambar lebih ke bawah dalam piksel
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
      }}
    >
      <div className="py-12 md:py-24 max-w-[90%] md:max-w-2xl mx-auto text-center">
        <main className="text-center">
          <h2
            className="text-3xl md:text-5xl mb-2 md:mb-3 text-gray-700"
            style={{ fontFamily: 'ReenieBeanie' }}
          >
            a bunch of the untold words, sent through the song
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Express your untold message through the song.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-center">
            <button
              className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800"
              onClick={handleTellYourStory} // Navigasi ke halaman Submit
            >
              Tell Your Story →
            </button>
            <button
              className="px-8 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={handleSupportSendTheSong} // Navigasi ke halaman Support
            >
              Support TelcomSendTheSong
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
