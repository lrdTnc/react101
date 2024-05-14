import {Button} from "@mui/material";
import React from "react";
import {useDispatch} from "react-redux";
import {useInjection} from "inversify-react";
import {ToDoService} from "../services/ToDoService.jsx";

export const ClearToDoButton = () => {
    console.log("rendered ClearToDoButton");
    const dispatch = useDispatch();
    const toDoService = useInjection(ToDoService);
    const onClearToDos = React.useCallback(()=>{
        dispatch(toDoService.clearToDosBE());
    },[]);

    return (
        <Button variant="contained" onClick={onClearToDos}>Clear Done</Button>
    );
}