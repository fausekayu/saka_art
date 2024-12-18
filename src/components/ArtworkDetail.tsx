import React from 'react';
import { useParams } from 'react-router-dom';

const artworks = [
  { id: 1, title: 'The Potato Eaters, 1885', artist: 'Vincent van Gogh', image: '/lukis4.png', description: 'A masterpiece by Vincent van Gogh.' },
  { id: 2, title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', image: '/lukis2.png', description: 'A timeless piece of art by Vermeer.' },
  { id: 3, title: 'Starry Night, 1889', artist: 'Vincent van Gogh', image: '/lukis3.png', description: 'One of the most famous works by van Gogh.' },
  { id: 4, title: 'Martina Bulkova', artist: '404', image: '/lukis5.png', description: 'An abstract piece by an unknown artist.' },
  { id: 5, title: '404', artist: '404', image: '/lukis6.png', description: 'An intriguing piece with no details available.' },
  { id: 6, title: 'Dan Cristian Pădureț', artist: '404', image: '/lukis7.png', description: 'A modern artwork by an anonymous artist.' },
];

const ArtworkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find((art) => art.id === parseInt(id!));

  if (!artwork) {
    return <h2>Artwork not found!</h2>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{artwork.title}</h1>
      <img src={"/lukis1.png"} alt={artwork.title} style={{ width: '50%', borderRadius: '8px' }} />
      <h3>{artwork.artist}</h3>
      <p>{artwork.description}</p>
    </div>
  );
};

export default ArtworkDetail;
export {}; // Tambahkan ini untuk memastikan TypeScript mengenali file ini sebagai modul.
