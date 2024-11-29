// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BoxMessage from '../components/BoxMessage';
import CardSlider from '../components/CardSlider';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BoxMessage />
      <CardSlider />
      <Footer />
    </div>
  );
}

export default Home;
