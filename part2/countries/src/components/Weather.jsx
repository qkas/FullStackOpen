import axios from 'axios'
import { useEffect } from 'react'

const Weather = ({ weather, setWeather, country }) => {
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
  
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
  
    const params = `lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
  
    useEffect(() => {
      axios
        .get('https://api.openweathermap.org/data/2.5/weather?' + params)
        .then(response => { setWeather(response.data) })
        .catch(error => console.log('weather api connection refused, check that the key is set'))
    }, [country])

    return (
      <div>
        {weather ? (
          <div>
            <h2>Weather in {weather.name}</h2>
            <div>temperature {weather.main.temp} Celcius</div>
            <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather.description}
            />
            <div>wind {weather.wind.speed} m/s</div>
          </div>
        ) : (
          <div>Weather data loading...</div>
        )}
      </div>
    )
}

export default Weather