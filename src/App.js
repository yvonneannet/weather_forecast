// import React,{useState,useEffect} from "react";
// import axios from 'axios';
// import './App.css'

// const App = ()=> {
//     const [cityName, setCity] = useState('telluride');
//     const [data, setData] = useState();
//     const [inputCityName, setInputCityName] = useState('');
//     const baseUrl = process.env.REACT_APP_BASE_URL;

//     useEffect(() => {
//         fetchData(cityName);
//     },[cityName]);

//     const fetchData = async(cityName) => {
//         try{
//             const response = await axios.get(`${baseUrl}${cityName}&aqi=no`);
//             setData(response.data);
//         }
//         catch(error){
//             console.log('Weather not found', error);
//         }
//     };
    
//     const handleSearch = (e) => {
//         if(e.key==='Enter'){
//             setCity(inputCityName);
//         }
//     };
//     return(
//         <div id="main">
//         <div>
//           <h2 id='name'>Rayn</h2>
//           <div>
//           <input placeholder='Enter city name' value={inputCityName} type='text' id='searchBar' onChange={(e) => setInputCityName(e.target.value)} onKeyDown={handleSearch}/>
//           <button type='click' id='searchButton' value={inputCityName} onChange={(e) => setInputCityName(e.target.value)} onClick={handleSearch}>search</button>
//           </div>
//           </div> 
//            {data && (
//             <div>
//             <div id="header">
//                 <div id="weatherUpdate">
//                 <img src={data.current.condition.icon}/>
//                 <p id="temp">{data.current.temp_c}°</p>
//                 <p id="location">{data.location.name}, {data.location.region}, {data.location.country}</p>
//                 </div>
//                 <div id="details">
//                     <b id="location">{data.location.localtime}</b>
//                     <p id="location">{data.current.condition.text}</p>
//                 </div>
//             </div>
//             <div>
//             <div id="status">
//                 <div>
//                 <div id="humidity">
//                     <img src='/Images/humidity.svg' id="humidityimg"/>
//                     <p>Humidity</p>
//                     <p>{data.current.humidity}</p>
//                 </div>
//                 <div id="sunset">
//                 <img src='/Images/sunset.svg' id="sunsetimg"/>
//                     <p>Sunset</p>
                    
//                 </div>
//                 </div>
//                 <div>
//                 <div id="uvindex">
//                 <img src='/Images/sunlight.svg' id="uvimg"/>
//                     <p>UV Index</p>
                   
//                 </div>
//                 <div id="sunrise">
//                 <img src='/Images/sunrise.svg' id="sunriseimg"/>
//                     <p>Sunrise</p>
                  
//                 </div>
//                 </div>
//                 </div>
                
                

//             </div>
//             </div>
            
            
//            )}
         
//         </div>
//     );
 
  
// };
// export default App;



















// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [cityName, setCity] = useState('Telluride');
//   const [data, setData] = useState();
//   const [inputCityName, setInputCityName] = useState('');
//   const baseUrl = process.env.REACT_APP_BASE_URL;

//   useEffect(() => {
//     fetchData(cityName);
//   }, [cityName]);

//   const fetchData = async (cityName) => {
//     try {
//       const response = await axios.get(`${baseUrl}${cityName}&aqi=no`);
//       setData(response.data);
//     } catch (error) {
//       console.log('Weather not found', error);
//     }
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       setCity(inputCityName);
//     }
//   };

//   return (
//     <div id="main">
//       <div>
//         <h2 id='name'>Rayn</h2>
//         <div>
//           <input
//             placeholder='Enter city name'
//             value={inputCityName}
//             type='text'
//             id='searchBar'
//             onChange={(e) => setInputCityName(e.target.value)}
//             onKeyDown={handleSearch}
//           />
//           <button
//             type='button'
//             id='searchButton'
//             onClick={() => setCity(inputCityName)}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       {data && (
//         <div>
//           <div id="header">
//             <div id="weatherUpdate">
//               <img src={data.current.condition.icon} alt="weather icon" />
//               <p id="temp">{data.current.temp_c}°</p>
//               <p id="location">{data.location.name}, {data.location.region}, {data.location.country}</p>
//             </div>
//             <div id="details">
//               <b>{data.location.localtime}</b>
//               <p>{data.current.condition.text}</p>
//             </div>
//           </div>
//           <div id="status">
//             <div>
//               <div id="humidity">
//                 <img src='/Images/humidity.svg' alt="humidity icon" />
//                 <p>Humidity</p>
//                 <p>{data.current.humidity}%</p>
//               </div>
//               <div id="sunset">
//                 <img src='/Images/sunset.svg' alt="sunset icon" />
//                 <p>Sunset</p>
//                 <p>{data.forecast.forecastday[0].astro.sunset}</p>
//               </div>
//             </div>
//             <div>
//               <div id="uvindex">
//                 <img src='/Images/sunlight.svg' alt="UV index icon" />
//                 <p>UV Index</p>
//                 <p>{data.current.uv}</p>
//               </div>
//               <div id="sunrise">
//                 <img src='/Images/sunrise.svg' alt="sunrise icon" />
//                 <p>Sunrise</p>
//                 <p>{data.forecast.forecastday[0].astro.sunrise}</p>
//               </div>
//             </div>
//           </div>
//           <div id="footer">
//             <p>Monthly Rainfall</p>
//             <p id="rainfallValue">45mm</p>
//             <p>This Year: <span style={{ color: '#45d19e' }}>+17%</span></p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;















// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [cityName, setCity] = useState('Telluride');
//   const [data, setData] = useState();
//   const [inputCityName, setInputCityName] = useState('');
//   const baseUrl = process.env.REACT_APP_BASE_URL;

//   useEffect(() => {
//     fetchData(cityName);
//   }, [cityName]);

//   const fetchData = async (cityName) => {
//     try {
//       const response = await axios.get(`${baseUrl}${cityName}&aqi=no`);
//       setData(response.data);
//     } catch (error) {
//       console.log('Weather not found', error);
//     }
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       setCity(inputCityName);
//     }
//   };

//   return (
//     <div id="main">
//       <h2 id='name'>Rayn</h2>
//       <div id="header">
//         <div id="weatherUpdate">
//           <img src={data?.current?.condition?.icon} alt="weather icon" />
//           <p id="temp">{data?.current?.temp_c}°</p>
//           <p id="location">{data?.location?.name}, {data?.location?.region}, {data?.location?.country}</p>
//         </div>
//         <div className="search-container">
//           <input
//             placeholder='Enter city name'
//             value={inputCityName}
//             type='text'
//             id='searchBar'
//             onChange={(e) => setInputCityName(e.target.value)}
//             onKeyDown={handleSearch}
//           />
//           <button
//             type='button'
//             id='searchButton'
//             onClick={() => setCity(inputCityName)}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       {data && (
//         <>
//           <div id="status">
//             <div>
//               <img src='/Images/humidity.svg' alt="humidity icon" />
//               <p>Humidity</p>
//               <p>{data.current.humidity}%</p>
//             </div>
//             <div>
//               <img src='/Images/sunset.svg' alt="sunset icon" />
//               <p>Sunset</p>
//               <p>{data.forecast.forecastday[0].astro.sunset}</p>
//             </div>
//             <div>
//               <img src='/Images/sunlight.svg' alt="UV index icon" />
//               <p>UV Index</p>
//               <p>{data.current.uv}</p>
//             </div>
//             <div>
//               <img src='/Images/sunrise.svg' alt="sunrise icon" />
//               <p>Sunrise</p>
//               <p>{data.forecast.forecastday[0].astro.sunrise}</p>
//             </div>
//           </div>
//           <div id="footer">
//             <p>Monthly Rainfall</p>
//             <p id="rainfallValue">45mm</p>
//             <p>This Year: <span style={{ color: '#45d19e' }}>+17%</span></p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;












import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

const App = () => {
  const [cityName, setCity] = useState('Telluride');
  const [data, setData] = useState();
  const [inputCityName, setInputCityName] = useState('');
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchData(cityName);
  }, [cityName]);

  const fetchData = async (cityName) => {
    try {
      const response = await axios.get(`${baseUrl}${cityName}&aqi=no`);
      setData(response.data);
    } catch (error) {
      console.log('Weather not found', error);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setCity(inputCityName);
    }
  };

  return (
    <div id="main">
      {/* Container for Rayn Text and Search Field */}
      <div className="header-container">
        <h2 id='name'>Rayn</h2>
        <div className="search-container">
          <input
            placeholder='Enter city name'
            value={inputCityName}
            type='text'
            id='searchBar'
            onChange={(e) => setInputCityName(e.target.value)}
            onKeyDown={handleSearch}
          />
          <button
            type='button'
            id='searchButton'
            onClick={() => setCity(inputCityName)}
          >
            Search
          </button>
        </div>
      </div>
      
      {/* Weather Info Section */}
      <div id="header">
        <div id="weatherUpdate">
          <img src={data?.current?.condition?.icon} alt="weather icon" />
          <p id="temp">{data?.current?.temp_c}°</p>
          <p id="location">{data?.location?.name}, {data?.location?.region}, {data?.location?.country}</p>
        </div>
      </div>
      
      {/* Weather Status Section */}
      {data && (
        <>
          <div id="status">
            <div>
              <img src='/Images/humidity.svg' alt="humidity icon" />
              <p>Humidity</p>
              <p>{data.current.humidity}%</p>
            </div>
            <div>
              <img src='/Images/sunset.svg' alt="sunset icon" />
              <p>Sunset</p>
              <p>{data.forecast.forecastday[0].astro.sunset}</p>
            </div>
            <div>
              <img src='/Images/sunlight.svg' alt="UV index icon" />
              <p>UV Index</p>
              <p>{data.current.uv}</p>
            </div>
            <div>
              <img src='/Images/sunrise.svg' alt="sunrise icon" />
              <p>Sunrise</p>
              <p>{data.forecast.forecastday[0].astro.sunrise}</p>
            </div>
          </div>
          
          {/* Footer Section */}
          <div id="footer">
            <p>Monthly Rainfall</p>
            <p id="rainfallValue">45mm</p>
            <p>This Year: <span style={{ color: '#45d19e' }}>+17%</span></p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
