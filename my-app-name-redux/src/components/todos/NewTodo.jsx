import { Typography, Button } from "@mui/material";
import FancyTextField from "../bases/FancyTextField";
import React, {useContext, useState} from "react";
import {useDispatch} from "react-redux";
import {addToDo} from "../../actions/ToDoActions.jsx";
const NewTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const onAddToDo = () => {
       dispatch(addToDo({title: value, done: false}));

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