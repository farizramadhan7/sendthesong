import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SongCard from '../components/SongCard';

function Details() {
  const { id } = useParams(); // Ambil UUID dari URL

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Konten utama */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {id ? (
          // Langsung kirim ID ke SongCard melalui props
          <SongCard />
        ) : (
          <div className="text-center text-gray-600">
            <p>ID is missing or invalid. Please check the URL.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Details;
