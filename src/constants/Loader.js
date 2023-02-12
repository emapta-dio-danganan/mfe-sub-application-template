import React from "react";
//assets
import { SVG_ARROW_DOWN, SVG_HAMBURGER, SVG_ARROWRIGHT_GREEN, SVG_LOGO_EMPOWER, SVG_ARROW_LEFT, SVG_ARROW_RIGHT } from '../assets/Asset';

/**
* SplashLoader
*/
export const SplashLoader = () => {
    try {
        return (
            <div className="l-splash">
                <div className="l-splash-time">
                    <div>
                        <div className="l-text-h">
                            <span style={{ width: '20px' }}></span>
                            <span style={{ width: '70px' }}></span>
                        </div>
                        <div className="l-text-p">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                    </div>
                    <div>
                        <div className="l-text-h">
                            <span style={{ width: '20px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                        <div className="l-text-p">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-splash-clock">
                    <div className="l-splash-user">
                        <div className="l-splash-img"></div>
                        <div className="l-splash-name l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-text-h">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '20px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-splash-action l-shine-container">
                        <div className="l-shine"></div>
                        <div className="l-splash-expected">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '20px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                        <div className="l-splash-buttons">
                            <span>
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                            </span>
                            <div>
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '60px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* DefaultLoader
*/
export const DefaultLoader = () => {
    try {
        return (
            <div className="l-home">
                <div className="l-topnav l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-topnav-left">
                        {SVG_HAMBURGER}
                        <div className="l-topnav-logo">
                            {SVG_LOGO_EMPOWER}
                        </div>
                        <div className="l-pivot">
                            <div className="l-icon"></div>
                            <div className="l-text"><span style={{ width: '60px' }}></span></div>
                            {SVG_ARROW_DOWN}
                        </div>
                    </div>
                    <div className="l-topnav-right">
                        <span></span>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="l-home-page">
                    <div className="l-sidenav l-shine-container">
                        <div className="l-shine"></div>
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div className="l-default-main">
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (DashboardLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* DashboardLoader
*/
export const DashboardLoader = () => {
    try {
        return (
            <div className="l-home l-home-screen">
                <div className="l-home-page">
                    <div className="l-home-main">
                        <div className="l-home-banner"></div>
                        <div className="l-home-content">
                            <div className="row">
                                <div className="col-12 col-xxl-8">
                                    <div className="l-card l-welcome l-shine-container">
                                        <div className="l-shine"></div>
                                        <div className="l-welcome-text">
                                            <div>
                                                <div className="l-text-h">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="l-text-p">
                                                    <span style={{ width: '80px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '120px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-welcome-img">
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="l-applications l-shine-container">
                                        <div className="l-belt">
                                            <div className="l-belt-left">
                                                <div className="l-text">
                                                    <div className="l-belt-icon"></div>
                                                    <span style={{ width: '120px' }}></span>
                                                    <div className="l-belt-info"></div>
                                                </div>
                                            </div>
                                            <div className="l-belt-right">
                                                <div className="l-belt-button"><div></div><span style={{ width: '80px' }}></span></div>
                                            </div>
                                        </div>
                                        <div className="l-applications-list">
                                            <div className="l-applications-col">
                                                <div className="l-applications-item l-shine-container">
                                                    <div className="l-shine"></div>
                                                    <span></span>
                                                    <div className="l-text">
                                                        <span style={{ width: '80px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-applications-col">
                                                <div className="l-applications-item l-shine-container">
                                                    <div className="l-shine"></div>
                                                    <span></span>
                                                    <div className="l-text">
                                                        <span style={{ width: '80px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-applications-col">
                                                <div className="l-applications-item l-shine-container">
                                                    <div className="l-shine"></div>
                                                    <span></span>
                                                    <div className="l-text">
                                                        <span style={{ width: '80px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-applications-col">
                                                <div className="l-applications-item l-shine-container">
                                                    <div className="l-shine"></div>
                                                    <span></span>
                                                    <div className="l-text">
                                                        <span style={{ width: '80px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-applications-col">
                                                <div className="l-applications-item l-shine-container">
                                                    <div className="l-shine"></div>
                                                    <span></span>
                                                    <div className="l-text">
                                                        <span style={{ width: '80px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-applications-col">
                                                <div className="l-applications-item l-shine-container">
                                                    <div className="l-shine"></div>
                                                    <span></span>
                                                    <div className="l-text">
                                                        <span style={{ width: '80px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-teamlist l-shine-container">
                                        <div className="l-belt">
                                            <div className="l-belt-left">
                                                <div className="l-text">
                                                    <div className="l-belt-icon"></div>
                                                    <span style={{ width: '70px' }}></span>
                                                    <div className="l-belt-info"></div>
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '80px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-card">
                                            <div className="l-text">
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xxl-4">
                                    <div className="l-card l-stats l-shine-container">
                                        <div className="l-shine"></div>
                                        <div className="l-text">
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-stats-item">
                                            <div className="l-stats-text">
                                                <div className="l-text">
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '20px' }}></span>
                                                </div>
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '40px' }}></span>
                                                </div>
                                                <div className="l-stats-link">
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '40px' }}></span>
                                                        {SVG_ARROWRIGHT_GREEN}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-stats-chart">
                                                <div><span></span></div>
                                            </div>
                                        </div>
                                        <div className="l-stats-item">
                                            <div className="l-stats-text">
                                                <div className="l-text">
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '20px' }}></span>
                                                </div>
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '40px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '20px' }}></span>
                                                </div>
                                                <div className="l-stats-link">
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '40px' }}></span>
                                                        {SVG_ARROWRIGHT_GREEN}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-stats-chart">
                                                <div><span></span></div>
                                            </div>
                                        </div>
                                        <div className="l-stats-item">
                                            <div className="l-stats-text">
                                                <div className="l-text">
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '20px' }}></span>
                                                </div>
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '40px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '40px' }}></span>
                                                    <span style={{ width: '20px' }}></span>
                                                </div>
                                                <div className="l-stats-link">
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '40px' }}></span>
                                                        {SVG_ARROWRIGHT_GREEN}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="l-stats-chart">
                                                <div><span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-card">
                                        <div className="l-text">
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-home-side">
                        <div className="l-quick l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-quick-title">
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <span></span>
                            </div>
                            <div className="l-quick-item">
                                <span></span>
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                            </div>
                            <div className="l-quick-item">
                                <span></span>
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '80px' }}></span>
                                </div>
                            </div>
                            <div className="l-quick-item">
                                <span></span>
                                <div className="l-text">
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-side-events l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-events-title">
                                <div className="l-text-h">
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <div className="l-text-p">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                            </div>
                            <div className="l-events-item">
                                <div className="l-text-p">
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                </div>
                                <div className="l-events-thumbs">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="l-events-item">
                                <div className="l-text-p">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <div className="l-events-thumbs">
                                    <span></span><span></span>
                                </div>
                            </div>
                            <div className="l-events-link">
                                <div className="l-text">
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                    {SVG_ARROWRIGHT_GREEN}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (DashboardLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* RequestLoader
*/
export const RequestLoader = (props) => {
    try {
        return (
            <div className="l-lists">
                <div className="l-lists-main">
                    <div className="l-page-title">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-card l-shine-container">
                        <div className="l-shine"></div>
                        <div className="l-belt">
                            <div className="l-belt-left">
                                <div className="l-belt-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '70px' }}></span>
                                    <span style={{ width: '25px' }}></span>
                                </div>
                                {
                                    props && props.view == 'TALENT' ? (
                                        <div className="l-belt-button">
                                            <div className="l-icon"></div>
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="l-belt-right">
                                <div className="l-belt-button">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '45px' }}></span>
                                </div>
                                <div className="l-belt-action">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className="l-search">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '10px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-list">
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                            <div className="l-lists-item">
                                {
                                    props && props.view !== 'TALENT' ? (
                                        <div className="l-lists-talent">
                                            <div className="l-thumb"></div>
                                            <div className="l-lists-name">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '20px' }}></span>
                                                    <span style={{ width: '100px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="l-lists-text">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                                <div className="l-lists-badge">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-lists-side l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-side-status">
                        <div className="l-text">
                            <span style={{ width: '15px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-side-sort">
                        <div className="l-side-fields">
                            <div className="l-text-h">
                                <span style={{ width: '15px' }}></span>
                                <span style={{ width: '35px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '35px' }}></span>
                            </div>
                            <div className="l-field">
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                        <div className="l-side-fields">
                            <div className="l-text-h">
                                <span style={{ width: '35px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '75px' }}></span>
                            </div>
                            <div className="l-field">
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                        <div className="l-side-toggle">
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                            </div>
                        </div>
                        <div className="l-side-button">
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* RequestItemLoader
*/
export const RequestItemLoader = (props) => {
    try {
        let totalItem = 8;
        let rowItem = [];
        for (let item = 0; item < totalItem; item++) {
            rowItem.push(<div key={'RequestItemLoader-'+item} className="l-lists-item">
                {
                    props && props.view !== 'TALENT' ? (
                        <div className="l-lists-talent">
                            <div className="l-thumb"></div>
                            <div className="l-lists-name">
                                <div className="l-text-h">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '70px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '70px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '100px' }}></span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className="l-lists-text">
                    <div className="l-text-h">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '70px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                </div>
                <div className="l-lists-badge">
                    <div className="l-icon"></div>
                </div>
            </div>);
        }

        return (
            <div className="l-lists-list">
                {rowItem}
            </div>
        );
    } catch (error) {
        console.warn('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}


/**
* LeaveBalanceItemLoader
*/
export const LeaveBalanceItemLoader = (props) => {
    try {
        let totalItem = 8;
        let rowItem = [];
        for (let item = 0; item < totalItem; item++) {
            rowItem.push(<div className="l-lists-item" key={item}>
                {
                    props && props.view !== 'TALENT' ? (
                        <div className="l-lists-talent">
                            <div className="l-thumb"></div>
                            <div className="l-lists-name">
                                <div className="l-text-h">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '70px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '70px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '100px' }}></span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className="l-lists-text">
                    <div className="l-text-h">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '70px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                </div>
            </div>);
        }

        return (
            <div className="l-leavebalanceitem l-lists-list">
                {rowItem}
            </div>
        );
    } catch (error) {
        console.warn('Invalid return. Please check helpers (LeaveBalanceItemLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const LeaveBalanceInnerLoader = (props) => {
    try {
        return (
            <div className="l-listinner l-inner-leavebalance">
                <div className="l-page-title">
                    <div className="l-title-left">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-title-right">
                        <div className="l-toggle">
                            <div>
                                <div className="l-icon"></div>
                            </div>
                            <div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3 l-listinner-profile">
                        {
                            props && props.view !== 'TALENT' ? (
                                <div className="l-listinner-employee">
                                    <div className="l-listinner-user">
                                        <div className="l-thumb"></div>
                                        <div className="l-listinner-name">
                                            <div className="l-text-h">
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '40px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <span style={{ width: '80px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="l-shine-container">
                                        <div className="l-shine"></div>
                                        <div className="l-listinner-list">
                                            <div className="l-text-h">
                                                <span style={{ width: '80px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div className="l-icon"></div>
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div className="l-icon"></div>
                                                <span style={{ width: '60px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div className="l-icon"></div>
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                            </div>
                                        </div>
                                        <div className="l-reportsto">
                                            <div className="l-text-h">
                                                <span style={{ width: '80px' }}></span>
                                            </div>
                                            <div className="l-reportsto-user">
                                                <div className="l-thumb"></div>
                                                <div className="l-reportsto-name">
                                                    <div className="l-text">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '50px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '40px' }}></span>
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '20px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="col-12 col-lg-9 l-listinner-main">
                        <div className="l-card l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-belt">
                                <div className="l-belt-left">
                                    <div className="l-belt-title">
                                        <div className="l-belt-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '90px' }}></span>
                                        </div>
                                        <div className="l-belt-info"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-climax">
                                <div className="l-climax-title">
                                    <div className="l-text-h">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-card l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-belt">
                                <div className="l-belt-left">
                                    <div className="l-belt-title">
                                        <div className="l-belt-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '90px' }}></span>
                                        </div>
                                        <div className="l-belt-info"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-item-list">
                            <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>    
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '80px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '80px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (LeaveBalanceInnerLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}


export const LeaveBalanceListLoader = (props) => {
    try {
        return (
            <div className="l-leavebalance-list">
                <div className="row">
                    <div className="col-12 l-listinner-main">
                        <div className="l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-item-list">
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                                <div className="l-item">
                                    <div className="l-text" style={{width: '100%'}}>                                        
                                        <div className="l-icon"></div>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text" style={{width: '100%', maxWidth: '200px', justifyContent: 'flex-end'}}>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '10px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (LeaveBalanceListLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}
/**
* AttendanceLoader
*/
export const AttendanceLoader = (props) => {
    try {
        let totalItem = 8;
        let rowItem = [];
        for (let item = 0; item < totalItem; item++) {
            rowItem.push(<div className="l-lists-item" key={item}>
                <div className="l-lists-id">
                    <div className="l-text">
                        <span style={{ width: '60px' }}></span>
                    </div>
                </div>
                {
                    props && props.view !== 'TALENT' ? (
                        <div className="l-lists-talent">
                            <div className="l-thumb"></div>
                            <div className="l-lists-name">
                                <div className="l-text-h">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '70px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '70px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '100px' }}></span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '30px' }}></span>
                    </div>
                </div>
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '30px' }}></span>
                    </div>
                </div>
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>
            </div>);
        }
        return (
            <div className="l-lists l-attendance">
                <div className="l-lists-main">
                    <div className="l-page-title">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-card l-shine-container">
                        <div className="l-shine"></div>
                        <div className="l-belt">
                            <div className="l-belt-left">
                                <div className="l-belt-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '90px' }}></span>
                                    <span style={{ width: '25px' }}></span>
                                </div>
                            </div>
                            <div className="l-belt-right">
                                <div className="l-belt-button">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '45px' }}></span>
                                </div>
                                <div className="l-belt-action">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className="l-search">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '10px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-list">
                            {rowItem}
                        </div>
                    </div>
                </div>
                <div className="l-lists-side l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-side-status">
                        <div className="l-text">
                            <span style={{ width: '15px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                        </div>
                        <div className="l-status-item">
                            <div className="l-badge"></div>
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-side-sort">
                        <div className="l-side-fields">
                            <div className="l-text-h">
                                <span style={{ width: '15px' }}></span>
                                <span style={{ width: '35px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '35px' }}></span>
                            </div>
                            <div className="l-field">
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                        <div className="l-side-fields">
                            <div className="l-text-h">
                                <span style={{ width: '35px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '75px' }}></span>
                            </div>
                            <div className="l-field">
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                        <div className="l-side-toggle">
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                            </div>
                        </div>
                        <div className="l-side-button">
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (AttendanceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* AttendanceListLoader
*/
export const AttendanceListLoader = (props) => {
    try {
        let totalItem = 8;
        let rowItem = [];
        for (let item = 0; item < totalItem; item++) {
            rowItem.push(<div className="l-lists-item" key={item}>
                <div className="l-lists-id">
                    <div className="l-text">
                        <span style={{ width: '60px' }}></span>
                    </div>
                </div>
                {
                    props && props.view !== 'TALENT' ? (
                        <div className="l-lists-talent">
                            <div className="l-thumb"></div>
                            <div className="l-lists-name">
                                <div className="l-text-h">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '70px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '70px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '100px' }}></span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '30px' }}></span>
                    </div>
                </div>
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '30px' }}></span>
                    </div>
                </div>
                <div className="l-lists-text">
                    <div className="l-text">
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>
            </div>);
        }
        return (
            <div className="l-attendance">
                <div className="l-attendance-main">
                    <div className="l-page-title">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-card l-shine-container">
                        <div className="l-shine"></div>
                        <div className="l-belt">
                            <div className="l-belt-left">
                                <div className="l-belt-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '90px' }}></span>
                                    <span style={{ width: '25px' }}></span>
                                </div>
                            </div>
                            <div className="l-belt-right">
                                <div className="l-belt-button">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '45px' }}></span>
                                </div>
                                <div className="l-belt-action">
                                    <div className="l-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div className="l-search">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '10px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-list">
                            {rowItem}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (AttendanceListLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* AttendanceItemLoader
*/
export const AttendanceItemLoader = (props) => {
    try {
        let totalItem = 8;
        let rowItem = [];
        for (let item = 0; item < totalItem; item++) {
            rowItem.push(<div className="l-lists-item">
                {
                    props && props.view !== 'TALENT' ? (
                        <div className="l-lists-talent">
                            <div className="l-thumb"></div>
                            <div className="l-lists-name">
                                <div className="l-text-h">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '70px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '70px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '100px' }}></span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className="l-lists-check">
                    <div className="l-icon"></div>
                    <div className="l-lists-text">
                        <div className="l-text-h">
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '70px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '20px' }}></span>
                            <span style={{ width: '70px' }}></span>
                            <span style={{ width: '50px' }}></span>
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '70px' }}></span>
                            <span style={{ width: '50px' }}></span>
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-lists-badge">
                    <div className="l-icon"></div>
                </div>
            </div>);
        }
        return (
            <div className="l-lists-list l-shine-container">
                <div className="l-shine"></div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
                <div className="l-lists-item">
                    <div className="l-lists-check">
                        <div className="l-icon"></div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-badge">
                        <div className="l-icon"></div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* TimeRecorderLoader
*/
export const TimeRecorderLoader = () => {
    try {
        return (
            <div className="l-timerecorder l-shine-container">
                <div className="l-shine"></div>
                <div className="l-timerecorder-content">
                    <div>
                        <div className="l-timerecorder-title">
                            <div className="l-title-left">
                                <div className="l-text">
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '35px' }}></span>
                                </div>
                                <div className="l-info"></div>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-timerecorder-shift">
                            <div className="row">
                                <div className="col-6">
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '35px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="l-timerecorder-clockin">
                                        <div className="l-button">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '35px' }}></span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '65px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="l-text">
                                        <span style={{ width: '50px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="l-text">
                                        <span style={{ width: '105px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="l-timerecorder-title">
                            <div className="l-title-left">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '35px' }}></span>
                                </div>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '110px' }}></span>
                                <span style={{ width: '10px' }}></span>
                                <span style={{ width: '110px' }}></span>
                            </div>
                        </div>
                        <div className="l-timerecorder-details">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                            <div className="l-text">
                                <div className="l-icon"></div>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <div className="l-icon"></div>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-text">
                                <div className="l-icon"></div>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '45px' }}></span>
                            </div>
                            <div className="l-text l-text-link">
                                <span style={{ width: '25px' }}></span>
                                <span style={{ width: '45px' }}></span>
                                {SVG_ARROWRIGHT_GREEN}
                            </div>
                        </div><div className="l-timerecorder-details l-timerecorder-requests">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '25px' }}></span>
                                <span style={{ width: '45px' }}></span>
                                {SVG_ARROWRIGHT_GREEN}
                            </div>
                        </div>
                        <div className="l-timerecorder-details l-timerecorder-holiday">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* TeamListLoader
*/
export const TeamListLoader = (props) => {
    try {
        return (
            <div className="l-teamlist-modal l-shine-container">
                <div className="l-shine"></div>
                <div className="l-teamlist-modal-profile">
                    <div className="l-teamlist-modal-belt">
                        <div className="l-teamlist-modal-belt-left">
                            <div className="l-text">
                                <div className="l-icon"></div>
                                <span style={{ width: '60px' }}></span>
                                <div className="l-info"></div>
                            </div>
                        </div>
                        <div className="l-icon"></div>
                    </div>
                    <div className="l-teamlist-modal-user">
                        <div className="l-thumb"></div>
                        <div className="l-teamlist-modal-name">
                            <div className="l-text-h">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '20px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-teamlist-modal-content">
                    <div className="l-tabs">
                        <div className="l-text is-active">
                            <span style={{ width: '95px' }}></span>
                        </div>
                    </div>
                    {
                        props && props.view !== 'TALENT' ? (
                            <div className="l-viewshift-calendar l-shine-container">
                                <div className="l-shine"></div>
                                <div className="l-text-h">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                                <div className="l-viewshift-dates">
                                    <div className="l-viewshift-row l-viewshift-heading">
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                        <div className="l-viewshift-col l-text">
                                            <span style={{ width: '30px' }}></span>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-row">
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-row">
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-row">
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-row">
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-row">
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-row">
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="l-viewshift-col">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                            <div className="l-viewshift-day">
                                                <div className="l-icon"></div>
                                                <div className="l-text">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    <div className="l-teamlist-modal-details">
                        <div className="l-details-item">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '90px' }}></span>
                            </div>
                        </div>
                        <div className="l-details-item">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '110px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (TeamListLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const TeamListContentLoader = (props) => {
    try {
        return (
            <div className="l-teamlist-content l-shine-container">
                <div className="l-shine"></div>
                <div className="l-viewshift-calendar l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-text-h">
                        <span style={{ width: '50px' }}></span>
                        <span style={{ width: '40px' }}></span>
                    </div>
                    <div className="l-viewshift-dates">
                        <div className="l-viewshift-row l-viewshift-heading">
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-viewshift-col l-text">
                                <span style={{ width: '30px' }}></span>
                            </div>
                        </div>
                        <div className="l-viewshift-row">
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-row">
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-row">
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-row">
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-row">
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-row">
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-viewshift-col">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '50px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                                <div className="l-viewshift-day">
                                    <div className="l-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-teamlist-modal-details">
                    <div className="l-details-item l-header">                            
                        <div className="l-icon"></div>  
                        <div className="l-text-h">                          
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                    </div>
                    <div className="l-details-item">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '30px' }}></span>                            
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span style={{ width: '50px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-teamlist-modal-details">
                    <div className="l-details-item l-header">                            
                        <div className="l-icon"></div>
                        <div className="l-text-h">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '65px' }}></span>
                        </div>
                    </div>
                    <div className="l-details-item">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '30px' }}></span>                            
                            <span style={{ width: '50px' }}></span>                            
                            <span style={{ width: '70px' }}></span>   
                        </div>
                    </div>
                    <div className="l-details-item">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '65px' }}></span>
                        </div>
                    </div>
                    <div className="l-details-item">
                        <div className="l-text">
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '65px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-teamlist-modal-details">
                    <div className="l-details-item l-header">
                        <div className="l-icon"></div>
                        <div className="l-text-h">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '65px' }}></span>
                        </div>
                    </div>
                    <div className="l-details-item">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '30px' }}></span>                            
                            <span style={{ width: '50px' }}></span>                            
                            <span style={{ width: '70px' }}></span>   
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (TeamListContentLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* ViewShiftLoader
*/
export const ViewShiftLoader = () => {
    try {
        return (
            <div className="l-viewshift">
                <div className="l-page-title">
                    <div className="l-title-left">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-title-right">
                        <div className="l-belt-pivot">
                            <div className="l-text"><span style={{ width: '68px' }}></span></div>
                            {SVG_ARROW_DOWN}
                        </div>
                        <div className="l-action">
                            {SVG_ARROW_LEFT}
                        </div>
                        <div className="l-action">
                            {SVG_ARROW_RIGHT}
                        </div>
                        <div className="l-toggle">
                            <div>
                                <div className="l-icon"></div>
                            </div>
                            <div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-viewshift-main">
                    <div className="l-card l-shine-container">
                        <div className="l-shine"></div>
                        <div className="l-belt">
                            <div className="l-belt-left">
                                <div className="l-belt-title">
                                    <div className="l-belt-icon"></div>
                                    <div className="l-text">
                                        <span style={{ width: '75px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>
                                </div>
                                <div className="l-belt-button">
                                    <div className="l-icon"></div>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '50px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-calendar">
                            <div className="l-text-h">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                            <div className="l-viewshift-dates">
                                <div className="l-viewshift-row l-viewshift-heading">
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-viewshift-col l-text">
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="l-viewshift-row">
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-viewshift-row">
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-viewshift-row">
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-viewshift-row">
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-viewshift-row">
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-viewshift-row">
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-viewshift-col">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-viewshift-day">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-viewshift-side">
                        <div className="l-card">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* CalendarLoader
*/
export const CalendarLoader = () => {
    try {
        return (
            <div className="l-viewshift-calendar l-shine-container">
                <div className="l-shine"></div>
                <div className="l-text-h">
                    <span style={{ width: '50px' }}></span>
                    <span style={{ width: '40px' }}></span>
                </div>
                <div className="l-viewshift-dates">
                    <div className="l-viewshift-row l-viewshift-heading">
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                        <div className="l-viewshift-col l-text">
                            <span style={{ width: '30px' }}></span>
                        </div>
                    </div>
                    <div className="l-viewshift-row">
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-viewshift-row">
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-viewshift-row">
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-viewshift-row">
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-viewshift-row">
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-viewshift-row">
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="l-viewshift-col">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                            <div className="l-viewshift-day">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* QuickServiceLoader
*/
export const QuickServiceLoader = () => {
    try {
        return (
            <div className="l-quick l-quick-side l-shine-container">
                <div className="l-shine"></div>
                <div className="l-quick-title">
                    <div className="l-text">
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <span></span>
                </div>
                <div className="l-quick-item">
                    <span></span>
                    <div className="l-text">
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '40px' }}></span>
                    </div>
                </div>
                <div className="l-quick-item">
                    <span></span>
                    <div className="l-text">
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '80px' }}></span>
                    </div>
                </div>
                <div className="l-quick-item">
                    <span></span>
                    <div className="l-text">
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '20px' }}></span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* EventsSideLoader
*/
export const EventsSideLoader = () => {
    try {
        return (
            <div className="l-side-events l-shine-container">
                <div className="l-shine"></div>
                <div className="l-events-title">
                    <div className="l-text-h">
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-text-p">
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '40px' }}></span>
                    </div>
                </div>
                <div className="l-events-item">
                    <div className="l-text-p">
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '20px' }}></span>
                    </div>
                    <div className="l-events-thumbs">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className="l-events-item">
                    <div className="l-text-p">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-events-thumbs">
                        <span></span><span></span>
                    </div>
                </div>
                <div className="l-events-link">
                    <div className="l-text">
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        {SVG_ARROWRIGHT_GREEN}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* EventsSideItemLoader
*/
export const EventsSideItemLoader = () => {
    try {
        return (
            <div className="l-side-events l-side-events-single l-shine-container">
                <div className="l-shine"></div>
                <div className="l-events-item">
                    <div className="l-text-p">
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '20px' }}></span>
                    </div>
                    <div className="l-events-thumbs">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* StatsItemLoader
*/
export const StatsItemLoader = () => {
    try {
        return (
            <div className="l-stats-item l-shine-container">
                <div className="l-shine"></div>
                <div className="l-stats-text">
                    <div className="l-text">
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '20px' }}></span>
                    </div>
                    <div className="l-text-h">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '40px' }}></span>
                    </div>
                    <div className="l-stats-link">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            {SVG_ARROWRIGHT_GREEN}
                        </div>
                    </div>
                </div>
                <div className="l-stats-chart">
                    <div><span></span></div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* ApplicationsLoader
*/
export const ApplicationsLoader = () => {
    try {
        return (
            <div className="l-applications l-shine-container">
                <div className="l-applications-list">
                    <div className="l-applications-col">
                        <div className="l-applications-item l-shine-container">
                            <div className="l-shine"></div>
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-applications-col">
                        <div className="l-applications-item l-shine-container">
                            <div className="l-shine"></div>
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-applications-col">
                        <div className="l-applications-item l-shine-container">
                            <div className="l-shine"></div>
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-applications-col">
                        <div className="l-applications-item l-shine-container">
                            <div className="l-shine"></div>
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-applications-col">
                        <div className="l-applications-item l-shine-container">
                            <div className="l-shine"></div>
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-applications-col">
                        <div className="l-applications-item l-shine-container">
                            <div className="l-shine"></div>
                            <span></span>
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (QuickServiceLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* SupportTeamModalLoader
* Loader for support team when modal is show.
*/
export const SupportTeamModalLoader = () => {
    try {
        return (
            <div className="card-content content-fluid group-cards">
                <div className="profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '80px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '100px' }}></span>
                                <span style={{ width: '40px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (SupportTeamModalLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* NotificationsLoader
* Loader for support team when modal is show.
*/
export const NotificationsLoader = () => {
    try {
        return (
            <div className="l-notif l-shine-container">
                <div className="l-shine"></div>
                <div className="l-notif-items">
                    <div className="l-notif-img"></div>
                    <div className="l-notif-text">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-text-h">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-notif-items">
                    <div className="l-notif-img"></div>
                    <div className="l-notif-text">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-text-h">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-notif-items">
                    <div className="l-notif-img"></div>
                    <div className="l-notif-text">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-text-h">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-notif-items">
                    <div className="l-notif-img"></div>
                    <div className="l-notif-text">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-text-h">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-notif-items">
                    <div className="l-notif-img"></div>
                    <div className="l-notif-text">
                        <div className="l-text">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-text-h">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '80px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '80px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (NotificationsLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const FileRequestLoader = () => {
    try {
        return (<div className="">
            <div className="l-belt">
                <div className="l-1stcol">
                    <div className="l-text">
                        <span style={{ width: '30px', height: '30px', margin: '0 10px 0 0' }}></span>
                        <span style={{ width: '100px', margin: '15px 10px 0 0' }}></span>
                        <span style={{ width: '30px', height: '30px' }}></span>
                    </div>
                </div>
            </div>
            <div className="row" style={{ padding: '15px', marginTop: '30px' }}>
                <div className="col-xs-12 col-lg-8">
                    <div className="row" >
                        <div className="col-xs-12 col-lg-6">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-xs-12 col-lg-3">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-xs-12 col-lg-6">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-xs-12 col-lg-6">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '50px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-xs-12 col-lg-12">
                            <div className="l-text">
                                <span style={{ width: '100%', height: '120px' }}></span>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="col-xs-12 col-lg-4">
                    <div className="l-text">
                        <span style={{ width: '100%', height: '50px' }}></span>
                    </div>

                    <div className="l-text">
                        <span style={{ width: '30px', height: '30px', margin: '0 10px 0 0' }}></span>
                        <span style={{ width: '100px', margin: '15px 10px 0 0' }}></span>
                    </div>
                    <br />
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                </div>
            </div>
        </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (FileRequestLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* ListInnerLoader
*/
export const ListInnerLoader = () => {
    try {
        return (
            <div className="l-listinner">
                <div className="l-page-title">
                    <div className="l-title-left">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-title-right">
                        <div className="l-toggle">
                            <div>
                                <div className="l-icon"></div>
                            </div>
                            <div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3 l-listinner-profile">
                        <div className="l-listinner-employee">
                            <div className="l-listinner-user">
                                <div className="l-thumb"></div>
                                <div className="l-listinner-name">
                                    <div className="l-text-h">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-listinner-list">
                                <div className="l-text-h">
                                    <span style={{ width: '80px' }}></span>
                                </div>
                                <div className="l-text">
                                    <div className="l-icon"></div>
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                </div>
                                <div className="l-text">
                                    <div className="l-icon"></div>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                                <div className="l-text">
                                    <div className="l-icon"></div>
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '60px' }}></span>
                                </div>
                            </div>
                            <div className="l-reportsto">
                                <div className="l-text-h">
                                    <span style={{ width: '80px' }}></span>
                                </div>
                                <div className="l-reportsto-user">
                                    <div className="l-thumb"></div>
                                    <div className="l-reportsto-name">
                                        <div className="l-text">
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '50px' }}></span>
                                        </div>
                                        <div className="l-text">
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 l-listinner-main">
                        <div className="l-card l-shine-container">
                            {/* <div className="l-shine"></div> */}
                            <div className="l-belt">
                                <div className="l-belt-left">
                                    <div className="l-belt-title">
                                        <div className="l-belt-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '90px' }}></span>
                                        </div>
                                        <div className="l-belt-info"></div>
                                    </div>
                                    <div className="l-belt-button">
                                        <div className="l-icon"></div>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-climax">
                                <div className="l-climax-title">
                                    <div className="l-text-h">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                </div>
                                <div className="l-badge"></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-7 col-lg-9">
                                    <div className="l-listinner-details">
                                        <div className="l-text l-title">
                                            <div className="l-icon"></div>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                        </div>
                                        <div className="l-text-h">
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '70px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                        </div>
                                        <div className="l-text">
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 col-lg-3 l-listinner-side">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (ListInnerLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}


/**
* ListInnerRequestLoader
*/
export const ListInnerRequestLoader = (props) => {
    try {
        return (
            <div className="l-listinner l-inner-request">
                <div className="l-page-title">
                    <div className="l-title-left">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                    <div className="l-title-right">
                        <div className="l-toggle">
                            <div>
                                <div className="l-icon"></div>
                            </div>
                            <div>
                                <div className="l-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3 l-listinner-profile">
                        {
                            props && props.view !== 'TALENT' ? (
                                <div className="l-listinner-employee">
                                    <div className="l-listinner-user">
                                        <div className="l-thumb"></div>
                                        <div className="l-listinner-name">
                                            <div className="l-text-h">
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '40px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <span style={{ width: '80px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="l-shine-container">
                                        <div className="l-shine"></div>
                                        <div className="l-listinner-list">
                                            <div className="l-text-h">
                                                <span style={{ width: '80px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div className="l-icon"></div>
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div className="l-icon"></div>
                                                <span style={{ width: '60px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div className="l-icon"></div>
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                            </div>
                                        </div>
                                        <div className="l-reportsto">
                                            <div className="l-text-h">
                                                <span style={{ width: '80px' }}></span>
                                            </div>
                                            <div className="l-reportsto-user">
                                                <div className="l-thumb"></div>
                                                <div className="l-reportsto-name">
                                                    <div className="l-text">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '50px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '40px' }}></span>
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '20px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="col-12 col-lg-9 l-listinner-main">
                        <div className="l-card l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-belt">
                                <div className="l-belt-left">
                                    <div className="l-belt-title">
                                        <div className="l-belt-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '90px' }}></span>
                                        </div>
                                        <div className="l-belt-info"></div>
                                    </div>
                                    <div className="l-belt-button">
                                        <div className="l-icon"></div>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-climax">
                                <div className="l-climax-title">
                                    <div className="l-text-h">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                    </div>
                                </div>
                                <div className="l-badge"></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xl-9">
                                    <div className="l-listinner-details">
                                        <div className="l-text l-title">
                                            <div className="l-icon"></div>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                        </div>
                                        <div className="l-text-h">
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '70px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                        </div>
                                        <div className="l-text">
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-3 l-listinner-side">
                                    <div className="l-listinner-list">
                                        <div className="l-text-h">
                                            <div className="l-icon"></div>
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '80px' }}></span>
                                        </div>
                                        <div className="l-text">
                                            <span style={{ width: '10px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                        </div>
                                        <div className="l-text">
                                            <span style={{ width: '10px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                        </div>
                                        <div className="l-text">
                                            <span style={{ width: '10px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (ListInnerRequestLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* NewsFeedLoader
*/
export const NewsFeedLoader = () => {
    try {
        return (
            <div className="l-newsfeed">
                <div className="l-page-title">
                    <div className="l-title-left">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                </div>
                <div className="l-newsfeed-main">
                    <div className="l-newsfeed-content">
                        <div className="l-card l-shine-container">
                            <div className="l-shine"></div>
                            <div className="l-belt">
                                <div className="l-belt-left">
                                    <div className="l-belt-title">
                                        <div className="l-belt-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '70px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                        </div>
                                    </div>
                                    <div className="l-info"></div>
                                </div>
                                <div className="l-belt-right">
                                    <div className="l-belt-pivot">
                                        <div className="l-text"><span style={{ width: '68px' }}></span></div>
                                    </div>
                                    <div className="l-action">
                                        <div className="l-icon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-grid">
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-grid-col">
                                    <div className="l-grid-item">
                                        <div className="l-grid-image"></div>
                                        <div>
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '100px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '50px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-newsfeed-side">
                        <div className="l-card">
                            <div className="l-text-h">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                            <div className="l-newsfeed-options">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                            </div>
                            <div className="l-newsfeed-options">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '40px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                </div>
                            </div>
                            <div className="l-newsfeed-options">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '10px' }}></span>
                                </div>
                            </div>
                            <div className="l-newsfeed-options">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                    <span style={{ width: '40px' }}></span>
                                </div>
                            </div>
                            <div className="l-newsfeed-options">
                                <div className="l-icon"></div>
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '10px' }}></span>
                                    <span style={{ width: '20px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (NewsFeedLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}


export const NewsFeedInnerLoader = () => {
    try {
        return (            
            <div className="l-newsfeed-inner">
                <div className="l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-grid">
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>  
                                    {/* 
                                    <div className="l-text">
                                        <span style={{ width: '50px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                    </div>                                      
                                    <div className="l-grid-info">
                                        <div className="l-icon"></div>
                                        <div className="l-text">
                                            <span style={{ width: '50px' }}></span>
                                            <span style={{ width: '30px' }}></span>
                                            <span style={{ width: '40px' }}></span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>                                        
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>                                        
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div> 
                                </div>
                            </div>
                        </div>    
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>                                        
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="l-grid-col">
                            <div className="l-grid-item">
                                <div className="l-grid-card">
                                    <div className="l-text-h">
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '40px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div> 
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (NewsFeedInnerLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}


export const FormModalLoader = () => {
    try {
        return (
            <div className="l-formmodal">
                <div className="l-col">
                    <div className="l-text-h">
                        <span style={{ width: '15px' }}></span>
                        <span style={{ width: '35px' }}></span>
                    </div>
                    <div className="l-row">
                        <div className="l-field">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-icon"></div>
                        </div>
                        <div className="l-field">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-icon"></div>
                        </div>
                    </div>
                </div>
                <div className="l-col">
                    <div className="l-text-h">
                        <span style={{ width: '15px' }}></span>
                        <span style={{ width: '35px' }}></span>
                    </div>
                    <div className="l-row">
                        <div className="l-field">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-icon"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="l-icon"></div>
                    <div className="l-icon"></div> */}
                <div className="l-button" style={{ width: '150px' }}>
                    <div className="l-icon"></div>
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '20px' }}></span>
                    </div>
                </div>
                <div className="l-button" style={{ width: '110px' }}>
                    <div className="l-text">
                        <span style={{ width: '40px' }}></span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (ModalLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* InfoLoader
*/
export const InfoLoader = '<div className="l-info-content l-shine-container">  <div className="l-shine"></div><div className="l-stats-text"><div className="l-text"><span className="w-40"></span><span className="w-20"></span></div><div className="l-text-h"><span className="w-30"></span><span className="w-60"></span><span className="w-40"></span></div></div></div >';

/**
* ListClimaxLoader
*/
export const ListClimaxLoader = () => {
    try {
        return (
            <div className="col-12 l-request">
                <div className="l-climax">
                    <div className="l-climax-title">
                        <div className="l-text-h">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '70px' }}></span>
                        </div>
                        <div className="l-text l-shine-container">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '20px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                        <div className="l-text l-shine-container">
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                    </div>
                    <div className="l-badge"></div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (ListClimaxLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const ListDetailsLoader = () => {
    try {
        return (
            <div className="col-12 col-xl-9 l-request">
                <div className="l-listinner-details">
                    <div className="l-text-h l-title">
                        <div className="l-icon"></div>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-text l-shine-container">
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '40px' }}></span>
                    </div>
                    <div className="l-text l-shine-container">
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '40px' }}></span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (ListDetailsLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const ListTalentsLoader = () => {
    try {
        return (
            <div className="col-12 col-xl-9 l-request">
                <div className="l-talents">
                    <div className="l-text-h l-title">
                        <div className="l-icon"></div>
                        <span style={{ width: '50px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-text l-talentsthumbnail">
                        <span style={{ width: '40px', height: '40px' }}></span>
                        <span style={{ width: '40px', height: '40px' }}></span>
                        <span style={{ width: '40px', height: '40px' }}></span>
                        <span style={{ width: '40px', height: '40px' }}></span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (ListTalentsLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const PreviousRequestLoader = () => {
    try {
        return (
            <div className="l-request">
                <div className="l-text-h l-title">
                    <div className="l-icon"></div>
                    <span style={{ width: '20px' }}></span>
                    <span style={{ width: '60px' }}></span>
                    <span style={{ width: '80px' }}></span>
                </div>
                <div className="l-text l-listitem">
                    <span style={{ width: '10px' }}></span>
                    <span style={{ width: '40px' }}></span>
                    <span style={{ width: '60px' }}></span>
                    <span style={{ width: '20px' }}></span>
                </div>
                <div className="l-text l-listitem">
                    <span style={{ width: '10px' }}></span>
                    <span style={{ width: '60px' }}></span>
                </div>
                <div className="l-text l-listitem">
                    <span style={{ width: '10px' }}></span>
                    <span style={{ width: '40px' }}></span>
                    <span style={{ width: '60px' }}></span>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (PreviousRequestLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const RelatedActivitesLoader = () => {
    try {
        return (
            <div className="l-request">
                <div className="l-text-h l-title">
                    <div className="l-icon"></div>
                    <span style={{ width: '60px' }}></span>
                    <span style={{ width: '80px' }}></span>
                </div>
                <div className="row l-activities">
                    <div className="l-badge"></div>
                    <div>
                        <div className="l-text">
                            <span style={{ width: '50px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                        <div className="l-text-h">
                            <span style={{ width: '60px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '20px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (RelatedActivitesLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const SideProfileLoader = () => {
    try {
        return (
            <div className="col-12 l-request">
                <div className="l-sideprofile">
                    <div className="row l-sideprofilename l-shine-container">
                        <div className="l-icon"></div>
                        <div>
                            <div className="l-text-h">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row l-sideprofiledetails l-shine-container">
                        <div className="l-text-h">
                            <span style={{ width: '60px' }}></span>
                        </div>
                        <div className="l-detailitem">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                        <div className="l-detailitem">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                        <div className="l-detailitem">
                            <div className="l-icon"></div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row l-sideprofilesupervisor l-shine-container">
                        <div className="l-icon"></div>
                        <div>
                            <div className="l-text-h">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (SideProfileLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}
/**
* FileToilLoader
*/
export const FileToilLoader = (props) => {
    try {
        return (
            <div className="l-toil l-shine-container">
                <div className="l-shine"></div>
                <div className="l-lists-list">
                    <div className="l-lists-item l-list-item-h">
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '50px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-text">
                            <div className="l-text-h">
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-item">
                        <div className="l-lists-text l-text-icon">
                            <div className="l-icon"></div>
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-text">
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '60px' }}></span>
                                <span style={{ width: '60px' }}></span>
                            </div>
                            <div className="l-text">
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '100px' }}></span>
                            </div>
                        </div>
                        <div className="l-lists-text l-text-input">
                            <div className="l-input">
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                </div>
                            </div>
                            <span>:</span>
                            <div className="l-input">
                                <div className="l-text">
                                    <span style={{ width: '20px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-lists-item">
                        <div className="l-textarea">
                            <div className="l-text-h">
                                <span style={{ width: '30px' }}></span>
                                <span style={{ width: '70px' }}></span>
                            </div>
                            <div className="l-input">
                                <div className="l-text">
                                    <span style={{ width: '30px' }}></span>
                                    <span style={{ width: '70px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-button">
                    <div className="l-icon"></div>
                    <div className="l-text">
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '20px' }}></span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (FileToilLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const TalentModalLoader = () => {
    try {
        return (
            <div className="l-talentmodal l-card l-shine-container">
                <div className="l-shine"></div>
                <div className="l-grid">
                    <div className="l-grid-col">
                        <div className="l-grid-item">
                            <div className="l-lists-talent">
                                <div className="l-thumb"></div>
                                <div className="l-lists-name">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-grid-col">
                        <div className="l-grid-item">
                            <div className="l-lists-talent">
                                <div className="l-thumb"></div>
                                <div className="l-lists-name">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-grid-col">
                        <div className="l-grid-item">
                            <div className="l-lists-talent">
                                <div className="l-thumb"></div>
                                <div className="l-lists-name">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-grid-col">
                        <div className="l-grid-item">
                            <div className="l-lists-talent">
                                <div className="l-thumb"></div>
                                <div className="l-lists-name">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-grid-col">
                        <div className="l-grid-item">
                            <div className="l-lists-talent">
                                <div className="l-thumb"></div>
                                <div className="l-lists-name">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '70px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '60px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '20px' }}></span>
                                        <span style={{ width: '100px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (TalentModalLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}


export const AccountProfileLoader = () => {
    try {
        return (
            <div className="l-profile-main">
                <div className="l-profile-banner"></div>
                <div className="l-profile">
                    <div className="row">
                        <div className="col-12">
                            <div className="l-card l-shine-container">
                                <div className="l-shine"></div>
                                <div className="l-profile-header">
                                    <div className="l-thumb"></div>
                                    <div className="l-profile-name">
                                        <div>
                                            <div className="l-text-h">
                                                <span style={{ width: '150px' }}></span>
                                                <span style={{ width: '170px' }}></span>
                                                <span style={{ width: '140px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div>
                                                    <div className="l-icon"></div>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div>
                                                    <div className="l-icon"></div>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div>
                                                    <div className="l-icon"></div>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-profile-content l-shine-container">
                                <div className="l-belt">
                                    <div className="l-belt-left">
                                        <div className="l-text">
                                            <div className="l-belt-icon"></div>
                                            <span style={{ width: '70px' }}></span>
                                            <div className="l-belt-info"></div>
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '20px' }}></span>
                                            <span style={{ width: '80px' }}></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-9">
                                        <div className="row">
                                            <div className="col-12 l-title">
                                                <div className="l-text-h">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '50px' }}></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <hr className="hr-divider" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 l-title">
                                                <div className="l-text-h">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '50px' }}></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <hr className="hr-divider" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 l-title">
                                                <div className="l-text-h">
                                                    <span style={{ width: '70px' }}></span>
                                                    <span style={{ width: '50px' }}></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="l-text-h">
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '80px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '50px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                                <div className="l-text">
                                                    <span style={{ width: '60px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '30px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="l-side-card">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (AccountProfileLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const TalentProfileLoader = () => {
    try {
        return (
            <div className="l-talent-profile">
                <div className="l-page-title">
                    <div className="l-title-left">
                        <div className="l-icon"></div>
                        <div className="l-text">
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                        <div className="l-info"></div>
                    </div>
                </div>
                <div className="l-profile">
                    <div className="row">
                        <div className="col-12">
                            <div className="l-card l-shine-container">
                                <div className="l-shine"></div>
                                <div className="l-profile-header">
                                    <div className="l-thumb"></div>
                                    <div className="l-profile-name">
                                        <div>
                                            <div className="l-text-h">
                                                <span style={{ width: '110px' }}></span>
                                                <span style={{ width: '150px' }}></span>
                                                <span style={{ width: '120px' }}></span>
                                            </div>
                                            <div className="l-text">
                                                <div>
                                                    <div className="l-icon"></div>
                                                    <span style={{ width: '30px' }}></span>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div>
                                                    <div className="l-icon"></div>
                                                    <span style={{ width: '60px' }}></span>
                                                </div>
                                                <div>
                                                    <div className="l-icon"></div>
                                                    <span style={{ width: '70px' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-wrapper">
                                <div className="col-lg-9 col-xs-12 l-profile-content l-shine-container">
                                    <div className="l-shine"></div>
                                    <div className="l-belt">
                                        <div className="l-belt-left">
                                            <div className="l-text">
                                                <div className="l-belt-icon"></div>
                                                <span style={{ width: '70px' }}></span>
                                                <div className="l-belt-info"></div>
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '80px' }}></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-12 l-title">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '70px' }}></span>
                                                        <span style={{ width: '50px' }}></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <hr className="hr-divider" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 l-title">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '70px' }}></span>
                                                        <span style={{ width: '50px' }}></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-3">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <hr className="hr-divider" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 l-title">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '70px' }}></span>
                                                        <span style={{ width: '50px' }}></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="l-text-h">
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '80px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '50px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                    <div className="l-text">
                                                        <span style={{ width: '60px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                        <span style={{ width: '30px' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="l-side-card">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xs-12 l-profile-side l-shine-container">
                                    <div className="l-card">
                                        <div className="l-shine"></div>
                                        <div className="l-text-h">
                                            <span style={{ width: '40px' }}></span>
                                            <span style={{ width: '60px' }}></span>
                                        </div>
                                        <div className="l-profile-options">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '60px' }}></span>
                                            </div>
                                        </div>
                                        <div className="l-profile-options">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '40px' }}></span>
                                                <span style={{ width: '20px' }}></span>
                                                <span style={{ width: '40px' }}></span>
                                            </div>
                                        </div>
                                        <div className="l-profile-options">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '50px' }}></span>
                                                <span style={{ width: '70px' }}></span>
                                            </div>
                                        </div>
                                        <div className="l-profile-options">
                                            <div className="l-icon"></div>
                                            <div className="l-text">
                                                <span style={{ width: '30px' }}></span>
                                                <span style={{ width: '40px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (TalentProfileLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const BasicInfoLoader = () => {
    try {
        return (
            <div className="l-card l-basicprofile">
                <div className="l-profile-content l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-belt">
                        <div className="l-belt-left">
                            <div className="l-text">
                                <div className="l-belt-icon"></div>
                                <span style={{ width: '70px' }}></span>
                                <div className="l-belt-info"></div>
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '20px' }}></span>
                                <span style={{ width: '80px' }}></span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-12 l-title">
                                    <div className="l-text-h">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <hr className="hr-divider" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 l-title">
                                    <div className="l-text-h">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <hr className="hr-divider" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 l-title">
                                    <div className="l-text-h">
                                        <span style={{ width: '70px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="l-text-h">
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '80px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '50px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                    <div className="l-text">
                                        <span style={{ width: '60px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                        <span style={{ width: '30px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="l-side-card">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (BasicInfoLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const CalendarAccordionLoader = () => {
    try {
        return (
            <div className="l-calendaraccordion">
                <div className="l-lists-text">
                    <div className="l-text-h">

                        <div className="l-icon"></div>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '70px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '60px' }}></span>
                        <span style={{ width: '60px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '100px' }}></span>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Invalid return. Please check helpers (CalendarAccordionLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const AnnouncementModalLoader = () => {
    try {
        return (
            <div className="l-announcementmodal">
                <div className="l-header">
                    <div className="l-text-h l-title">
                        <span style={{ width: '100px', height: '30px' }}></span>
                        <span style={{ width: '80px', height: '30px' }}></span>
                        <span style={{ width: '120px', height: '30px' }}></span>
                    </div>
                    <div className="l-text">
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '40px' }}></span>
                        <span style={{ width: '30px' }}></span>
                        <span style={{ width: '80px' }}></span>
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>
                <div className="l-image">
                    <div className="l-card"></div>
                    <div className="l-text">
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '50px' }}></span>
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '120px' }}></span>
                        <span style={{ width: '50px' }}></span>
                        <span style={{ width: '20px' }}></span>
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>

                <div className="l-text-h">
                    <span style={{ width: '70px' }}></span>
                    <span style={{ width: '50px' }}></span>
                </div>

                <div className="l-list">
                    <div className="l-text">
                        <div className="l-icon"></div>
                        <span style={{ width: '70px' }}></span>
                        <span style={{ width: '50px' }}></span>
                    </div>
                </div>

                <div className="l-profile">
                    <div className="l-thumb" style={{ width: '40px', height: '40px' }}></div>
                    <div className="l-lists-name">
                        <div className="l-text-h">
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '70px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '70px' }}></span>
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '60px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (AnnouncementModalLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

/**
* TeamListWidgetLoader
*/
export const TeamListWidgetLoader = (props) => {
    try {
        return (
            <div className="l-teamlistwidget">
                <div className="l-card  l-shine-container">
                    <div className="l-shine"></div>
                    <div className="l-tabs">
                        <div className="l-text is-active">
                            <span style={{ width: '80px' }}></span>
                            <div className="l-icon"></div>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '90px' }}></span>
                        </div>
                    </div>
                </div>
                <div className="l-card profile-card-item">
                    <div className="l-thumbnail">
                        <div className="l-imagecol">
                            <div className="l-text">
                                <span style={{ width: '80px', height: '80px' }}></span>
                            </div>
                        </div>
                        <div className="l-content">
                            <div className="l-text">
                                <span style={{ width: '70px' }}></span>
                                <span style={{ width: '20px' }}></span>
                            </div>
                            <div className="l-text-h">
                                <span style={{ width: '50px' }}></span>
                                <span style={{ width: '20px' }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="l-profile-name">
                        <div className="l-text-h">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '20px' }}></span>
                            <span style={{ width: '50px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '40px' }}></span>
                            <span style={{ width: '60px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (TeamListWidgetLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}

export const SideLoader = (props) => {
    try {
        return (
            <div className="l-side-forms l-shine-container">
                <div className="l-shine"></div>
                <div className="l-side-sort">
                    <div className="l-side-fields">
                        <div className="l-text-h">
                            <span style={{ width: '15px' }}></span>
                            <span style={{ width: '35px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '35px' }}></span>
                        </div>
                        <div className="l-field">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-icon"></div>
                        </div>
                    </div>
                    <div className="l-side-fields">
                        <div className="l-text-h">
                            <span style={{ width: '35px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '75px' }}></span>
                        </div>
                        <div className="l-field">
                            <div className="l-text">
                                <span style={{ width: '40px' }}></span>
                                <span style={{ width: '30px' }}></span>
                            </div>
                            <div className="l-icon"></div>
                        </div>
                    </div>
                    <div className="l-side-toggle">
                        <div className="l-text">
                            <span style={{ width: '70px' }}></span>
                        </div>
                        <div className="l-text">
                            <span style={{ width: '70px' }}></span>
                        </div>
                    </div>
                    <div className="l-side-button">
                        <div className="l-text">
                            <span style={{ width: '30px' }}></span>
                            <span style={{ width: '40px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Invalid return. Please check helpers (SideLoader).', JSON.stringify(error));
        return <p>Loading...</p>;
    }
}
