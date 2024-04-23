import toDoItem from "../components/todos/ToDoItem.jsx";

export const addToDo = (toDo) => {
    return {
        type: "ADD_TODO",
        payload: toDo
    }
}

export const clearToDos = () => {
    return {
        type: "ADD_TODO"

    }
}


export const toggleDone = (index) => {
    return {
        type: "TOGGLE_TODO",
        payload: index
    }
}