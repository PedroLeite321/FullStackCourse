import {useState} from "react";

const App  = () => {
  const [todos, setTodos] = useState(['Goiabinha','Xaveiro'])
  return(
    <div>
      <TodoCount todos={todos}/>
      <TodoList todos={todos}/>
      <TodoListAdd setTodos={setTodos}/>
    </div>
  )
}


const TodoCount = ({todos})  =>  {
  return(
    <div>
      <p>{todos.length}</p>
    </div>
  )
}
const TodoList = ({todos}) =>  {
  return(
      <ul>
        {todos.map((todos) => (
          <li key={todos}> 
            {todos} 
          </li>
        ))}
      </ul>
  )
}
const TodoListAdd = ({setTodos}) => {
  function handleSubmit(event){
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos(prevValues =>[...prevValues, todo]);
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id="todo" placeholder="Please, insert a value."></input>
        <button type="submit">AddNew</button>
      </form>
    </div>
  )
}
export default App;