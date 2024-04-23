import NewTodo from './components/todos/NewTodo'
import ToDoList from './components/todos/ToDoList';
import {ClearToDoButton} from "./components/todos/ClearToDoButton.jsx";

function App() {

  return (
      <div>
          <NewTodo />
          <ToDoList/>
          <ClearToDoButton/>
      </div>
  );
}

export default App
