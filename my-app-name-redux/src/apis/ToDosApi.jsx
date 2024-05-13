import axios from "axios";
import {addToDo, getAllToDos, toggleDone} from "../actions/ToDoActions.jsx";
import {genericErrorHandler} from "../components/bases/GenericErrorHandler.jsx";



const toDoApi = axios.create({
    baseURL: 'http://localhost:3000/toDos',
    timeout: 1000
});
toDoApi.interceptors.response.use((response)=>{ return response}, genericErrorHandler);

export const addToDoBE = async (toDo) => {
    const response = await toDoApi.post('/',toDo);
    return addToDo(response.data);
}

export const clearToDoBE = async()=> {
    return;
}

export  const toggleDoneBE = async(toDo, index) =>{
    await toDoApi.put(`/${toDo.id}`,{...toDo,done: !toDo.done});
    return toggleDone(index);
}

export const getAllToDosBE = async ()=>{

    const response = await toDoApi.get('/');
    return getAllToDos( response ? response.data : []);
}


