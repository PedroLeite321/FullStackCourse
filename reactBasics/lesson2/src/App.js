const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
    
      {
        name: 'Using props to pass data',
        exercises: 7
      },
    
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
}
  return (
    <div>
       <header>
          <h1>{course.name}</h1>
       </header>
       <section>
          <p>{course.parts[0].name} {course.parts[0].exercises}</p>
          <p>{course.parts[1].name} {course.parts[1].exercises}</p>
          <p>{course.parts[2].name} {course.parts[2].exercises}</p>
       </section>
       <section>
          <p></p>
       </section>
    </div>
  )
}
export default App;