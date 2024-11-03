import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(data.hits);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.objectID}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
