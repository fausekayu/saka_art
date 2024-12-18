import React from 'react';
import "./indexx.css"; // Import file CSS


const Collections = () => {
  return (
    <div className="filter-container">
      <h2>Collections</h2>
      <div className="filter">
        <select>
          <option>Type</option>
          <option>Painting</option>
          <option>Sculpture</option>
        </select>
        <select>
          <option>Year (1885-1889)</option>
          <option>1600-1700</option>
          <option>1800-1900</option>
          <option>1900-2000</option>
        </select>
      </div>
    </div>
  );
};

export default Collections;
