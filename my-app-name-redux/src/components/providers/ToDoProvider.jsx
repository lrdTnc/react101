import {Provider, useInjection} from 'inversify-react';
import {ToDoService} from "../services/ToDoService.jsx";
import {Container} from "inversify";
import {AxiosService} from "../services/AxiosService.jsx";

export const ToDoProvider =({children}) => {

    const axiosService = useInjection(AxiosService);

    return(
        <Provider container={() => {
            const container = new Container();
            const toDoApi = axiosService.create({
                baseURL: 'http://localhost:3000/toDos',
                timeout: 1000
            });
            const toDoService = new ToDoService(toDoApi);
            container.bind(ToDoService).toConstantValue(toDoService);
            return container;
        }}>{children}</Provider>
    );
}