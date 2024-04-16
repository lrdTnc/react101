import { Typography } from "@mui/material";
const ToDoList = (props) => {
    return (
        <div>
            {props.toDos.map(todoTitle => <Typography variant="h4" key={todoTitle} >{todoTitle}</Typography>)}
        </div>
    );
}
export default ToDoList;