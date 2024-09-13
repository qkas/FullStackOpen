import Weather from './Weather'

const Country = ({ country, weather, setWeather }) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div> 
        <div>area {country.area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <Weather weather={weather} setWeather={setWeather} country={country} />
      </div>
    )
}

export default Country