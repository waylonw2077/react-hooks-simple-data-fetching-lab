// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      {!dogImage && <p>Loading...</p>}
      {dogImage && <img src={dogImage} alt="A Random Dog" />}
    </div>
  );
}

export default App;
