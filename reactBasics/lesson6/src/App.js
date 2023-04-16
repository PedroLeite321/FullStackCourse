import './App.css';
import {useState} from  "react"

function App() {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setClick] = useState([])

  const handleLeft = () =>  {
    setClick(allClick.concat("L"+(left+1)));
    console.log(allClick);
    setLeft(left + 1)
  }
  const handleRight = () => {
    setClick(allClick.concat("R"+(right+1)));
    console.log(allClick);
    setRight(right+1)
  }

  return (
    <div className="App">
      <h1>{allClick.join(" , ")}</h1>
      {left}
      <button onClick={handleLeft}>Left</button>  
      <button onClick={handleRight}>Right</button>
      {right}


    </div>
  );
}

export default App;
