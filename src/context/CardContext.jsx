// src/context/CardContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Membuat Context
const CardContext = createContext();

// Provider untuk membungkus aplikasi
export const CardProvider = ({ children }) => {
  // State untuk kartu, dengan inisialisasi dari localStorage
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('cards');
    try {
      return storedCards ? JSON.parse(storedCards) : [];
    } catch (error) {
      console.error("Error parsing localStorage cards:", error);
      return [];
    }
  });

  // Sinkronisasi kartu ke localStorage setiap kali `cards` berubah
  useEffect(() => {
    try {
      localStorage.setItem('cards', JSON.stringify(cards));
    } catch (error) {
      console.error("Error saving cards to localStorage:", error);
    }
  }, [cards]);

  // Fungsi untuk menyegarkan data dari localStorage (jika diperlukan)
  const refreshCards = () => {
    const storedCards = localStorage.getItem('cards');
    try {
      setCards(storedCards ? JSON.parse(storedCards) : []);
    } catch (error) {
      console.error("Error refreshing cards from localStorage:", error);
      setCards([]);
    }
  };

  return (
    <CardContext.Provider value={{ cards, setCards, refreshCards }}>
      {children}
    </CardContext.Provider>
  );
};

// Hook untuk menggunakan CardContext
export const useCardContext = () => useContext(CardContext);
