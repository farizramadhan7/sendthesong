import React, { createContext, useState, useContext, useEffect } from 'react';

// Membuat Context untuk menyimpan data kartu
const CardContext = createContext();

// CardProvider akan mengelola state kartu dan menyimpannya di localStorage
export const CardProvider = ({ children }) => {
  // State untuk menyimpan kartu yang ada
  const [cards, setCards] = useState(() => {
    // Coba ambil data kartu dari localStorage jika ada
    const storedCards = localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  });

  // Fungsi untuk menyimpan kartu ke localStorage saat state cards berubah
  useEffect(() => {
    // Menyimpan state cards ke localStorage setiap kali terjadi perubahan
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  // Fungsi untuk menyegarkan data kartu, jika ada perubahan di localStorage
  const refreshCards = () => {
    const storedCards = localStorage.getItem('cards');
    setCards(storedCards ? JSON.parse(storedCards) : []);
  };

  return (
    <CardContext.Provider value={{ cards, setCards, refreshCards }}>
      {children}
    </CardContext.Provider>
  );
};

// Hook untuk menggunakan context ini di komponen lain
export const useCardContext = () => useContext(CardContext);
