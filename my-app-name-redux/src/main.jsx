import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ToDoProvider} from "./components/providers/ToDoProvider.jsx";
import {Provider} from "react-redux";
import {Store} from "./Store.jsx";
import {AxiosProvider} from "./components/providers/AxiosProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={Store}>
            <AxiosProvider>
                <ToDoProvider>
                    <App/>
                </ToDoProvider>
            </AxiosProvider>
        </Provider>
    </React.StrictMode>,
)
