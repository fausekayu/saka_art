import { Link } from 'react-router-dom';
import './indexx.css';

const Gallery: React.FC = () => {
  const artworks = [
    { title: 'The Potato Eaters, 1885', artist: 'Start Explore', image: '/lukis4.png', link: 'penjelasan' },
    { title: 'Girl with a Pearl Earring', artist: 'Start Explore', image: '/lukis2.png', link: '/explore/pearl-earring' },
    { title: 'The Starry Night, 1889', artist: 'Start Explore', image: '/lukis8.png', link: '/explore/starry-night' },
    { title: 'Mona Lisa, 1503', artist: 'Start Explore', image: '/lukis9.png', link: '/explore/mona-lisa' },
    { title: 'Potrait of Dr. Gachet, 1890', artist: 'Start Explore', image: '/lukis10.png', link: '/explore/dr-gachet' },
    { title: 'The Persistence of Memory, 1931', artist: 'Start Explore', image: '/lukis11.png', link: '/explore/persistence-memory' },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h3>Discover Art You Love From the World’s Leading Online Gallery</h3>
        <div className="artworks">
          {artworks.map((artwork, index) => (
            <div key={index} className="artwork">
              <img src={artwork.image} alt={artwork.title} />
              <h4>{artwork.title}</h4>
              <button
                className="explore-button"
                onClick={() => window.location.href = artwork.link}
              >
                {artwork.artist}
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Gallery;
