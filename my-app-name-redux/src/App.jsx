import {useEffect} from 'react'
import NewTodo from './components/todos/NewTodo'
import ToDoList from './components/todos/ToDoList';
import {ClearToDoButton} from "./components/todos/ClearToDoButton.jsx";
import {useDispatch} from "react-redux";
import {getAllToDosBE} from "./apis/ToDosApi.jsx";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        const getToDos = async () => {

            dispatch(await getAllToDosBE());
        }
        getToDos();
    }, [dispatch]);

    return (
        <div>
            <NewTodo/>
            <ToDoList/>
            <ClearToDoButton/>
        </div>
    );
}

export default App
