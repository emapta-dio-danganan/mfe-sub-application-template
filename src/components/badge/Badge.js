import React from 'react';
import { SVG_BADGE_APPROVE, SVG_BADGE_APPROVE_GRAY, SVG_BADGE_CANCEL, SVG_BADGE_DONE, SVG_BADGE_PREAPPROVE, SVG_BADGE_PREAPPROVE_GRAY, SVG_BADGE_REJECT, SVG_BADGE_INCOMPLETE, SVG_BADGE_ACTIVE, SVG_BADGE_INACTIVE } from '../../assets/Asset';

const badgeCurrent = (badge) => {
    let icon = null;
    switch (badge) { 
        case "PENDING":
            icon = <div data-testid="badge-current" className="badge badge-pending"></div>
            break;
        case "APPROVED":
            icon = <div data-testid="badge-current"  className="badge badge-approved"></div>
            break;
        case "REJECTED":
            icon = <div data-testid="badge-current" className="badge badge-rejected"></div>
            break;
        case "CANCELLED":
            icon = <div data-testid="badge-current" className="badge badge-cancelled"></div>
            break;
        case "REQUEST_STATUS_WARNING":
            icon = <div data-testid="badge-current" className="badge badge-warning"></div>
            break;
        case "REQUEST_STATUS_CRITICAL":
            icon = <div data-testid="badge-current" className="badge badge-critical"></div>
            break;
        case "CERTIFIED":
            icon = <div data-testid="badge-current" className="badge badge-certify"></div>
            break;
        case "DONE":
            icon = <div data-testid="badge-current" className="badge badge-done"></div>
            break;
        case "PRE_APPROVED_APPROVED":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_PREAPPROVE}</div>
                        <div>{SVG_BADGE_APPROVE}</div>
                   </>
            break;
        case "PRE_APPROVED_DONE":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_PREAPPROVE}</div>
                        <div>{SVG_BADGE_DONE}</div>
                   </>
            break;
        case "PRE_APPROVED_REJECTED":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_REJECT}</div>
                        <div>{SVG_BADGE_PREAPPROVE_GRAY}</div>
                        <div>{SVG_BADGE_APPROVE_GRAY}</div>
                   </>
            break;
        case "PRE_APPROVED_CANCELLED":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_CANCEL}</div>
                        <div>{SVG_BADGE_PREAPPROVE_GRAY}</div>
                        <div>{SVG_BADGE_APPROVE_GRAY}</div>
                    </>
            break;
        case "PRE_APPROVED_APPROVED":
            icon = <>
                        <div>{SVG_BADGE_PREAPPROVE}</div>
                        <div>{SVG_BADGE_APPROVE}</div>
                   </>
            break;
        case "PRE_APPROVED_DONE":
            icon = <>
                        <div>{SVG_BADGE_PREAPPROVE}</div>
                        <div>{SVG_BADGE_DONE}</div>
                   </>
            break;
        case "PRE_APPROVED_REJECTED":
            icon = <>
                        <div>{SVG_BADGE_REJECT}</div>
                        <div>{SVG_BADGE_PREAPPROVE_GRAY}</div>
                        <div>{SVG_BADGE_APPROVE_GRAY}</div>
                   </>
            break;
        case "PRE_APPROVED_CANCELLED":
            icon = <>
                        <div>{SVG_BADGE_CANCEL}</div>
                        <div>{SVG_BADGE_PREAPPROVE_GRAY}</div>
                        <div>{SVG_BADGE_APPROVE_GRAY}</div>
                    </>
            break;
        case "INCOMPLETE":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_INCOMPLETE}</div>
                    </>
            break;   
        case "ACTIVE":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_ACTIVE}</div>
                    </>
            break; 
        case "INACTIVE":
            icon = <>
                        <div data-testid="badge-current">{SVG_BADGE_INACTIVE}</div>
                    </>
            break; 
        default:
            icon = null
            break;
    }
    return icon;
}

const badgeHistorical = (item) => {
    let icon = null;
    switch (item) {
        case "PENDING":
            icon = <div data-testid="badge-history" className="badge badge-pending-gray"></div>
            break;
        case "APPROVED":
            icon = <div data-testid="badge-history" className="badge badge-approved-gray"></div>
            break;
        case "REQUEST_STATUS_WARNING":
            icon = <div data-testid="badge-history" className="badge badge-warning-gray"></div>
            break;
        case "REQUEST_STATUS_CRITICAL":
            icon = <div data-testid="badge-history" className="badge badge-critical-gray"></div>
            break;
        default:
            icon = null
            break;
    }
    return icon;
}

const Badge = (props) => {
    let { data } = { ...props };
    return (
        <React.Fragment>
            {badgeCurrent(data.currentStat)}
            {data.historyStat && data.historyStat.constructor == Array && data.historyStat.length > 0 && data.historyStat.map((result, idx) => (
                result == data.currentStat ? null :
                    <span key={idx}>{badgeHistorical(result)}</span>
            ))}
        </React.Fragment>
    );
}


export default Badge;
