import {useLoaderData, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useInjection} from "inversify-react";
import {ToDoService} from "../components/services/ToDoService.jsx";
import {Button, Snackbar} from "@mui/material";
import {FormFancyTextField} from "../components/bases/FormFancyTextField.jsx";

export function EditToDo() {
    const {reset, control, handleSubmit, formState} = useForm({mode: "onChange", defaultValues: useLoaderData()});
    const todoService = useInjection(ToDoService);
    const navigate = useNavigate();
    const onSubmit = async (todo) => {
        await todoService.updateTodo(todo);
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit Page</h1>
            <FormFancyTextField label={"Todo Title"} name={"title"} limit={100} control={control} rules={{required:"Required!!!"}}/>
            <Button type={"submit"} variant={"contained"} disabled={!formState.isDirty}>Save Changes</Button>
            <Button onClick={() => reset()}>Reset Form</Button>
            <Snackbar open={formState.isSubmitted && !formState.isSubmitSuccessful && formState?.errors?.title?.message} message={formState?.errors?.title?.message}/>
        </form>
    );
}