import {useState} from "react";

const NewFunc = (props) => {
  const {handleClick, text} = props;
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)
  //DO NOT DO THE FOLLOWING: 
  const Display = prop =>  {
    const {value} = prop;
    return(<div>{value}</div>)
  }
  //IT'LL GENERATE A NEW COMPONENT WITHIN A COMPONENT LEADING TO BUGS!!
  return (
    <div>
      <Display value={value}></Display>
      <NewFunc handleClick={() => setValue(1000)} text="thousand"></NewFunc>    
      <NewFunc handleClick={() => setValue(0)} text="reset"></NewFunc>    
      <NewFunc handleClick={() => setValue(value + 1)} text="increment"></NewFunc>   
    </div>
  )
}

export default App;
