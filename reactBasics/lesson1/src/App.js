import "./App.css"

const Heads = (arg) =>  {
  return (
    <header className="a">
      <h1>{arg.course}</h1>
    </header>
    
  )
}
const Content = (parts) => {
  return(
    <div>
      <p>{parts.p1} exercises: {parts.ex1}</p>
      <p>{parts.p2} exercises: {parts.ex2}</p>
      <p>{parts.p3} exercises: {parts.ex3}</p>
    </div>
  )
}
const Total = (ex_quantity) => {
  let sum = []
  let totalSum;
  for(let i = 0; i < ex_quantity.total.length; i++){
      sum.push(ex_quantity.total[i]);
  }
  const sumAll = () => {
    return(ex_quantity.total[0] + ex_quantity.total[1] + ex_quantity.total[2])
    
  }
  totalSum = sumAll()
  return(
    <div>
      <p>Sum of {sum[0]}, {sum[1]}, {sum[2]} Total = {totalSum}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Heads course={course} /></h1>
      <section>
          <Content p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3}/>
      </section>
      <section>
          <Total total={[exercises1,exercises2,exercises3]} />
      </section>
    </div>
  )
}

export default App