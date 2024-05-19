import FancyTextField from "./FancyTextField.jsx";
import {useController} from "react-hook-form";


export const FormFancyTextField = ({label, limit, control, name, rules}) => {
    const {
        field, fieldState,
    } = useController({
        name,
        control,
        rules
    });
    return <FancyTextField
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        inputRef={field.ref}
        error={fieldState.error}

    label={label}
    limit={limit}/>
}