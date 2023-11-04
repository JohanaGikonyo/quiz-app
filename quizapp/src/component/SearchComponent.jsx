import React, { useState } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Sample data to search through (you can replace this with your own data)
  const contentData = [
    'We create new Websites', '', '', '', 'Every day is a day of new opportunity', '',
    'Lemon', 'Orange', 'Pineapple', 'words', 'Watermelon'
  ];

  const handleSearch = () => {
    // Perform the client-side search based on the searchTerm
    const filteredResults = contentData.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <div>
          
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
