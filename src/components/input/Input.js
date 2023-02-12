import React, { Fragment } from "react";
import { sanitizeValue } from "../../helpers/GlobalHelper";
import { SVG_ARROW_DOWN, SVG_CLOSE_GRAY} from '../../assets/Asset';

const Input = props => {
     
    let allowedTypes = [
        'text', 'number', 'password', 'submit', 'reset', 'radio', 'checkbox', 'button', 
        'file', 'image', 'color', 'date', 'datetime-local', 'email', 'month', 'url', 'week', 
        'search', 'tel']

    // Compile property element key into array and filter it by removing 'onChanged' key
    let propsObjKey = Object.keys(props).filter(item => {
        return item !== "onChanged" && item !== "keyPressed" && item !== "allowedChar";
    });

    // Map the element property and remove the value which is undefined and false
    let inputConfig = {};
    propsObjKey.map(key => {
        if (props[key] !== undefined && props[key] !== false) {
            inputConfig[key] = props[key];
        }
    });

    inputConfig.value = inputConfig.value && (inputConfig.value.constructor === String || inputConfig.value.constructor === Number)
        ? inputConfig.value : "";

    inputConfig.placeholder = inputConfig.placeholder && (inputConfig.placeholder.constructor === String || inputConfig.placeholder.constructor === Number)
        ? inputConfig.placeholder : "";

    inputConfig.disabled = inputConfig.disabled && inputConfig.disabled.constructor === Boolean ? inputConfig.disabled : undefined


    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    let onChangeHandler = (event) => {
        if(props.type === 'text' && props.allowedChar && props.allowedChar.constructor === Object && Object.keys(props.allowedChar).length > 0){
            event.target.value = sanitizeValue(event.target.value, props.allowedChar);
        }
        if (props.onChanged) {
            if (event.target.value && props.maxLength) {
                if (event.target.value.toString().length <= props.maxLength) {
                    return props.onChanged(event.target.value);
                }
            } else {
                return props.onChanged(event.target.value);
            }
        } else {
            console.error("No onChanged property");
        }
    }

    /**
   * onKeypressHandler
   * get the current value from the input field
   * @param {*} event - event which will be used to get the changed value
   */
    let onKeypressHandler = (event) => {
        if (event.key === 'Enter') {
            if (props.keyPressed) {
                return props.keyPressed(event.target.value);
            }
        }
    }

    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    let clearValuesHandler = (event) => {
        event.preventDefault();
        return props.onChanged(null);
    }
    
    return (
        <Fragment>
            {
                props.type === 'time' ? (
                    <div className={'e-input e-input-time ' + (props.disabled ? 'input-disabled' : "")} data-testid="component-input">
                        <input data-testid={props.id ? props.id : 'component-input'} {...inputConfig} onChange={event => onChangeHandler(event)} />
                        {
                            props.disabled || !props.value ? null : (
                                <div className='e-input-icon' onClick={event => clearValuesHandler(event)}>
                                    {SVG_ARROW_DOWN}
                                </div>
                            )
                        }
                    </div>
                ) : allowedTypes.includes(props.type) ? props.label && props.label !== '' ?
                    (
                        <Fragment>
                            {
                                props.sourceform && props.sourceform == "express" ? (
                                    //remove the label if its coming from express form
                                    <label></label>
                                ) : <label>{props.label}</label>
                            }
                            <input autoComplete={'off'} data-testid={props.id ? props.id : 'component-input'} {...inputConfig} onChange={event => onChangeHandler(event)} onKeyPress={event => onKeypressHandler(event)} />
                        </Fragment>
                    )
                    :
                    (
                        <input autoComplete={'off'} data-testid={props.id ? props.id : 'component-input'} {...inputConfig} onChange={event => onChangeHandler(event)} onKeyPress={event => onKeypressHandler(event)} />
                    )
                    : null
            }
        </Fragment>
    );
}

export default Input;
