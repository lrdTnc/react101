import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
});

export const addToDo = async (toDo) => {
    const resp = await instance.post("/todos", toDo);
    return {
        type: "ADD_TODO",
        payload: resp.data
    }
}

export const clearToDos = () => {
    return {
        type: "TOGGLE_DONE"
    }
}


export const toggleDone = (index, todo) => {
    instance.put(`/todos/${todo.id}`, {...todo, done: !todo.done});
    return {
        type: "TOGGLE_DONE",
        payload: index
    }
}

export const getAllTodos = async () => {
    console.log("Getting all todos");

    const resp = await instance.get("/todos");
    return {
        type: "LOAD_TODOS",
        payload: resp.data,
    }
}