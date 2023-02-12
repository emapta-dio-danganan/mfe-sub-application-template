import React, { Fragment } from "react";
import { parse } from "url";

const Hours = props => {
    let { maxHours, value, placeholder, disabled, onChanged } = { ...props };
   
    try {
        
        maxHours = maxHours && parseInt(maxHours) < 23 ? parseInt(maxHours) : 23;
        placeholder = placeholder ? placeholder : '-';
        //value = value && parseInt(value) ? parseInt(value) : '';
       
        var hoursValue = 0;
        if (value !== null && value >= 0) {
            //hoursValue = parseInt(value/60);
            if (value < 10) {
                hoursValue = `0${value}`
            }
            else {
                hoursValue = `${value}`
            }

        } else {
            hoursValue = '';
        }
    } catch (error) {
        console.log(error, 'error in Component Hours');
        return null;
    }

    function onChangeHandler(event, type) {
        let hours = 0;
        if (event.target.value) {
            if (type === 'hours' && parseInt(event.target.value) <= maxHours) {
                hours = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
                hours = type === 'hours' && parseInt(event.target.value) <= maxHours ? hours : parseInt(hoursValue);
            } else {
                hours = type === 'hours' ? 0 : parseInt(hoursValue);
            }
            //et totalHours = parseInt(hours*60);
            props.onChanged(hours);
        }
    }
    return  props && props.type=='hours' ?  (
       
        
        <Fragment>
            <div className="e-field" data-testid="component-hours">
                <div className="e-input">
                    <input
                        type="text"
                        placeholder={placeholder}
                        min={0}
                        max={maxHours}
                        value={hoursValue}
                        disabled={disabled ? true : false}
                        onChange={event => onChangeHandler(event, 'hours')}
                    />
                </div>
            </div>
        </Fragment>
    ) : null;
}

export default Hours;
