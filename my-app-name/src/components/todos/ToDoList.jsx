import TodoItem from "./TodoItem.jsx";

const ToDoList = (props) => {
    console.log("rendered todoList")
    return (
        <div>
            {props.toDos.map((e,index) =><TodoItem toDo={e} index={index} updateToDo={props.updateToDo}></TodoItem>)}

        </div>
    );
    export default ToDoList;
}
