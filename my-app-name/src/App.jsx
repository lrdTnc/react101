import { useState } from 'react'
import NewTodo from './components/todos/NewTodo'
import ToDoList from './components/todos/ToDoList';

function App() {
  const [toDos, setToDos] = useState([]);
  const updateToDo = (value) => {
    setToDos([...toDos, value]);
  };
  return (
    <div>
      <NewTodo onAddToDo={updateToDo} />
      <ToDoList toDos={toDos} />
    </div>
  );
}

export default App
