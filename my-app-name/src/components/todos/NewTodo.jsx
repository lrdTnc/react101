import { Typography, Button } from "@mui/material";
import FancyTextField from "../bases/FancyTextField";
import { useState } from "react";
const NewTodo = (props) => {
    const [value, setValue] = useState('');
    const onAddToDo = () => {
        props.onAddToDo(value);
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