import React, { useState, Fragment } from "react";

import { Popper } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import Information from '../information/Information';

const Info = props => {
    let { info, title } = { ...props };

    let [showInfo, setShowInfo] = useState(null);
    info = info ? info : 'loading...'

    /**
    * handleDisplayInfo
    * handle the information popover per statistic
    * return null
    */
    function handleDisplayInfo(event) {
        event.preventDefault();
        if (showInfo) {
            setShowInfo(null);
        } else {
            setShowInfo(event.currentTarget);
        }
    }

    return (
        <Fragment>
            <div>
                <Fragment>
                    <a href="#" className="title-info" onClick={event => handleDisplayInfo(event)}>
                        <div className="title-icon"></div>
                    </a>
                    <Popper
                        id="InfoPopOver"
                        open={Boolean(showInfo)}
                        anchorEl={showInfo}
                        placement="bottom-start"
                        disablePortal={true}
                        modifiers={{
                            flip: {
                                enabled: false
                            },
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: "scrollParent"
                            },
                            arrow: {
                                enabled: true,
                                element: "arrowRef",
                            },
                        }}
                    >
                        <ClickAwayListener onClickAway={event => handleDisplayInfo(event, 'info')}>
                            <Information 
                                item={info && info.infoDetails ? info.infoDetails : info} l
                                istRow={info && info.listRow ? info.listRow : []} 
                                desc={info && info.listRow && info.listRow.length > 0 ? false : true} 
                                title={title ? title : ''} 
                                hide={(event) => handleDisplayInfo(event, 'info')} 
                            />
                        </ClickAwayListener>
                    </Popper>
                </Fragment>
            </div>
        </Fragment>
    );
}

export default Info;