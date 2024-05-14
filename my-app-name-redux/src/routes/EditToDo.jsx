import {useLoaderData} from "react-router-dom";

export function EditToDo() {
    let { id, title } = useLoaderData();
    return (
        <div>
            <h1>Edit Page</h1>
            <h2>{'id: '+id}</h2>
            <h2>{'title: '+title}</h2>
        </div>
    );
}