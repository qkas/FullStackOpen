import Country from "./Country"

const Countries = ({ countries, newFilter, setNewFilter, weather, setWeather }) => {
  const results = countries.filter(
    country => country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      {results.length === 1 ? (
        <Country 
          key={results[0].name.common}
          country={results[0]} 
          weather={weather}
          setWeather={setWeather}
        />
      ) : results.length <= 10 ? (
        results.map(country => (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => setNewFilter(country.name.common)}>show</button>
          </div>
        ))
      ) : results.length === 0 ? (
        <div>No results found for {newFilter}</div>
      ) : (
        <div>Too many matches, specify another filter</div>
      )}
    </div>
  )
}

export default Countries