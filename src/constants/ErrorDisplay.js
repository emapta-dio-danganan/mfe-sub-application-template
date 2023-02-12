import React from "react";

export const GENERAL_ERROR_DISPLAY = (
    <div className="alert is-critical">
        <div className="alert-icon"></div>
        <div>
            <h5>Something went wrong.</h5>
            <span>Please try again, or contact your administrator.</span>
        </div>
    </div>
)

export const PAGE_NOT_FOUND = () =>  {
    return (
        <div>
            <h4>404. Page not found.</h4>
        </div>  
    )
}