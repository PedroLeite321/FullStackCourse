import logo from './logo.svg';
import './App.css';
import {useState} from "react"

const CounterDisp = props =>  {
  return(
    <div>
      <h1>{props.counter}</h1>
    </div>
  )
}
function App() {
  const [counter, setCounter] = useState(0);
  console.log("counter is now:  " +counter)
  const increaseByOne = () => {
    console.log("increase 1 "+ counter)
    setCounter(counter + 1);
  }
  const wipeItAll = () => {
    console.log("to zero " + counter)
    setCounter(counter - counter);
  }
  const decreaseByOne = ()  =>  {
    console.log("decrease 1 " + counter)
    setCounter(counter - 1);
  }
  return (
    <div>
      <CounterDisp counter={counter} />

      <button onClick={increaseByOne}>Increase</button>
      <button onClick={wipeItAll}>Wipe</button>
      <button onClick={decreaseByOne} text="goiaba">Decrease</button>
    </div>
  );
}

export default App;
