import { useState, useEffect } from 'react'
import Countries from './components/Countries.jsx'
import Filter from './components/Filter.jsx'
import axios from 'axios'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all/')
      .then(response => { setCountries(response.data) })
      .catch(error => console.log('connection to restcountries api refused'))
  }, [])

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <Countries
        countries={countries}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  )
}

export default App