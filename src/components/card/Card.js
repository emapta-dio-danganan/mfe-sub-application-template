import React from "react";
import MenuBar from '../menu-bar/MenuBar';

const Card = props => {
    let { hideMenuBar, id, children } = { ...props };
    let menuBarProps = {...props};
    delete menuBarProps.children;
    delete menuBarProps.hideMenuBar;
    delete menuBarProps.id;

    return (
        <div 
            className={`card`}
            data-testid={id && id.constructor === String ? id : 'card-default-id'} 
            id={id && id.constructor === String ? id : 'card-default-id'}
        >
            {
                !hideMenuBar ? (
                    <MenuBar 
                        {...menuBarProps}
                    />
                ) : null
            }
            { children }
        </div>
    )
}

export default Card;
