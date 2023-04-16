import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App()  {
  const [counter, setCounter] = useState(1);
  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>increase</button>
    </div>
  )
}

export default App;
