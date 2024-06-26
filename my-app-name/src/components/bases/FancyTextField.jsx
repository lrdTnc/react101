import { TextField } from "@mui/material";
import { useState } from "react";
import React from "react";

const FancyTextField = (props) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const onChange = (event) => {
        const value = event.target.value.substring(0, props.limit);
        setCount(value.length);
        setValue(value);
        if (props.onChange) {
            props.onChange(value);
        }
    }
    return (
        <TextField label={props.label} variant="outlined" helperText={count + "/" + props.limit} onChange={onChange} value={value} />
    );
}

export default FancyTextField;