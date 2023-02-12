import React, { useState, Fragment } from "react";

const ToggleButton = props => {
    let { id, disabled, value, options, placeholder } = { ...props };
    const expectedId = id && id.constructor === String ? id : ''

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    let onChangeHandler = (event) => {
        if (props.onChanged) {
            return props.onChanged(event);
        } else {
            console.error("No onChanged property");
        }
    }
    
    return (
        <Fragment>
            <div 
                className={disabled === true ? 'e-toggle input-disabled' : 'e-toggle'} 
                data-testid={id && id.constructor === String ? id : 'togglebutton-default-id'} 
                id={id && id.constructor === String ? id : 'togglebutton-default-id'}
            >
                {options && options.constructor === Array && options.length > 0 ?
                    options.map((listItem, i) => (
                        <div key={i} className={listItem.disabled || disabled === true ? 'is-disabled' : ''}>
                            <input 
                                placeholder={placeholder && placeholder.constructor === String ? placeholder : ''} 
                                type="radio" 
                                id={expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i)}
                                name={expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i)}
                                value={listItem.value && listItem.value.constructor === String ? listItem.value : ''}
                                checked={listItem.value === value}
                                disabled={listItem.disabled || disabled ? true : false}
                                onChange={event => onChangeHandler(listItem.value)}
                                className={listItem.value === value ? "is-active" : ""}>
                            </input>
                            <label htmlFor={expectedId ? (expectedId + listItem.value) : (listItem.value + '-' + i)}>{listItem.label}</label>
                        </div>
                    )) : null
                }
            </div>
    </Fragment>
    );
}

export default ToggleButton;
