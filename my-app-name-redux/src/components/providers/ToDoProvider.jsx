import { Provider} from 'inversify-react';
import axios from "axios";
import {ToDoService} from "../services/ToDoService.jsx";
import {Container} from "inversify";

export const ToDoProvider =({children}) => {

    return(
        <Provider container={() => {
            const container = new Container();
            const toDoApi = axios.create({
                baseURL: 'http://localhost:3000/toDos',
                timeout: 1000
            });
            const toDoService = new ToDoService(toDoApi);
            container.bind(ToDoService).toConstantValue(toDoService);
            return container;
        }}>{children}</Provider>
    );
}