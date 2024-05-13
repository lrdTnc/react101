import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ToDoProvider} from "./components/providers/ToDoProvider.jsx";
import {Provider} from "react-redux";
import {Store} from "./Store.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={Store}>
            <ToDoProvider>
                <App/>
            </ToDoProvider>
        </Provider>
    </React.StrictMode>,
)
