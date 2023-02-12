import React, { Fragment } from "react";
import { parse } from "url";

const HoursMins = props => {
    let { id, maxHours, maxMins, value, placeholder, disabled, onChanged } = { ...props };
    maxHours = maxHours && parseInt(maxHours) < 23 ? parseInt(maxHours) : 23;
    maxMins = maxMins && parseInt(maxMins) < 59 ? parseInt(maxMins) : 59;
    placeholder = placeholder ? placeholder : '';
    value = value && parseInt(value) ? parseInt(value) : '';
    var hoursValue = 0;
    var minsValue = 0;
    if(value){
        hoursValue = parseInt(value/60);
        minsValue = value%60;
        if(hoursValue < 10){
            hoursValue = `0${hoursValue}`
        }
        if(minsValue < 10){
            minsValue = `0${minsValue}`
        }
    } else {
        hoursValue = '00';
        minsValue = '00';
    }

    function onChangeHandler(event, type){
        let hours = 0;
        let minutes = 0;
        if(event.target.value){
            if(type === 'hours' && parseInt(event.target.value) <= maxHours){
                hours = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            } else if(type === 'minutes' && parseInt(event.target.value) <= maxMins){
                minutes = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
            }
            hours = type === 'hours' && parseInt(event.target.value) <= maxHours ? hours : parseInt(hoursValue);
            minutes = type === 'minutes' && parseInt(event.target.value) <= maxMins ? minutes : parseInt(minsValue);
        } else {
            hours = type === 'hours' ? 0 : parseInt(hoursValue);
            minutes = type === 'minutes' ? 0 : parseInt(minsValue);
        }
        let totalHours = parseInt((hours*60) + minutes);
        props.onChanged(totalHours);
    }

    return (
        <Fragment>
             <div
                className={disabled === true ? 'field input-hours input-disabled' : 'field input-hours'} 
                data-testid={props.id && props.id.constructor === String ? props.id : 'hoursMins-default-id'} 
                id={props.id && props.id.constructor === String ? props.id : 'hoursMins-default-id'}
             >
                <div className="e-input">
                <input 
                    type="text" 
                    placeholder={placeholder && placeholder.constructor === String ? placeholder : ''} 
                    min={0} 
                    max={maxHours}
                    value={hoursValue}
                    disabled={disabled ? true : false}
                    onChange={event => onChangeHandler(event, 'hours')}
                />
                <span>:</span>
                <input 
                    type="text" 
                    placeholder={placeholder && placeholder.constructor === String ? placeholder : ''} 
                    min={0} 
                    max={maxHours} 
                    value={minsValue}
                    disabled={disabled ? true : false}
                    onChange={event => onChangeHandler(event, 'minutes')}
                />
                </div>
            </div>
        </Fragment>
    );
}

export default HoursMins;
