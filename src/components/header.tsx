import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./indexx.css"; 

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for the input
  const navigate = useNavigate(); // Navigate to search results page

  // Function to handle search submit
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Navigate to search page
    }
  };

  return (
    <header>
      {/* Top Section: Logo and Search */}
      <div className="top-bar">
        <div className="logo">
          <h1>Artcyclopedia</h1>
        </div>
        <div className="actions">
          {/* Search Bar */}
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search art" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit">Search</button>
          </form>
        </div>
        {/* Profile Icon (Optional) */}
        <div className="profile">
          {/* You can add profile-related content here */}
        </div>
      </div>

      {/* Bottom Section: Navigation */}
      <nav className="nav-links">
        <a href="/landing">Home</a> {/* Correct path for Home */}
        <a href="/koleksi">Collections</a>
        <a href="/about">About Us</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
