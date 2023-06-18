import React, { useState ,useEffect} from 'react';
import './weather.css';
import Index from './Index';

function Weather() {
  const [searchVal, setSearchVal] = useState('sundrel');
  const [infoData, setInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=846b09b1fe5822e0a83278005cc839bc`);
      const data = await response.json();
      console.log(data)
      const { temp, humidity, pressure } = data.main;
      const city  = data.name;
      const { country, sunset } = data.sys;
      const { main } = data.weather[0];
      const { speed } = data.wind;


      const detailWeatherInfo = {
        temp,
        humidity,
        pressure,
        city,
        main,
        country,
        sunset,
        speed,
      };

      setInfo(detailWeatherInfo);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getWeatherInfo();
    };
    fetchData();
  }, []);

  return (
    <div className="parent">
      {/* search section */}
      <div className="searchBox">
        <input
          type="text"
          name=""
          id="search"
          className="searchInput"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="searchButton" onClick={getWeatherInfo}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <Index infoData={infoData}/>
    </div>
  );
}

export default Weather;
