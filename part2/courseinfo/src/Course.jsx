const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} /> 
    ))}
  </div>
)

const Course = ({ courses }) => (
  <div>
    {courses.map(course => (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
      </div>
    ))}
  </div>
)

export default Course