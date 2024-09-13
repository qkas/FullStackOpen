import { useState, useEffect } from 'react'

import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const setMessageForSeconds = (message, type, seconds) => {
    setMessage({message: message, type: type})
    setTimeout(() => { setMessage(null) }, seconds * 1000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />

      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h3>Add new number</h3>
      <PersonForm
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
        persons={persons} setPersons={setPersons}
        setMessageForSeconds={setMessageForSeconds}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons} setPersons={setPersons}
        newFilter={newFilter} setMessageForSeconds={setMessageForSeconds}
      />
    </div>
  )
}

export default App