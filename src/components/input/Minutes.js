import React, { Fragment } from "react";
import { parse } from "url";

const Minutes = props => {
    let { maxMins, value, placeholder, disabled, onChanged } = { ...props };
    try {
        maxMins = maxMins && parseInt(maxMins) < 59 ? parseInt(maxMins) : 59;
        placeholder = placeholder ? placeholder : '-';
        //value = value && parseInt(value) ? parseInt(value) : '';
        var minsValue = 0;
        if (value !== null && value >= 0) {
            //minsValue = value%60;
            if (value < 10) {
                minsValue = `0${value}`
            }
            else {
                minsValue = `${value}`
            }
        } else {
            minsValue = '';
        }

    } catch (error) {
        console.log(error, 'error in Component Minutes');
        return null;
    }

    function onChangeHandler(event, type) {
        let minutes = 0;
        if (event.target.value) {
            if (type === 'minutes' && parseInt(event.target.value) <= maxMins) {
                minutes = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            }
            minutes = type === 'minutes' && parseInt(event.target.value) <= maxMins ? minutes : parseInt(minsValue);
        } else {
            minutes = type === 'minutes' ? 0 : parseInt(minsValue);
        }
        props.onChanged(minutes);
    }

    return props && props.type=='minutes' ?  (
        <Fragment>
            <div className="e-field" data-testid="component-minutes">
                <div className="e-input">
                    <input
                        type="text"
                        placeholder={placeholder}
                        min={0}
                        max={maxMins}
                        value={minsValue}
                        disabled={disabled ? true : false}
                        onChange={event => onChangeHandler(event, 'minutes')}
                    />
                </div>
            </div>
        </Fragment>
    ): null;
}

export default Minutes;
