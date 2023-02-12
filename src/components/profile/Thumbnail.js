import { Divider } from '@material-ui/core';
import React from 'react';

const Thumbnail = (props) => {
    let { initials, img, onClicked, size } = { ...props };
    size = size && size.constructor === String ? `thumb-${size}` : '';

    /**
    * thumbnailOnclick
    * Determine if theres an declared onClicked function
    */
    let thumbnailOnclick = (event) => {
        if(event && event.preventDefault){
            event.preventDefault();
        }

        if(onClicked){
            onClicked();
        }
    }

    return (
        img && img.constructor === String ? (
            <div>
                <a id="thumb-img" href="#" className={`thumb ${size}`} onClick={event => thumbnailOnclick(event)} style={{ backgroundImage: "url(" + img + ")" }} >
                </a>
            </div>
        ) : (
            <div>
                <a href="#" className={`thumb ${size}`} onClick={event => thumbnailOnclick(event)}>
                    <span>{initials && initials.constructor === String ? initials : ''}</span>
                </a>
            </div>
         )
    );
}

export default Thumbnail;



