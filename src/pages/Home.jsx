import React, { useState, useEffect } from 'react';

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/anime');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAnimeData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page!</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h3>Anime Data:</h3>
          <ul>
            {animeData.map(anime => (
              <li key={anime.id}>
                <img src={anime.image} alt={anime.name} />
                <h4>{anime.name}</h4>
                <p>{anime.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;