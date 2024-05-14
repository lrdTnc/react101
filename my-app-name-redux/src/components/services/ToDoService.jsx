import {addToDo, getAllToDos} from "../../actions/ToDoActions.jsx";

export class ToDoService {
    toDoApi = null;

    constructor(toDoApi) {
        this.toDoApi = toDoApi;
    }
    addToDoBE = async (toDo) => {
        const response = await this.toDoApi.post('/',toDo);
        return addToDo(response.data);
    }
    getAllToDosBE = async ()=>{

        const response = await this.toDoApi.get('/');
        return getAllToDos( response ? response.data : []);
    }
    clearToDosBE = async () => {
        await this.toDoApi.delete('/clear');
        return getAllToDos([]);
    }
    getToDoById = async (loaderParams) => {
        const response = await this.toDoApi.get(`/${loaderParams.params.id}`);
        return response?.data;
    }
}