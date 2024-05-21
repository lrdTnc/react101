import {useLoaderData, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";
import {ToDoService} from "../components/services/ToDoService.jsx";
import {useInjection} from "inversify-react";
import {FormFancyTextField} from "../components/bases/formWrappers/FormFancyTextField.jsx";

export function EditToDo() {
    let toDo = useLoaderData();
    const toDoService = useInjection(ToDoService);
    const navigate= useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty},
        control,
    } = useForm({defaultValues: toDo, mode: 'all'})
    const onSubmit = async (data) => {
        console.log('data: ', data);
        await toDoService.updateToDoBE(data);
        navigate('/');
    }
    const title = watch('title');
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit Page</h1>
            <h1>{toDo.title}</h1>
            <h1>{title}</h1>
            <FormFancyTextField control={control} name={'title'} label={'To Do Title'} limit={200}/>
            {errors.title && <span>This field is required</span>}
            <Button disabled={!isDirty} type={'submit'} >Save</Button>
        </form>
    );
}