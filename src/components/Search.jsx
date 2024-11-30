import React, { useState } from 'react';

function Search({ cards, setFilteredCards, setHasSearched }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Filter cards berdasarkan nama penerima
    const filtered = cards.filter(({ recipientName }) =>
      recipientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCards(filtered); // Set hasil pencarian ke state di CardBrowse
    setHasSearched(true); // Tandai bahwa pencarian telah dilakukan
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update nilai input
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 mt-24">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter recipient name..."
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          onClick={handleSearch}
          className="flex items-center px-4 py-2 text-white bg-black rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 4a7 7 0 015.7 11.7l4.3 4.3-1.4 1.4-4.3-4.3A7 7 0 1111 4z"
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
