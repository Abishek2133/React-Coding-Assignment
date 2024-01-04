import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      setIsLoading(true);

      fetch(`https://api.example.com/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results); // Assuming the API response contains an array of results
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {isLoading && <p>Loading...</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
          // Display relevant information from API response
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
