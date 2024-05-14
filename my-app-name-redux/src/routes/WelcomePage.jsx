import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllToDosBE} from "../apis/ToDosApi.jsx";
import NewTodo from "../components/todos/NewTodo.jsx";
import ToDoList from "../components/todos/ToDoList.jsx";
import {ClearToDoButton} from "../components/todos/ClearToDoButton.jsx";

export function WelcomePage() {
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