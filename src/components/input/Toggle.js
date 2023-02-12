import React, { useState, Fragment } from "react";

const Toggle = props => {
    let { id, type, disabled, value, label } = { ...props };

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    let onChangeHandler = (event) => {
        if (props.onChanged) {
            return props.onChanged(event.target.checked);
        } else {
            console.error("No onChanged property");
        }
    }

    return (
        <Fragment>
            <div className="em-toggle">
                <div className="em-toggle-input">
                    <input id={id ? id : 'standardToggleID'} type={"checkbox"} checked={value} disabled={disabled ? true : false} onChange={event => onChangeHandler(event)} />
                    <span className="slider"></span>
                    <label htmlFor={id ? id : 'standardToggleID'}></label>
                </div>
                <span>{label}</span>
            </div>
        </Fragment>
    );
}

export default Toggle;
