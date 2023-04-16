import {useState} from "react";

const History = (prop) => {
  const {arr} = prop
  if(arr.length === undefined ){
    return(
      <div>
        <p>There's an error.</p>
      </div>
    )
  }else{
    return(
      <div>
      <p>Button press history: {arr.join(" , ")}</p>
      </div>
    )
  }
}

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [arr, setArr] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeft = () => 
  {
    setArr(arr.concat('L'));
    const updateLeft = (left + 1); //Creating this variable is a need. The states are loaded asynchronously.
    setLeft(updateLeft);
    setTotal(updateLeft + right);  
  }

  const handleRight = () => 
  {
    setArr(arr.concat('R'))
    const updateRight = (right + 1)
    setRight(updateRight)
    setTotal(updateRight + left)  
  }
  return (
    <div className="App">
      {left}
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      {right}
      <p>{total}</p>
      <History arr={arr}/>
      

    </div>
  );
}

export default App;
