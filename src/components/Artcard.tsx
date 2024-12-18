import React from 'react';

interface ArtCardProps {
  title: string;
  year: number;
  image: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, year, image }) => {
  return (
    <div className="art-card">
      <img src={image} alt={title} />
      <h3>{title}, {year}</h3>
      <p>Start Explore</p>
    </div>
  );
};

export default ArtCard;
