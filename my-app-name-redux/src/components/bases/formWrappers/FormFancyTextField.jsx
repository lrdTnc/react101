import { useController } from "react-hook-form";
import FancyTextField from "../FancyTextField.jsx";

export function FormFancyTextField({ control, name, label, limit }) {
  const {
    field,
    fieldState
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <FancyTextField
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
      limit={limit}
      label={label}
      error={!!fieldState.error}
    />
  );
}