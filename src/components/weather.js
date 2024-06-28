// import React, { useState, useEffect } from 'react';

// const Weather = ({ apiKey, city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const API_URL = `https://api.weatherapi.com<span class="math-inline">\{city\}&appid\=</span>{apiKey}`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error(`Error fetching weather data: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     if (city) {
//       fetchData();
//     }
//   }, [city, apiKey]);

//   if (error) {
//     return <div>Error fetching weather data</div>;
//   }

//   if (!weatherData) {
//     return <div>Loading...</div>;
//   }

//   // Extract and display weather data here
//   const { main, weather, name } = weatherData;
//   const temp = Math.round(main.temp - 273.15); // Convert Kelvin to Celsius

//   return (
//     <div className="weather-container">
//       <h2>Weather in {name}</h2>
//       <p className="temperature">{temp}°C</p>
//       <p className="description">{weather[0].description}</p>
//     </div>
//   );
// };

// export default Weather;