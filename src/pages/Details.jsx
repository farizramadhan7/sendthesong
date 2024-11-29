import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SongCard from '../components/SongCard';

function Details() {
  const { id } = useParams(); // Ambil UUID dari URL

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex-grow">
        <SongCard id={id} /> {/* Kirim id ke SongCard */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Details;
