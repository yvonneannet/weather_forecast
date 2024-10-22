import React,{useState,useEffect} from "react";
import axios from 'axios';
import './App.css'

const App = ()=> {
    const [cityName, setCity] = useState('telluride');
    const [data, setData] = useState();
    const [inputCityName, setInputCityName] = useState('');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        fetchData(cityName);
    },[cityName]);

    const fetchData = async(cityName) => {
        try{
            const response = await axios.get(`${baseUrl}${cityName}&aqi=no`);
            setData(response.data);
        }
        catch(error){
            console.log('Weather not found', error);
        }
    };
    
    const handleSearch = (e) => {
        if(e.key==='Enter'){
            setCity(inputCityName);
        }
    };
    return(
        <div id="main">
        <div>
          <h2 id='name'>Rayn</h2>
          <div>
          <input placeholder='Enter city name' value={inputCityName} type='text' id='searchBar' onChange={(e) => setInputCityName(e.target.value)} onKeyDown={handleSearch}/>
          <button type='click' id='searchButton' value={inputCityName} onChange={(e) => setInputCityName(e.target.value)} onClick={handleSearch}>search</button>
          </div>
          </div> 
           {data && (
            <div>
            <div id="header">
                <div id="weatherUpdate">
                <img src={data.current.condition.icon}/>
                <p id="temp">{data.current.temp_c}°</p>
                <p id="location">{data.location.name}, {data.location.region}, {data.location.country}</p>
                </div>
                <div id="details">
                    <b id="location">{data.location.localtime}</b>
                    <p id="location">{data.current.condition.text}</p>
                </div>
            </div>
            <div>
            <div id="status">
                <div>
                <div id="humidity">
                    <img src='/images/humidity.png' id="humidityimg"/>
                    <p>Humidity</p>
                    <p>{data.current.humidity}</p>
                </div>
                <div id="sunset">
                <img src='/images/sunset.png' id="sunsetimg"/>
                    <p>Sunset</p>
                    
                </div>
                </div>
                <div>
                <div id="uvindex">
                <img src='/images/uvindex.jpg' id="uvimg"/>
                    <p>UV Index</p>
                   
                </div>
                <div id="sunrise">
                <img src='/images/sunrise.webp' id="sunriseimg"/>
                    <p>Sunrise</p>
                  
                </div>
                </div>
                </div>
                
                

            </div>
            </div>
            
            
           )}
         
        </div>
    );
 
  
};
export default App;