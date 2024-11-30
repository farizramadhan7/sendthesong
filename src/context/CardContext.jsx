import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  // Fetch cards from the backend when the app starts
  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cards');
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  // Fetch cards on initial load
  useEffect(() => {
    fetchCards();
  }, []);

  // Function to add a new card
  const addCard = async (newCard) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cards', newCard);
      setCards((prevCards) => [...prevCards, response.data]);
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to access CardContext values
export const useCardContext = () => useContext(CardContext);
