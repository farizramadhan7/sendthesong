import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function BoxMessage() {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  // Fungsi untuk navigasi ke halaman yang diinginkan
  const handleCreateMessage = () => {
    navigate('/submit'); // Arahkan ke halaman Submit
  };

  const handleStartBrowsing = () => {
    navigate('/browse'); // Arahkan ke halaman Browse
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[-10rem] mb-24 relative z-10 px-4"> {/* Menambahkan padding horizontal */}
      {/* Box 1 */}
      <div className="border rounded-lg p-6 hover:border-gray-400 transition-colors">
        <h3 className="text-2xl mb-4" style={{ fontFamily: 'ReenieBeanie' }}>
          Share Your Message
        </h3>
        <p className="text-gray-600 mb-6 text-justify">
          Choose a song and write a heartfelt message to someone special.
        </p>
        <button
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 w-full max-w-xs"
          onClick={handleCreateMessage} // Navigasi ke halaman Submit
        >
          Create Message →
        </button>
      </div>

      {/* Box 2 */}
      <div className="border rounded-lg p-6 hover:border-gray-400 transition-colors">
        <h3 className="text-xl mb-2" style={{ fontFamily: 'ReenieBeanie' }}>
          Browse Messages
        </h3>
        <p className="text-gray-600 mb-4 text-justify">
          Find messages that were written for you. Search by your name to discover heartfelt dedications.
        </p>
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 w-full max-w-xs"
          onClick={handleStartBrowsing} // Navigasi ke halaman Browse
        >
          Start Browsing →
        </button>
      </div>

      {/* Box 3 */}
      <div className="border rounded-lg p-6 hover:border-gray-400 transition-colors flex flex-col items-center justify-center text-center">
        <h3 className="text-xl mb-2" style={{ fontFamily: 'ReenieBeanie' }}>
          Detail Messages
        </h3>
        <p className="text-gray-600 mb-12">
          You can click on any message card to read the full story and listen to the chosen song!
        </p>
      </div>
    </div>
  );
}

export default BoxMessage;
