import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const Toggle = ({title, child, isItActive, activate}) =>  {
  console.log(activate)
  return(
    <section>
        <h1>{title}</h1>
        {
          isItActive === true ? (<p>{child}</p>) : ( <button onClick={() => {activate(true)}}>show</button> ) 
        }
    </section>
  )

}

function App() {
  const [isActive, activation] = useState(false);

  return (
    <div className="App">
      <section>
        <Toggle activate={() => {activation(0)} } title="Dinossaur Stuff" child="Dinossaurs were real! Can you belive that?!" isItActive={isActive === 0}/>
      </section>
      <section>
        <Toggle activate={() => {activation(1)}}  title="Fish Curiosities" child="Dang! I hate those. But you should eat'em." isItActive={isActive === 1}/>
      </section>
      <Toggle activate={() => {activation(2)}}  title="Fish Curiosities" child="Dang! I hate those. But you should eat'em." isItActive={isActive === 2}/>
    </div>
  );
}

export default App;
