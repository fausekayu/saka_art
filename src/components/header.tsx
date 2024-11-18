import React from 'react';
import './indexx.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Artcyclopedia</h1>
        <nav>
          <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search art" />
          <button>🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
