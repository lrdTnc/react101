import React, {useContext} from "react";
import {Checkbox, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {toggleDone} from "../../actions/ToDoActions.jsx";
import {useDispatch} from "react-redux";

function ToDoItem(index){
    console.log("rendered todoItem");
    const {toDo} = useSelector((state)=> state.toDos[index]);
    const dispatch = useDispatch();
    const onChange = (event) => {
        dispatch(toggleDone(index));
    }
    return (
        <div>
            <Checkbox checked={toDo.done} onChange={onChange}/>
            <Typography variant="h4" key={toDo.title}>{toDo.title}</Typography>
        </div>
    );
}

export default ToDoItem;