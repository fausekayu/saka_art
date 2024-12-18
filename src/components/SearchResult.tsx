// components/SearchResults.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query'); // Extract the query parameter

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* You can implement your search results rendering logic here */}
    </div>
  );
};

export default SearchResults;
