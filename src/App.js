import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(Response => Response.json())
      .then(data => setDogImage(data.json))
      .catch(error => console.error(error));
  }, [])

  return (
    <div>
      <img src={dogImage} alt='Random dog' />
    </div>
  )
}
export default App;