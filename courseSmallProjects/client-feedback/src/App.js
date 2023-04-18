import './App.css';
import {useState} from "react";

const Statistics = ({feedback, setFeedback, text,}) =>  {

  return(
    <section>
      <button onClick={() => setFeedback(feedback + 1)}>{text}</button>
    </section>
  )

}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const checkBad = bad;
  const checkGood = good;
  const checkNeutral = neutral;


  if(checkGood === 0 && checkBad === 0 && checkNeutral === 0){

    return(
      <div className="App">
      <header>
        <h1>Give your feedback</h1>
        <Statistics feedback={good} setFeedback={setGood} text={'Good'}></Statistics>
        <Statistics feedback={neutral} setFeedback={setNeutral} text={'Neutral'}></Statistics>
        <Statistics feedback={bad} setFeedback={setBad} text={'Bad'}></Statistics>
      </header>
      <section>
        <h2>Feedbacks area</h2>
        <p>No feedback given</p>
      </section>
    </div>
    )

  }
  else {
  return (
      <div className="App">
        <header>
          <h1>Give your feedback</h1>
          <Statistics feedback={good} setFeedback={setGood} text={'Good'}></Statistics>
          <Statistics feedback={neutral} setFeedback={setNeutral} text={'Neutral'}></Statistics>
          <Statistics feedback={bad} setFeedback={setBad} text={'Bad'}></Statistics>
        </header>
        <section>
          <h2>Feedbacks area</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </section>
      </div>
    );

  }
}

export default App;
