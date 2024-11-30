import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Footer from '../components/Footer';

function Submit() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Konten Form, menggunakan flex-grow untuk memperluas konten */}
      <div className="flex-grow">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Submit;
