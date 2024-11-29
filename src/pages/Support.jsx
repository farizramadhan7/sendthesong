import React from 'react';
import Navbar from '../components/Navbar';
import TextSupport from '../components/TextSupport';
import ButtonSupport from '../components/ButtonSupport';
import Footer from '../components/Footer';

function Support() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian Navbar */}
      <Navbar />

      {/* Bagian Konten Utama */}
      <div className="flex-grow">
        <TextSupport />
        <ButtonSupport />
      </div>

      {/* Footer di bagian paling bawah */}
      <Footer />
    </div>
  );
}

export default Support;
