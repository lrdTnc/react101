import { Typography } from "@mui/material";
import {useSelector} from "react-redux";
const ToDoList = () => {
    const toDos = useSelector((state) => state.toDos);
    console.log(toDos);
    return (
        <div>
            {toDos?.map(todoTitle => <Typography variant="h4" key={todoTitle} >{todoTitle}</Typography>)}
        </div>
    );
}
export default ToDoList;