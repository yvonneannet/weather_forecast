



import React, { useState } from 'react';
import Weather from './components/Weather'; 
import './index.css'; 

function App() {
  const [city, setCity] = useState('');
  const yourApiKey = '2e6db995af5542edab4152157242706'; 

  const handleSearch = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-forecast">
      <h1>Weather Forecast</h1>
      <div className="search-bar">
        <input type="text" value={city} onChange={handleSearch} placeholder="Enter City Name" />
        <button type="button" onClick={() => {}}>Search</button>
      </div>
      <Weather apiKey={'2e6db995af5542edab4152157242706'} city={city} />
    </div>
  );
}

export default App;
