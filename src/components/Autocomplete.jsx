
import React, { useState } from 'react';

const Autocomplete = ({ suggestions = [] }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    
    // Filter Indian cities that contain the user input (case insensitive)
    const filtered = suggestions.filter(
      city => city.toLowerCase().includes(userInput.toLowerCase())
    );
    
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (city) => {
    setInputValue(city);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type an Indian city..."
      />
      
      {showSuggestions && inputValue && (
        <ul className="suggestions">
          {filteredSuggestions.map((city) => (
            <li 
              key={city} 
              onClick={() => handleSuggestionClick(city)}
            >
              {city}
            </li>
          ))}
          
          {filteredSuggestions.length === 0 && (
            <li className="no-results">No cities found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
