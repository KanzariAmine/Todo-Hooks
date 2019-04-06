import React, {useState} from 'react';
import './App.css';


function Todo ({value, index, completeTodo, deleteTodo}){
  console.log(index)
  return(
    <div 
    style={{textDecoration: value.isCompleted ? 'line-through' : ''}}
    className="todo" 
    key={index}
    >
    {value.text}
     <div>
      <button onClick={() => completeTodo(index)}> Complete</button>
      <button onClick={() => deleteTodo(index)}> Delete</button>
     </div>
    </div>
   
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add ToDo..." value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App(){
  const [todos, setTodos] = useState([
  {
    text: 'Learn about React',
    isCompleted: false
  },
  {
    text: 'Meet friend for lunch',
    isCompleted: false
  },
  {
    text: 'Build really cool react app',
    isCompleted: false
  }
]);

const addTodo = text => {
  const NewTodos = [...todos, {text, isCompleted: false}];
  setTodos(NewTodos);
}

const completeTodo = index => {
  
  const NewTodos = [...todos];
  console.log('NewTodos',NewTodos[index])
  NewTodos[index].isCompleted = true;
  setTodos(NewTodos);
}

const deleteTodo = index => {
  const NewTodos = [...todos];
  NewTodos.splice(index, 1)
  setTodos(NewTodos);
}
return(
  <div className="app">
    <div className="todo-list">
      {
        todos.map((todo, index) => (
          <Todo 
          key={index} 
          value={todo} 
          completeTodo={() => completeTodo(index)} 
          deleteTodo={() => deleteTodo(index)}
          />
        ))
      }
      <TodoForm addTodo={addTodo}/>
    </div>
  </div>
)
}

export default App;