import React, { createContext, useState, useContext, useEffect } from 'react';

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  // Load cards from localStorage when the app starts
  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  // Save cards to localStorage whenever cards change
  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  }, [cards]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
