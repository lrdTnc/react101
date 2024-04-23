import {Button} from "@mui/material";
import React, {useContext} from "react";
import {ToDoContext} from "../../contexts/ToDoContext.jsx";
import {clearToDos, toggleDone} from "../../actions/ToDoActions.jsx";
import {useDispatch} from "react-redux";

export const ClearToDoButton = () => {
    console.log("rendered ClearToDoButton");
    const dispatch = useDispatch();
    const onClearToDos = React.useCallback(()=>{

        dispatch(clearToDos());
    },[]);

    return (
        <Button variant="contained" onClick={onClearToDos}>Clear Done</Button>
    );
}