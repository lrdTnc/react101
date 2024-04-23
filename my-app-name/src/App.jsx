import React, {useState} from 'react'
import NewTodo from './components/todos/NewTodo'
import ToDoList from './components/todos/ToDoList';
import {ClearToDoButton, whaterver} from "./components/todos/ClearToDoButton.jsx";

function App() {
    console.log("rendered App");
    const [toDos, setToDos] = useState([]);
    const addToDo = React.useCallback((value) => {
        setToDos([...toDos, value]);
    }, [toDos]);
    const updateToDo = React.useCallback((index, value) => {
        console.log("updateToDo", index, value);
        const newToDos = [...toDos];
        newToDos[index] = value;
        setToDos(newToDos);
    }, [toDos]);
    const clearToDos = React.useCallback(() => {
        const newToDos = toDos.filter((toDo) => !toDo.done);
        setToDos(newToDos);
    }, [toDos]);
    return (
        <div>
            <NewTodo onAddToDo={addToDo}/>
            <ToDoList toDos={toDos} updateToDo={updateToDo}/>
            <ClearToDoButton clearToDos={clearToDos}></ClearToDoButton>
        </div>
    );
}

export default App
