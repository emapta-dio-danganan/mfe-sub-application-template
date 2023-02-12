import React, { useState, Fragment } from "react";

const File = props => {
    let hasChips = props.hasOwnProperty('hasChips') ? props.hasChips : true;
    // Compile property element key into array and filter it by removing 'onChanged' key
    let propsObjKey = Object.keys(props).filter(item => {
        return item !== "onChanged" && item !== "value";
    });

    // Map the element property and remove the value which is undefined and false
    let inputConfig = {};
    propsObjKey.map(key => {
        if (key !== 'hasChips' && key !== 'multiple' || props[key] === undefined && props[key] !== false) {
            inputConfig[key] = props[key];
        }
    });

    /**
    * onChangeHandler
    * get the current value from the input field
    * @param {*} event - event which will be used to get the changed value
    */
    function onchangeHandler(event) {
        if (props.onChanged) {
            if (props.multiple) {
                return props.onChanged([...props.value, ...event['files']]);
            } else {
                let files = [...event['files']];
                event.value = '';   
                return props.onChanged(files);
            }
        } else {
            console.error("No onChanged property");
        }
    }

    /**
    * removeFile
    * remove file from the props value then return it
    * @param {*} event - event
    * @param {*} idx - index of the file which will be removed
    */
    function removeFile(event, idx) {
        event.preventDefault();
        let copyValue = [...props.value];
        copyValue.splice(idx, 1);
        return props.onChanged(copyValue);
    }

    if(inputConfig){
        inputConfig.id = inputConfig.id && inputConfig.id.constructor === String ? inputConfig.id : 'file-default-id';
        inputConfig.placeholder = inputConfig.placeholder && inputConfig.placeholder.constructor === String ? inputConfig.placeholder : '';
        inputConfig.disabled = inputConfig.disabled && inputConfig.disabled.constructor === Boolean ? true : false;
    }
    
    return (
        <Fragment>
             <div
                className={inputConfig.disabled ? 'e-input input-disabled' : 'e-input'} 
                data-testid={inputConfig.id && inputConfig.id.constructor === String ? inputConfig.id : 'file-default-id'} 
                // id={inputConfig.id && inputConfig.id.constructor === String ? inputConfig.id : 'file-default-id'}
            >   
                { 
                    hasChips &&
                        <div className="e-attach-chips">
                            {
                                props.value && props.value.constructor === Array && props.value.length > 0 ? (
                                    props.value.map((val, idx) => (
                                        <div key={idx} className="chip">
                                            <span>{val.name}</span>
                                            {
                                                props.disabled ? null :
                                                    <a href="#" onClick={event => removeFile(event, idx)} disabled={props.disabled} className="close">
                                                    </a>
                                            }
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>
                    }           
                <label htmlFor={inputConfig.id} className="e-attach-input" data-testid="file-label">
                    <span>{props.hasOwnProperty('useplaceholder') && props.useplaceholder ? props.placeholder : "Attach File"}</span>
                </label>
                <input 
                    {...inputConfig} 
                    onChange={event => onchangeHandler(event.target)}
                    style={{ 'display': 'none' }}
                    disabled={props.disabled} 
                    data-testid='file' 
                />
            </div>
        </Fragment>
    );
}

export default File;