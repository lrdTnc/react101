import {Button} from "@mui/material";
import React from "react";
import {clearToDos} from "../../actions/ToDoActions.jsx";
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