import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // Fetch cards from the backend when the app starts
  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cards');
      setCards(response.data);
      setFilteredCards(response.data); // Set all cards as the initial filtered cards
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <CardContext.Provider value={{ cards, filteredCards, setFilteredCards }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to access CardContext values
export const useCardContext = () => useContext(CardContext);
