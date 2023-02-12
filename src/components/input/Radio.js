import React, { useState, Fragment } from "react";

const Radio = props => {

    /**
    * onChangeHandler
    * get the current value from the radio buttons
    * @param {*} event - event which will be used to get the changed value
    */
    function onchangeHandler(event) {
        if (props.onChanged) {
            return props.onChanged(event.target.value);
        } else {
            console.error("No onChanged property");
        }
    }

    return (

        <Fragment>
            <div className="e-radio">
                {
                    props.hasOwnProperty('options') && props.options.constructor === Array && props.options.length > 0 ? (
                        props.options.map((opt, idx) => (
                            <React.Fragment key={idx}  >
                                <div className="e-radio-input"  >
                                    <input
                                       name={props.id}
                                       id={opt.value ? opt.value : ""}
                                       type={props.type}
                                       value={opt.value ? opt.value : ""}
                                       checked={opt.value === props.value}
                                       onChange={event => onchangeHandler(event)}
                                       disabled={props.disabled ? true : opt.disabled ? opt.disabled : false} />
                                    <span className="circle"></span>
                                    <label htmlFor={opt.value ? opt.value : ""}>{opt.label}</label>
                                </div>

                                {
                                    opt.hasOwnProperty('customContent') && opt.customContent!='' && <React.Fragment>{opt.customContent}</React.Fragment>

                                }
                            </React.Fragment>
                        ))
                    ) : null

                }
            </div>
        </Fragment>
    );
}

export default Radio;
