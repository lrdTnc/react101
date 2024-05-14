import React, {useContext} from "react";
import {Button, Checkbox, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {toggleDone} from "../../actions/ToDoActions.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function ToDoItem({index}){
    console.log("rendered todoItem");
    const toDo = useSelector((state)=> state.toDos[index]);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const onChange = (event) => {
        dispatch(toggleDone(index));
    }
    const onEdit = () => {
        console.log(toDo.id);
        navigate(`/edit/${toDo.id}`);
    }
    return (
        <div>
            <Checkbox checked={toDo.done} onChange={onChange}/>
            <Typography variant="h4" key={toDo.title}>{toDo.title}</Typography>
            <Button onClick={onEdit} >Edit</Button>
        </div>
    );
}

export default ToDoItem;