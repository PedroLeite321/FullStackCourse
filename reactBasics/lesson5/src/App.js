//Its just an example. It'd be far more suitable for any application to not apply code as follows.
//This code could've been far more simple if i had used two states rather than one.
import {useState} from "react";
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks,
      left: clicks.left + 1, 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
export default App;

/*
  A better example:

  import {useState} from 'react';
  const App = () => {
    const [setRight, setRightClick] = useState(0);
    const [setLeft, setLeftClick] = useState(0);

    return(
      <div>
        {setRight}
        <button onClick={setRightClick(setRight + 1)}></button>
        <button onClick={setLeftClick(setLeft + 1)}></button>
        {setLeft}

      </div>
    )
  }

*/