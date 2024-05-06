import NewTodo from './components/todos/NewTodo'
import ToDoList from './components/todos/ToDoList';
import {ClearToDoButton} from "./components/todos/ClearToDoButton.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllTodos} from "./actions/ToDoActions.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      const fn = async () => {
         dispatch(await getAllTodos());
      };
     fn();
  },[]);

  return (
      <div>
          <NewTodo />
          <ToDoList/>
          <ClearToDoButton/>
      </div>
  );
}

export default App
