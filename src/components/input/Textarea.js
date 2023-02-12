import React, { useState, Fragment } from "react";
import { sanitizeValue } from "../../helpers/GlobalHelper";


const Textarea = props => {

    // Compile property element key into array and filter it by removing 'onChanged' key
    let propsObjKey = Object.keys(props).filter(item => {
        return item !== "onChanged" && item !== 'allowSpecial' && item !== 'allowedChar';
    });

    // Map the element property and remove the value which is undefined and false
    let inputConfig = {};
    propsObjKey.map(key => {
        if (props[key] !== undefined && props[key] !== false) {
            inputConfig[key] = props[key];
        }
    });

    /**
    * allowSpecialHandler
    * filtered input value removing special character
    * @param {*} value - the pass parameter from other function
    */
    let allowSpecialHandler = (value) => {

        var pattern = /[^\w\s\.]/gi

        if (value) {
            let match = value.match(pattern);
            value = match ? value.replace(pattern, '') : value.replace(pattern, '');
        }

        return value;
    }

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
     let onChangeHandler = (event) => {
        if(props.type === 'textarea' && props.allowedChar && props.allowedChar.constructor === Object && Object.keys(props.allowedChar).length > 0){
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

    //props checkers
    if(inputConfig){
        inputConfig.id = inputConfig.id && inputConfig.id.constructor === String ? inputConfig.id : 'textarea-default-id';
        inputConfig.placeholder = inputConfig.placeholder && inputConfig.placeholder.constructor === String ? inputConfig.placeholder : '';
        inputConfig.disabled = inputConfig.disabled && inputConfig.disabled.constructor === Boolean ? 1 : 0;
    }



    return (
        <Fragment>
            <div className={inputConfig.disabled ? 'e-input input-disabled' : 'e-input'} id={props.id && props.id.constructor === String ? props.id : 'textarea-default-id'}>
                <textarea {...inputConfig} data-testid={props.id && props.id.constructor === String ? props.id : 'textarea-default-id'} onChange={event => onChangeHandler(event)} />
            </div>
        </Fragment>
    );
}

export default Textarea;