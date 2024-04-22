import { useState } from 'react'
import NewTodo from './components/todos/NewTodo'
import ToDoList from './components/todos/ToDoList';

function App() {
  return (
    <div>
      <NewTodo />
      <ToDoList />
    </div>
  );
}

export default App
