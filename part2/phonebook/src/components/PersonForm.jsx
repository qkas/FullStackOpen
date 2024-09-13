import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setMessageForSeconds }) => {
  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handleNumberChange = (event) => { setNewNumber(event.target.value) }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const foundPerson = persons.find(person => person.name === newName)
    if (foundPerson) {
      if (window.confirm(`name '${newName}' is already added to phonebook, ` +
        'replace the old number with the new one?')) {
        personsService
          .update(foundPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== foundPerson.id ? person : returnedPerson
            ))
            setMessageForSeconds(`the number for '${newName}' successfully replaced`, 'success', 5)
          })
          .catch(error => {
            setMessageForSeconds(`the person '${newName}' doesn't exist, whoops.`, 'fail', 5)
            setPersons(persons.filter(person => person.id !== foundPerson.id))
          })
      }
    } else if (persons.find(person => person.number === newNumber)) {
      setMessageForSeconds(`number '${newNumber}' is already added to phonebook`, 'fail', 5)
    } else {
      personsService
        .create(newPerson)
        .then(response => {
          setMessageForSeconds(`the person '${newName}' was successfully added`, 'success', 5)
          setPersons(persons.concat(response))
        })
        .catch(error => {
          setMessageForSeconds(`failed to add '${newName}' to the phonebook`, 'fail', 5)
        })
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handleNameChange} /></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm