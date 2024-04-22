import { Typography, Button } from "@mui/material";
import FancyTextField from "../bases/FancyTextField";
import { useState } from "react";
import {addTodo} from "../../actions/todoActions.js";
import {useDispatch} from "react-redux";
const NewTodo = (props) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const onAddToDo = () => {
        dispatch(addTodo(value))
    }
    return (
        <div>
            <Typography variant="h4">Add New Todo</Typography>
            <FancyTextField label={"ToDoTitle"} limit={200} onChange={setValue} />
            <Button variant="contained" onClick={onAddToDo} >Add task</Button>
        </div>
    );
}
export default NewTodo;