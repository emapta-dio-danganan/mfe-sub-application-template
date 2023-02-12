import React, { useState, Fragment } from "react";

const Checkbox = props => {
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

    let onChangeHandlerLabel = (val) => {
        if (props.onChanged) {
            return !disabled && props.onChanged(val);
        } else {
            console.error("No onChanged property");
        }
    }

    return (
        <Fragment>
            <div className="e-check">
                <div className="e-check-input">
                    <input id={id ? id : 'standardCheckboxID'} type={type} checked={value === true ? true : false} disabled={disabled ? true : false} onChange={event => onChangeHandler(event)} data-testid={id ? id : 'standardCheckboxID'}/>
                    <label htmlFor={id ? id : 'standardCheckboxID'}></label>
                </div>
                {
                    //label now accepts html tags
                    props && props.labelType && props.labelType == "html" ? (
                        <Fragment>
                            <label className="e-input-label">
                                <span dangerouslySetInnerHTML={{__html: label}}></span>
                                {
                                  props && props.required ? (
                                    <span className="text-danger">*</span>
                                  ) : null  
                                }
                            </label>
                        </Fragment> 
                    ) : <span onClick={() => onChangeHandlerLabel(!value)}>{label}</span>
                }
            </div>
        </Fragment>
    );
}

export default Checkbox;
