import React from 'react';
import Input from './Input';
import Select from './Select';
import ToggleButton from './ToggleButton';
import Textarea from './Textarea';
import Checkbox from "./Checkbox";
import Datepicker from "./Datepicker";
import InputSelect from "./InputSelect";
import File from './File';
import HoursMins from './HoursMins';
import Hours from "./Hours"
import Minutes from './Minutes';
import Toggle from './Toggle';
import Radio from "./Radio";

const InputSelectionHandler = props => {
    switch (props.type) {
        case "text":
        case "number":
        case "time":
        case "password":
            return <Input {...props} />;
            break;
        case "textarea":
            return <Textarea {...props} />;
            break;
        case "text-select":
        case "affiliate-textSelect":
            return <InputSelect {...props} />
            break;
        case "select":
        case "multi-select":
            return <Select {...props} />;
            break;
        case "toggle-button":
        case "toggle_button":
            return <ToggleButton {...props} />;
            break;
        case "checkbox":
            return <Checkbox {...props} />;
            break;
        case "datepicker":
            return <Datepicker {...props} />;
            break;
        case "file":
            return <File {...props} />;
            break;
        case "hours-mins":
            return <HoursMins {...props} />;
            break;
        case "hours":
            return <Hours {...props} />;
            break;
        case "minutes":
            return <Minutes {...props} />;
            break;
        case "toggle":
            return <Toggle {...props} />;
            break;
        case "radio":
            return <Radio {...props} />;
            break;
        default:
            console.error("Invalid Input Type");
            return null;
            break;
    }
}
export default InputSelectionHandler;
