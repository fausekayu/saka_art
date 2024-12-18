import React from 'react';
import Artcard from './Artcard';

// Data karya seni
const artData = [
  { title: 'The Potato Eaters', year: 1885, image: '/lukis4.png' },
  { title: 'Girl with a Pearl Earring', year: 1665, image: '/lukis2.png' },
  { title: 'The Starry Night', year: 1889, image: '/lukis8.png' },
  { title: 'Mona Lisa', year: 1503, image: '/lukis9.png' },
  { title: 'Portrait of Dr. Gachet', year: 1890, image:  '/lukis10.png' },
  { title: 'The Persistence of Memory', year: 1931, image:  '/lukis11.png' },
  { title: 'Almond Blossom', year: 1890, image: '/lukis12.png' },
  { title: 'Guernica', year: 1937, image: '/lukis13.png' },
  { title: 'The Kiss', year: 1907, image: '/lukis14.png' },
  { title: 'Nascita di Venere', year: 1480, image: '/lukis15.png' },
  { title: 'Netherlandish Proverbs', year: 1559, image:  '/lukis16.png' },
  { title: 'The Night Watch', year: 1642, image:  '/lukis17.png' },
];

const Collection: React.FC = () => {
  return (
    <div className="collection-container">
      {artData.map((art, index) => (
        <Artcard 
          key={index} 
          title={art.title} 
          year={art.year} 
          image={art.image} 
        />
      ))}
    </div>
  );
};

export default Collection;

// Tambahkan ini jika tidak ingin mengubah banyak kode
export {};
