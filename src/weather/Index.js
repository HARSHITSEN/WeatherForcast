import React, { useEffect, useState } from 'react'
function Index({ infoData }) {
  const [weatherMood, setWeatherMood] = useState()
  const { temp, humidity, pressure, city, main, country, sunset, speed } = infoData
  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg")
          break;
        case "Haze":
          setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-haze.svg")
          break;
        case "Rainy":
          setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg")
          break;
        case "Sunny":
          setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-sunny.svg")
          break;
        case "Clear":
          setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg")
          break;
          case "Mist":
            setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/Mist.svg")
            break;
        default:
          setWeatherMood("https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/Sunny.svg")
          break;
      }
    }
  }, [main])
  let sec = sunset
  let date = new Date(sec * 1000);
  const timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="main-box">
        <div className="cloud"><img src={`${weatherMood}`} alt="" /></div>

        <div className="tamparture">
          <div className="maininfo">
            <span className="temp">{temp}<i className='wi wi-celsius'></i> </span>
            <span className="mood">
              <p className="weathermood">{main}</p>
              <p className="location">{city},{country}</p>
            </span>
          </div>
          <div className="datetime">
            <span className="date">{new Date().toLocaleDateString()}</span><br />
            <span className="time">{new Date().toLocaleTimeString()} </span>
          </div>
        </div>
        <div className="footer">
          <div className="additionalinfo">
            <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg" alt="" />
            <p className="aboutinfo">{timeStr}PM<br /> sunset</p>
          </div>
          <div className="additionalinfo">
            <i className='wi wi-humidity'></i>
            <p className="aboutinfo">{humidity}<br />Humidity</p>
          </div>
          <div className="additionalinfo">
            <i className='wi wi-barometer'></i>
            <p className="aboutinfo">Pressure <br />{pressure}</p>
          </div>
          <div className="additionalinfo">
            <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg" alt="" />
            <p className="aboutinfo">Wind<br /> {speed}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
