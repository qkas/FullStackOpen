import personsService from '../services/persons'
import Person from './Person'

const Persons = ({ persons, setPersons, newFilter, setMessageForSeconds }) => {
  const results = persons.filter(person => person.name.includes(newFilter))

  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    
    if (window.confirm(`delete '${person.name}' ?`)) {
      personsService.destroy(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setMessageForSeconds(`the person '${person.name}' was successfully removed`, 'success', 5)
        })
        .catch(error => {
          setMessageForSeconds(`the person '${person.name}' was already deleted from server`, 'fail', 5)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      {results.map(person =>
        <Person key={person.id} person={person} onDelete={handleDelete} />
      )}
    </div>
  )
}

export default Persons
