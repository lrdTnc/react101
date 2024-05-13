import { Typography, Button } from "@mui/material";
import FancyTextField from "../bases/FancyTextField";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useInjection} from "inversify-react";
import {ToDoService} from "../services/ToDoService.jsx";

const NewTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const toDoService = useInjection(ToDoService);
    const onAddToDo = async() => {
       //dispatch(await addToDoBE({title: value, done: false}));
        dispatch(await toDoService.addToDoBE({title: value, done: false}));

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