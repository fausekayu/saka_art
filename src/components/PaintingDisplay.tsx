// src/PaintingDisplay.js
import React from 'react';
import './indexx.css'; // Pastikan untuk membuat file CSS

const PaintingDisplay = () => {
    return (
        <div className="painting-display">
        <img
            src="/lukis2.png" // Ganti dengan URL atau path gambar yang sesuai
            alt="Girl with a Pearl Earring"
            className="painting-image"
        />
        <div className="painting-content">
            <h2 className="painting-title">Girl with a Pearl Earring, 1665</h2>
            <p className="painting-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex tellus, imperdiet ac mi sed, condimentum lacinia nisi. Pellentesque id congue libero. Quisque ac tempus erat, non pellentesque quam. Donec eget mi mi at gravida posuere.
            </p>
            <button className="explore-button">Start Explore</button>
        </div>
    </div>
);
};

export default PaintingDisplay;