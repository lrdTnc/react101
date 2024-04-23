import ToDoItem from "./ToDoItem.jsx";
import {useSelector} from "react-redux";

const ToDoList = () => {
    console.log("rendered todoList");
    const {numberOfToDos} = useSelector((state)=> state.toDos.length);
    const listOfToDos = [];
    for (let i=0; i< numberOfToDos; i++){
        listOfToDos.push(<ToDoItem index={i} ></ToDoItem>);
    }
    return (
        <div>
            {listOfToDos}

        </div>
    );
}
export default ToDoList;