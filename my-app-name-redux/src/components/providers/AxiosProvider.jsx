import { Provider} from 'inversify-react';
import {Container} from "inversify";
import {AxiosService} from "../services/AxiosService.jsx";
import {Snackbar} from "@mui/material";
import {useState} from "react";
import {genericErrorHandler} from "../bases/GenericErrorHandler.jsx";

export const AxiosProvider =({children}) => {

    const [message, setMessage] = useState('');

    const handleClose = () => {
        setMessage('');
    };
    return(
        <Provider container={() => {
            const container = new Container();
            const axiosService = new AxiosService(genericErrorHandler(setMessage));
            container.bind(AxiosService).toConstantValue(axiosService);
            return container;
        }}>{children}
            <Snackbar
                open={!!message}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
            />
        </Provider>
    );
}