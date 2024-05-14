import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {WelcomePage} from "./routes/WelcomePage.jsx";
import {EditToDo} from "./routes/EditToDo.jsx";
import {useInjection} from "inversify-react";
import {ToDoService} from "./components/services/ToDoService.jsx";

function App() {
    const toDoService = useInjection(ToDoService)
    const router = createBrowserRouter([
        {
            path: "/",
            element: <WelcomePage/>,
        },
        {
            path: "/edit/:id",
            element: <EditToDo/>,
            loader: toDoService.getToDoById,
            errorElement: <h1>Not Found</h1>,
        }
    ]);
    return <RouterProvider router={router}></RouterProvider>;
}

export default App
