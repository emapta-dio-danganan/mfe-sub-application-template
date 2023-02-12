import React from "react";

const NavTab = props => {
    let { tabs, selected } = {...props};

    // Set selected variable into empty string when selected undefined of null
    selected = selected ? selected : (
        tabs && tabs.constructor === Array && tabs.length > 0 ? (
            tabs[0].value
        ) : ''
    )
    
    /**
    * selectTabHandler
    * Passing the selected tab into props function
    */
    let selectTabHandler = (event, tab) => {
        event.preventDefault()
        if(props.getActions){
            props.getActions(tab);
        }
    }

    return (
        <div className='belt-tabs'>
            {
                tabs.map((tab, idx) => (
                    <div 
                        key={idx} 
                        className={`belt-tab ${tab.value === selected ? 'is-active' : ''}`}
                        onClick={(event) => selectTabHandler(event, tab.value)}
                    >
                        <div>{tab.label}</div>
                        {
                            tab.counter !== null && tab.counter !== undefined ? (
                                <span>{` ${tab.counter}`}</span>
                            ) : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default NavTab;