import React, { useState, Fragment, useEffect } from "react";
// Inputs
import Input from '../../components/input/InputSelectionHandler';
import Information from '../../components/information/Information';
import Info from '../../components/info/Info';
//Packages
import { Popper, Popover } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';

import { Calendar } from 'react-date-range';

import { datetimeFormatter } from '../../helpers/GlobalHelper';

//assets
import { SVG_BACK, SVG_CHECK_ACTIVE, SVG_CHECK_INACTIVE, SVG_CHECK_NEUTRAL, SVG_CLOSE_GRAY, SVG_ARROW_LEFT, SVG_SAVE } from '../../assets/Asset';
import { InfoLoader } from '../../constants/Loader';

// Default per-page-options
const pageOption = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' }
];

// Constant svg of checkbox
const checkBox = {
    all: (
        SVG_CHECK_ACTIVE
    ),
    few: (
        SVG_CHECK_NEUTRAL
    ),
    none: (
        SVG_CHECK_INACTIVE
    )
}

// Constant list of months
const MONTH_LIST = [
    { label: "Jan", value: "January" },
    { label: "Feb", value: "February" },
    { label: "Mar", value: "March" },
    { label: "Apr", value: "April" },
    { label: "May", value: "May" },
    { label: "Jun", value: "June" },
    { label: "Jul", value: "July" },
    { label: "Aug", value: "August" },
    { label: "Sep", value: "September" },
    { label: "Oct", value: "October" },
    { label: "Nov", value: "November" },
    { label: "Dec", value: "December" },
]

const MenuBar = props => {
    let { config, info, button, getActions, dropdown, search, pagination, pivot, check, filter, toggle, mainButton, buttonFooter, undoButton } = { ...props };
    // React Hooks Popover
    let [infoPopover, setInfoPopover] = useState(null);
    let [mainButtonPopover, setMainButtonPopover] = useState(null);
    let [dropdownPopover, setDropdownPopover] = useState(null);
    let [paginationSummaryPopover, setPaginationSummaryPopover] = useState(null);
    let [pivotPopover, setPivotPopover] = useState(null);
    let [selectDatePopover, setSelectDatePopover] = useState(null);
    let [filterPopover, setFilterPopover] = useState(null);
    let [calendarYear, setCalendarYear] = useState("");
    let [minMonthIdx, setMinMonthIdx] = useState(null);
    let [maxMonthIdx, setMaxMonthIdx] = useState(null);

    // React Hooks Variables
    let [searchTemporaryValue, setSearchTemporaryValue] = useState('');
    let [goToPage, setGoToPage] = useState(1);
    let [perPageTemporaryValue, setPerPageTemporaryValue] = useState("");
    let [paginationSummaryFormError, setPaginationSummaryFormError] = useState([]);
    let [loaded, setLoaded] = useState(false);
    let [seconds, setSeconds] = useState(0);
    let [undoShow, setUndoShow] = useState(undoButton && undoButton.show ? true : false);
    let [doneTimer, setDoneTimer] = useState(false);

    useEffect(() => {
        if (dropdown && dropdown.minMonth) {
            let filteredMonthList = [...MONTH_LIST].filter(item => (item.value.toLowerCase() === dropdown.minMonth.toLowerCase()));
            if (filteredMonthList.length > 0) {
                minMonthIdx = MONTH_LIST.indexOf(filteredMonthList[0]);
                setMinMonthIdx(minMonthIdx);
            }
        }
        if (dropdown && dropdown.maxMonth) {
            let filteredMonthList = [...MONTH_LIST].filter(item => (item.value.toLowerCase() === dropdown.maxMonth.toLowerCase()));
            if (filteredMonthList.length > 0) {
                maxMonthIdx = MONTH_LIST.indexOf(filteredMonthList[0]);
                setMaxMonthIdx(maxMonthIdx);
            }
        }

        if (search && search.value && loaded == false) {
            setSearchTemporaryValue(search.value);
            setLoaded(true);
        }

        if (undoButton && undoButton.show) {
            let buttonWithTimer = undoButton.actions && undoButton.actions.constructor === Array && undoButton.actions.length > 0 ? (
                undoButton.actions.filter(item => (item.timer !== undefined && item.timer.constructor === Number))
            ) : [];
            if (buttonWithTimer.length > 0) {
                if (undoShow !== undoButton.show) {
                    setSeconds(buttonWithTimer[0].timer);
                    setDoneTimer(false);
                    setUndoShow(undoButton.show ? true : false);
                }
                let myInterval = setInterval(() => {
                    if (seconds > 0) {
                        setSeconds(seconds - 1);
                    } else {
                        if (!doneTimer) {
                            clearInterval(myInterval);
                            setDoneTimer(true)
                            returnValues('button', buttonWithTimer[0].action, null);
                        }
                    }
                }, 1000)
                return () => {
                    clearInterval(myInterval);
                };
            }
        } else {
            setUndoShow(false);
        }

    });


    // Belt Configuration Variables
    let widgetClass = config && config.isWidget && config.isWidget.constructor === Boolean ? 'card' : 'card card-nobg';
    let withTalentClass = config && config.withTalent && config.withTalent.constructor === Boolean ? ' with-talent' : '';
    info = info ? (
        info.constructor === Object && info.infoDetails ? (
            info
        ) : info.constructor === String ? (
            info
        ) : InfoLoader
    ) : InfoLoader;
    let dropdownTitle = dropdown && (dropdown.type === 'list' || dropdown.type === 'button') ? (
        dropdown.title ? dropdown.title : ""
    ) : dropdown && dropdown.type === 'date-picker-weekly' ? (
        dropdown.selection && dropdown.selection.startDate && dropdown.selection.endDate ? (
            dropdown.selection.startDate + ' to ' + dropdown.selection.endDate
        ) : ""
    ) : dropdown && dropdown.type === 'date-picker-monthly' ? dropdown.selection.startDate : "";

    /**
    * popoverRequestHandler
    * hide and show the popover of specific action
    * @param {*} e - event of the click item
    * @param {*} popover - popover type
    */
    let popoverRequestHandler = (e, popover, hide = false) => {

        switch (popover) {
            case 'info':
                const {currentTarget} = e;

                if (hide == false && info.constructor== String && info==InfoLoader) {
                    actionRequestHandler(e, 'icon', 'info')
                    setInfoPopover(e.currentTarget);
                    setTimeout(() => {
                        setInfoPopover(null);
                        setInfoPopover(currentTarget);

                    }, 2000);




                } else {
                    infoPopover ? setInfoPopover(null) : setInfoPopover(e.currentTarget);
                }


                break;
            case 'dropdown':
                if (dropdown.type === 'date-picker-monthly' && !dropdownPopover) {
                    dropdown.selection && dropdown.selection.startDate ? setCalendarYear(datetimeFormatter(dropdown.selection.startDate, 'full-year')) : setCalendarYear(new Date(), 'full-year')
                } else if (dropdown.type === 'date-picker-cutoff' && !dropdownPopover) {
                    setCalendarYear(dropdown.currentYear); //need to improve on this one
                }
                dropdownPopover ? setDropdownPopover(null) : setDropdownPopover(e.currentTarget);
                break;
            case 'pagination-summary':
                if (!Boolean(paginationSummaryPopover)) {
                    pagination && pagination.page ? setGoToPage(pagination.page) : setGoToPage(1);
                    setPerPageTemporaryValue(pagination.perPage ? pagination.perPage.toString() : '')
                }
                paginationSummaryPopover ? setPaginationSummaryPopover(null) : setPaginationSummaryPopover(e.currentTarget);
                break;
            case 'pivot':
                pivotPopover ? setPivotPopover(null) : setPivotPopover(e.currentTarget);
                break;
            case 'filter':
                filterPopover ? setFilterPopover(null) : setFilterPopover(e.currentTarget);
                break;
            case 'main-button':
                if (hide) {
                    setMainButtonPopover(null);
                } else {
                    mainButtonPopover ? setMainButtonPopover(null) : setMainButtonPopover(e.currentTarget);
                }
                break;
            default:
                break;
        }
    }

    /**
    * actionRequestHandler
    * manipulate the action and data of each action
    * @param {*} e - event
    * @param {*} type - action type / can be the action itself
    * @param {*} action - it can be action type / data depends on the used actions
    */
    let actionRequestHandler = (e, type, action, hidePopover = true) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
        let data = null;
        let addedParam = null;
        if (type === 'search') {
            data = searchTemporaryValue;
        } else if (type === 'pagination' || type === 'pagination-summary') {
            data = pagination;
        } else if (type === 'dropdown' || type === 'pivot' || type === 'main-button' || type === 'button' || type === 'icon' || type == 'check' || type === 'tab' || type === 'toggle') {
            data = action;
            action = type;
            if (dropdown && dropdown.type === 'date-picker-cutoff') {
                addedParam = calendarYear;
            }
        } else if (type === 'undo-button') {
            data = action;
            action = type;
        }

        if (hidePopover) {
            popoverRequestHandler(e, type, true);
        }

        setTimeout(function () {
            returnValues(action, data, addedParam);
        }.bind(this), 200);
    }

    /**
    * handleChangeFormValue
    * manipulate the inputs temporary values
    * @param {*} e - event
    * @param {*} type - type of the input that has been changed
    */
    let handleChangeFormValue = (e, type) => {
        switch (type) {
            case 'search':

                e ? setSearchTemporaryValue(e) : setSearchTemporaryValue("");
                break;
            case 'show-per-page':
                setPerPageTemporaryValue(e.toString());
                setGoToPage(1);
                if (paginationSummaryFormError.indexOf('perPageTemporaryValue') >= 0 && (e !== "")) {
                    paginationSummaryFormError = paginationSummaryFormError.filter(item => item !== 'perPageTemporaryValue');
                    setPaginationSummaryFormError(paginationSummaryFormError);
                }
                break;
            case 'go-to-page':
                setGoToPage(e);
                if (paginationSummaryFormError.indexOf('goToPage') >= 0 && (e.currentTarget.value !== "" || e.currentTarget.value > 1)) {
                    paginationSummaryFormError = paginationSummaryFormError.filter(item => item !== 'goToPage');
                    setPaginationSummaryFormError(paginationSummaryFormError);
                }
                break;
            case 'advanced-filter':
                returnValues(type, e);
                break;
            default:
                break;
        }
    }

    /**
    * paginationRequestHandler
    * manipulate the paginations value depend on the action
    * @param {*} e - event
    * @param {*} action - action that the user do
    */
    let paginationRequestHandler = (e, action) => {
        e.preventDefault();
        let paginationCopy = { ...pagination };
        switch (action) {
            case 'check-pagination-required':
                let formError = [];
                if (goToPage === "" || goToPage < 1) {
                    formError.push('goToPage');
                }
                if (perPageTemporaryValue === "") {
                    formError.push('perPageTemporaryValue');
                }
                return formError;
                break;
            case 'submit':
                let errorFields = paginationRequestHandler(e, 'check-pagination-required');
                if (errorFields.length > 0) {
                    setPaginationSummaryFormError(errorFields);
                } else {
                    pagination.perPage = perPageTemporaryValue ? parseInt(perPageTemporaryValue) : pagination.perPage;
                    pagination.page = goToPage ? (
                        (pagination.perPage * goToPage) > pagination.total ? (
                            Math.floor(pagination.total / pagination.perPage) + 1
                        ) : parseInt(goToPage)
                    ) : 1;
                    pagination.counter = (pagination.page * pagination.perPage) > pagination.total ? pagination.total : (pagination.page * pagination.perPage);
                    // if (paginationCopy.perPage !== pagination.perPage || paginationCopy.page !== pagination.page || paginationCopy.counter !== pagination.counter) {
                    actionRequestHandler(e, 'pagination-summary', 'pagination');
                    // }
                }
                break;
            case 'next':
                pagination.page = ((pagination.page++) * pagination.perPage) > pagination.total ? (
                    Math.floor(pagination.total / pagination.perPage) + 1
                ) : pagination.page++;
                pagination.counter = (pagination.page * pagination.perPage) > pagination.total ? pagination.total : (pagination.page * pagination.perPage);
                if (paginationCopy.page !== pagination.page || paginationCopy.counter !== pagination.counter) {
                    actionRequestHandler(e, 'pagination', 'pagination');
                }
                break;
            case 'prev':
                pagination.page = pagination.page > 1 ? pagination.page -= 1 : pagination.page;
                pagination.counter = pagination.page * pagination.perPage;
                if (paginationCopy.page !== pagination.page || paginationCopy.counter !== pagination.counter) {
                    actionRequestHandler(e, 'pagination', 'pagination');
                }
                break;
            default:
                break;
        }
    }

    /**
    * checkboxRequestHandler
    * select all / unselect all items
    * @param {*} e - event
    * @param {*} action - action of the checkbox
    */
    let checkboxRequestHandler = (e, action) => {
        e.preventDefault();
        if (check.disabled !== true) {
            if (action == 'all') {
                actionRequestHandler(e, 'check', 'all');
            } else {
                actionRequestHandler(e, 'check', 'none');
            }
        }

    }

    /**
    * onDatePickerChange
    * change the datepicker value
    * @param {*} e - event
    * @param {*} type - action type
    */
    let onDatePickerChange = (e, type) => {
        if (dropdown.type == 'date-picker-weekly') {
            dropdown.selection.startDate = datetimeFormatter(e, 'start-of-Week');
            dropdown.selection.endDate = datetimeFormatter(e, 'end-of-Week');
        }
        actionRequestHandler(e, type, dropdown.selection);
    }

    /**
    * dateMonthlyPickerHandler
    * selection of month on a calendar and changing of year
    * @param {*} e - event
    * @param {*} action - action type
    */
    let dateMonthlyPickerHandler = (e, action, data) => {
        let { maxYear, minYear, selection } = { ...dropdown }
        if (action === 'next') {
            if (!maxYear || (maxYear && parseInt(maxYear) >= calendarYear + 1)) {
                calendarYear += 1;
                setCalendarYear(calendarYear)
            }
        } else if (action === 'prev') {
            if (!minYear || (minYear && parseInt(minYear) <= calendarYear - 1)) {
                calendarYear -= 1;
                setCalendarYear(calendarYear)
            }
        } else if (action === 'month-selection') {
            let newDateValue = datetimeFormatter(data + ' ' + calendarYear, 'month-year');
            actionRequestHandler(e, 'dropdown', newDateValue);
        } else if (action === 'next-month') {
            let standardDate = datetimeFormatter(dropdown.selection.startDate, 'date-standard');
            let selectedMonthDate = new Date(standardDate).toLocaleString('en-US', { timeZone: 'Asia/Manila' }); //making the date picked as the default gmt so that the new date wont adjust by timezone;
            selectedMonthDate = new Date(selectedMonthDate);
            let monthIdx = selectedMonthDate.getMonth();
            let fullYear = selectedMonthDate.getFullYear();
            if (monthIdx + 1 < 12) {
                monthIdx = monthIdx + 1;
            } else {
                monthIdx = 0;
                fullYear = fullYear + 1;
            }
            if ((!maxYear && !maxMonthIdx) || fullYear < parseInt(maxYear) || (fullYear === parseInt(maxYear) && monthIdx <= parseInt(maxMonthIdx))) {
                let newDateValue = datetimeFormatter(MONTH_LIST[monthIdx].value + ' ' + fullYear, 'month-year');
                actionRequestHandler(e, 'dropdown', newDateValue, false);
            }
        } else if (action === 'prev-month') {
            let standardDate = datetimeFormatter(dropdown.selection.startDate, 'date-standard');
            let selectedMonthDate = new Date(standardDate).toLocaleString('en-US', { timeZone: 'Asia/Manila' }); //making the date picked as the default gmt so that the new date wont adjust by timezone;
            selectedMonthDate = new Date(selectedMonthDate);

            let monthIdx = selectedMonthDate.getMonth();
            let fullYear = selectedMonthDate.getFullYear();
            if (monthIdx - 1 >= 0) {
                monthIdx = monthIdx - 1;
            } else {
                monthIdx = 11;
                fullYear = fullYear - 1;
            }
            if ((!minYear && !minMonthIdx) || fullYear > parseInt(minYear) || (fullYear === parseInt(minYear) && monthIdx >= parseInt(minMonthIdx))) {
                let newDateValue = datetimeFormatter(MONTH_LIST[monthIdx].value + ' ' + fullYear, 'month-year');
                actionRequestHandler(e, 'dropdown', newDateValue, false);
            }
        }
    }

    let dateCutoffPickerHandler = (e, label, value, identifier=null) => {
        let valueFrom = "";
        let valueTo = "";
        if(value && value.from && value.to){
            valueFrom = value.from.split("-");
            valueTo = value.to.split("-");
            //check if december to january
            if(valueFrom[1] && valueFrom[1] == "12" && valueTo[1] && valueTo[1] == "01"){
                if(identifier){
                    value.from = calendarYear+"-"+valueFrom[1]+"-"+valueFrom[2];
                    value.to = (calendarYear+1)+"-"+valueTo[1]+"-"+valueTo[2];
                }else{
                    value.from = (calendarYear-1)+"-"+valueFrom[1]+"-"+valueFrom[2];
                    value.to = calendarYear+"-"+valueTo[1]+"-"+valueTo[2];
                }
            }else{
                value.from = calendarYear+"-"+valueFrom[1]+"-"+valueFrom[2];
                value.to = calendarYear+"-"+valueTo[1]+"-"+valueTo[2];
            }

        }
        let cutOffVal = {
            "label": label,
            "value": value,
        }
        actionRequestHandler(e, 'dropdown', cutOffVal);
    }

    /**
    * returnValues
    * return manipulated value from beltConfig to the parent component
    * @param {*} action - done action on beltConfig
    * @param {*} data - manipulated data from the action
    */
    let returnValues = (action, data, addedParam = null) => {
        return getActions ? getActions(action, data, addedParam) : false;
    }

    /**
    * dateMonthlyPickerIsSelected
    * determine if month is selected
    * @param {*} month - month value
    */
    let dateMonthlyPickerIsSelected = (month) => {
        let isSelected = false;
        if (dropdown && dropdown.selection && dropdown.selection.startDate && calendarYear) {
            let monthYear = month + ' ' + calendarYear;
            isSelected = datetimeFormatter(dropdown.selection.startDate.toString(), 'month-year') === datetimeFormatter(monthYear, 'month-year') ? true : false
        }
        return isSelected;
    }

    let isDisabledDropdownPagination = (action) => {
        let { maxYear, minYear, selection } = { ...dropdown }
        let selectedMonthDate = new Date(selection.startDate);
        let monthIdx = selectedMonthDate.getMonth();
        let fullYear = selectedMonthDate.getFullYear();
        if (action === 'prev') {
            if (minYear && minMonthIdx && fullYear === parseInt(minYear) && monthIdx === parseInt(minMonthIdx)) {
                return ' is-disabled';
            } else {
                return '';
            }
        } else if (action === 'next') {
            if (maxYear && maxMonthIdx && fullYear === parseInt(maxYear) && monthIdx === parseInt(maxMonthIdx)) {
                return ' is-disabled';
            } else {
                return '';
            }
        }
    }

    let toggleSelectionHandler = (event, value) => {
        event.preventDefault();
        actionRequestHandler(event, 'toggle', value, false);
    }

    return (

        <div className={widgetClass + withTalentClass}>

            <div className="card-belt">
                {/* LEFT BELT CONFIGURATION */}
                <div className="belt-left">
                    <div className="belt-left-container">
                        {
                            // Tab Configuration
                            config && config.tab && config.tab.show && config.tab.actions.constructor === Array && config.tab.actions.length > 0 ? (
                                <div className="belt-tabs">
                                    {config.tab.actions.map((tab, idx) => {
                                        return <div key={idx} className={tab.id == config.tab.active ? 'belt-tab is-active' : 'belt-tab'} onClick={event => actionRequestHandler(event, 'tab', tab.id)} >{tab.label}</div>
                                    })}
                                </div>
                            ) : null
                        }
                        {
                            // Back Icon Configuration
                            config && config.iconType && ((config.iconType.constructor === Array && config.iconType.length > 0 && config.iconType.indexOf("back") >= 0) || (config.iconType === 'back')) ? (
                                <a className="belt-icon icon-back" href="#" onClick={event => actionRequestHandler(event, 'icon', 'back')}>
                                    {SVG_BACK}
                                </a>
                            ) : null
                        }
                        {
                            // Check Icon Configuration
                            config && config.iconType && ((config.iconType.constructor === Array && config.iconType.length > 0 && config.iconType.indexOf("check") >= 0) || (config.iconType === 'check')) ? (
                                <div className="belt-icon-check">
                                    {
                                        check ? (
                                            check.selected === 0 ? (
                                                <div onClick={(event) => checkboxRequestHandler(event, 'all')}>
                                                    {checkBox.none}
                                                </div>
                                            ) : check.selected > 0 && check.selected < check.total ? (
                                                <div onClick={(event) => checkboxRequestHandler(event, 'all')}>
                                                    {checkBox.few}
                                                </div>
                                            ) : check.selected === check.total ? (
                                                <div onClick={(event) => checkboxRequestHandler(event, 'none')}>
                                                    {checkBox.all}
                                                </div>
                                            ) : <div>
                                                            {checkBox.none}
                                                        </div>
                                        ) : <div>
                                                {checkBox.none}
                                            </div>
                                    }
                                </div>
                            ) : null
                        }
                        {
                            // Standard Icon Configuration
                            config && config.iconType && ((config.iconType.constructor === Array && config.iconType.length > 0 && config.iconType.indexOf("standard") >= 0) || (config.iconType === 'standard')) ? (
                                <div className="belt-icon">{config.icon}</div>
                            ) : null
                        }
                        <div className="belt-title">
                            {
                                // Title Configuration
                                check && check.selected && check.selected > 0 && check.selected < check.total ? (
                                    <h6>{`${check.selected} ${check.selected === 1 ? 'item selected' : 'items selected'}`}</h6>
                                ) : check && check.selected && check.selected === check.total ? (
                                    <h6>All item(s) selected</h6>
                                ) : config && config.title && (config.title.constructor === String || config.title.constructor === Object) ? (
                                    <h6 className="config-title">{config.title}</h6>
                                ) : null
                            }

                            {
                                // Title Information Configuration
                                config && config.titleDescription ? (
                                    <p>{config.titleDescription}</p>
                                ) : null
                            }
                        </div>

                        {
                            // Information Configuration
                            config && config.nativePopover === undefined && config.showInfo && config.showInfo.constructor === Boolean ? (
                                <Fragment>
                                    <a href="#" className="belt-info" onClick={event => popoverRequestHandler(event, 'info')}>
                                        <i className="belt-icon"></i>
                                    </a>
                                    <Popper
                                        id="InfoPopOver"
                                        open={Boolean(infoPopover)}
                                        anchorEl={infoPopover}
                                        placement="bottom-start"
                                        // disablePortal={true}
                                        transition
                                        modifiers={{
                                            flip: {
                                                enabled: false
                                            },
                                            preventOverflow: {
                                                enabled: true,
                                                boundariesElement: "scrollParent"
                                            }
                                        }}
                                    >
                                        <ClickAwayListener onClickAway={event => popoverRequestHandler(event, 'info')}>
                                            <Information
                                                item={info && info.infoDetails ? info.infoDetails : info}
                                                listRow={info && info.listRow ? info.listRow : []}
                                                desc={info && info.listRow && info.listRow.length > 0 ? false : true}
                                                title={config && config.title ? config.title.toUpperCase() : null}
                                                hide={event => popoverRequestHandler(event, 'info', true)}
                                            />
                                        </ClickAwayListener>
                                    </Popper>
                                </Fragment>
                            ) : null
                        }
                        {
                            // Additional title on the modal
                            config && config.addedTitle ? (
                                <p>{config.addedTitle}</p>
                            ) : null
                        }
                    </div>

                    <div className="belt-left-cta">
                        {
                            mainButton && mainButton.show ? (
                                mainButton.actions && mainButton.actions.constructor === Array && mainButton.actions.length > 1 ? (
                                    <Fragment>
                                        <a className="belt-action-main" id="main-button" href="#" onClick={event => popoverRequestHandler(event, 'main-button')}>
                                            <div className="belt-icon">{mainButton.icon ? mainButton.icon : ''}</div>
                                            <span>{mainButton.label ? mainButton.label : 'File a Request'}</span>
                                        </a>
                                        <Popover
                                            id="mainButtonPopover"
                                            open={Boolean(mainButtonPopover)}
                                            anchorEl={mainButtonPopover}
                                            onClose={event => popoverRequestHandler(event, 'main-button')}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <div className="popover popover-list">
                                                {mainButton.actions.map((btn, idx) =>
                                                    <a href="#" key={idx} onClick={event => actionRequestHandler(event, 'main-button', btn.action)}>{btn.label}</a>
                                                )}
                                            </div>
                                        </Popover>
                                    </Fragment>
                                ) : mainButton.actions && mainButton.actions.constructor === Array && mainButton.actions.length === 1 ? (
                                    mainButton.actions.map((btn, idx) => {
                                        return (
                                            <a className={btn.class ? 'belt-action ' + btn.class : 'belt-action'} href="#" key={idx} onClick={event => actionRequestHandler(event, 'main-button', btn.action)}>
                                                <div className="belt-icon">{btn.icon ? btn.icon : ''}</div>
                                                <span>{btn.label ? btn.label : ''}</span>
                                            </a>
                                        )
                                    })
                                ) : null
                            ) : null
                        }

                        {
                            // Button Actions Configuration
                            button && button.show && button.show.constructor === Boolean &&
                                button.actions && button.actions.constructor === Array && button.actions.length > 0 ? (
                                    button.actions.map((btn, idx) => {
                                        return (
                                            <a className={btn.class ? btn.class : 'belt-action' + ' ' + (idx == 0 ? 'is-primary' : '')} href="#" key={idx} onClick={event => actionRequestHandler(event, 'button', btn.action)}>
                                                <div className="belt-icon belt-buttons">{btn.icon ? btn.icon : ''}</div>
                                                <span>{btn.label ? btn.label : ''}</span>
                                            </a>
                                        )
                                    })
                                ) : null
                        }
                    </div>
                </div>
                {/* RIGHT BELT CONFIGURATION */}
                <div className="belt-right">
                    {
                        // Dropdown Actions Configuration
                        dropdown && dropdown.show && dropdown.show.constructor === Boolean ? (
                            <Fragment>
                                {
                                    dropdown.type === 'list' ? (
                                        <a className="belt-dropdown" id="add" 
                                        // href="#" 
                                        onClick={event => popoverRequestHandler(event, 'dropdown')}>
                                            <div className="belt-icon">{dropdown.icon ? dropdown.icon : ''}</div>
                                            <span>{dropdownTitle}</span>
                                        </a>
                                    ) : dropdown.type === 'date-picker-weekly' ? (
                                        <a id="months"
                                            className={`belt-dropdown ${Boolean(dropdownPopover) ? 'is-active' : ''}`}
                                            href="#"
                                            onClick={event => popoverRequestHandler(event, 'dropdown')}
                                        >
                                            <span>{dropdownTitle}</span>
                                            <div className="icon-arrowdown"></div>
                                        </a>
                                    ) : dropdown.type === 'date-picker-monthly' ? (
                                        <Fragment>
                                            {/* <a id="months"
                                                className={`belt-dropdown ${Boolean(dropdownPopover) ? 'is-active' : ''}`}
                                                href="#"
                                                onClick={event => popoverRequestHandler(event, 'dropdown')}
                                            >
                                                <span>{dropdownTitle}</span>
                                                <div className="icon-arrowdown"></div>
                                            </a> */}
                                            {
                                                !dropdown.hideDropdown ? (
                                                    <a id="months"
                                                        className={`belt-dropdown ${Boolean(dropdownPopover) ? 'is-active' : ''}`}
                                                        // href="#"
                                                        onClick={event => popoverRequestHandler(event, 'dropdown')}
                                                    >
                                                        <span>{dropdownTitle}</span>
                                                        <div className="icon-arrowdown"></div>
                                                    </a>
                                                ) : null
                                            }
                                            {
                                                dropdown.showPagination ? (
                                                    <Fragment>
                                                        <a
                                                            className={'belt-prev' + isDisabledDropdownPagination('prev')}
                                                            href="#"
                                                            onClick={event => dateMonthlyPickerHandler(event, 'prev-month')}
                                                        >
                                                            <div className="belt-icon"></div>
                                                        </a>
                                                        <a
                                                            className={'belt-next' + isDisabledDropdownPagination('next')}
                                                            href="#"
                                                            onClick={event => dateMonthlyPickerHandler(event, 'next-month')}
                                                        >
                                                            <div className="belt-icon"></div>
                                                        </a>
                                                    </Fragment>
                                                ) : null
                                            }
                                        </Fragment>
                                    ) : dropdown.type === 'date-picker-cutoff' ? (
                                        (
                                            <a className="belt-dropdown" id="add" href="#" onClick={event => popoverRequestHandler(event, 'dropdown')}>
                                                <span>{dropdown.cutoffValue && dropdown.cutoffValue.label ? dropdown.cutoffValue.label : ''}</span>
                                            </a>
                                        )
                                    ) : dropdown.type === 'button' ? (
                                        <a className="belt-dropdown" id="add" href="#" onClick={event => actionRequestHandler(event, 'button', dropdown.action)}>
                                            <div className="belt-icon">{dropdown.icon ? dropdown.icon : ''}</div>
                                            <span>{dropdownTitle}</span>
                                        </a>
                                    ) : (
                                                            <a className="belt-dropdown" id="add" href="#" onClick={event => popoverRequestHandler(event, 'dropdown')}>
                                                                <span>{dropdownTitle}</span>
                                                            </a>
                                                        )
                                }
                                <Popover
                                    id="dropdownPopover"
                                    open={Boolean(dropdownPopover)}
                                    anchorEl={dropdownPopover}
                                    onClose={event => popoverRequestHandler(event, 'dropdown')}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >

                                    {
                                        dropdown.type === 'list' ? (
                                            dropdown.actions && dropdown.actions.constructor === Array && dropdown.actions.length > 0 ? (
                                                <div className="popover popover-list">
                                                    {dropdown.actions.map((drpdwn, idx) =>
                                                        <a href="#" key={idx} onClick={event => actionRequestHandler(event, 'dropdown', drpdwn.value)}>{drpdwn.label}</a>
                                                    )}
                                                </div>
                                            ) : null
                                        ) : dropdown.type === 'date-picker-weekly' ? (
                                            <div className="popover">
                                                <Calendar
                                                    className="dateRangePickerInput"
                                                    onChange={event => onDatePickerChange(event, 'dropdown')}
                                                />
                                            </div>
                                        ) : dropdown.type === 'date-picker-monthly' ? (
                                            <div className="popover popover-months">
                                                <div className="list-years">
                                                    <button onClick={event => dateMonthlyPickerHandler(event, 'prev')} ><img src="/images/icons/icon-arrowleft-white.svg" alt="" /></button>
                                                    <div>{calendarYear}</div>
                                                    <button onClick={event => dateMonthlyPickerHandler(event, 'next')} ><img src="/images/icons/icon-arrowright-white.svg" alt="" /></button>
                                                </div>
                                                <div className="list-months">
                                                    {MONTH_LIST.map((action, idx) =>
                                                        dropdown.minYear && dropdown.minYear.toString() === calendarYear.toString() && minMonthIdx && minMonthIdx > idx ? (
                                                            <a href="#" key={idx} className='is-disabled' onClick={event => { event.preventDefault() }}>{action.label}</a>
                                                        ) : dropdown.maxYear && dropdown.maxYear.toString() === calendarYear.toString() && maxMonthIdx && maxMonthIdx < idx ? (
                                                            <a href="#" key={idx} className='is-disabled' onClick={event => { event.preventDefault() }}>{action.label}</a>
                                                        ) : (
                                                                    <a
                                                                        className={dateMonthlyPickerIsSelected(action.label) ? 'is-selected' : ''}
                                                                        href="#"
                                                                        key={idx}
                                                                        onClick={event => dateMonthlyPickerHandler(event, 'month-selection', action.value)}>{action.label}</a>
                                                                )
                                                    )}
                                                </div>
                                            </div>
                                        ) : dropdown.type === 'date-picker-cutoff' ? (
                                            <div className="popover popover-months">
                                                <div className="list-years">
                                                    <button onClick={event => dateMonthlyPickerHandler(event, 'prev')} ><img src="/images/icons/icon-arrowleft-white.svg" alt="" /></button>
                                                    <div>{calendarYear}</div>
                                                    <button onClick={event => dateMonthlyPickerHandler(event, 'next')} ><img src="/images/icons/icon-arrowright-white.svg" alt="" /></button>
                                                </div>
                                                <div className="list-months">
                                                    {
                                                        dropdown.cutoffDates !== null && dropdown.cutoffDates.length > 0 ? (
                                                            dropdown.cutoffDates.map((action, idx) => {
                                                                let classSelect;
                                                                let identifier;
                                                                if (JSON.stringify(action.label) == JSON.stringify(dropdown.cutoffValue.label)) {
                                                                    if (dropdown.currentYear == calendarYear) {
                                                                        classSelect = 'is-selected';
                                                                    } else {
                                                                        classSelect = '';
                                                                    }
                                                                    // classSelect = 'is-selected';
                                                                } else {
                                                                    classSelect = '';
                                                                }
                                                                //set identifier if its the last cutoff date for the year eg dec26 to january next year
                                                                identifier = dropdown.cutoffDates.length == idx + 1 ? "last cutoff" : null;
                                                                return <a
                                                                    className={classSelect}
                                                                    href="#"
                                                                    key={idx}
                                                                    onClick={event => dateCutoffPickerHandler(event, action.label, action.value, identifier )}>{action.label}</a>
                                                            }
                                                            )
                                                        ) : null
                                                    }
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </Popover>
                            </Fragment>
                        ) : null
                    }
                    {
                        pagination && pagination.show && pagination.show.constructor === Boolean ? (
                            <Fragment>
                                {
                                    !pagination.hideSummary || pagination.hideSummary == false ? (
                                        <Fragment>
                                            <a 
                                                className="pagination-summary"
                                                href="#" 
                                                id="pagination" 
                                                {...(!pagination.disabledSummary ? { onClick: event => popoverRequestHandler(event, 'pagination-summary') } : { onClick: event => { event.preventDefault() } })}
                                                data-testid="menubar-pagination">
                                                {
                                                    (pagination.counter > 0 ? (((pagination.page - 1) * pagination.perPage) + 1) : 0)
                                                    + ' - ' +
                                                    (
                                                        pagination.page * pagination.perPage > pagination.total ?
                                                            (pagination.total ? pagination.total : pagination.counter) :
                                                            pagination.page * pagination.perPage
                                                    )
                                                } of {pagination.total ? pagination.total : 0}
                                            </a>
                                            <Popover
                                                id="paginationSummaryPopover"
                                                open={Boolean(paginationSummaryPopover)}
                                                anchorEl={paginationSummaryPopover}
                                                onClose={event => popoverRequestHandler(event, 'pagination-summary')}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                            >
                                                {
                                                    <div className="popover popover-input">
                                                        <div className={'e-field field field-input' + (paginationSummaryFormError.indexOf('perPageTemporaryValue') >= 0 ? ' is-invalid' : '')}>
                                                            <label className='e-input-label'>SHOW</label>
                                                            <Input
                                                                id={'paginationPerPage'}
                                                                type={'select'}
                                                                placeholder={'-'}
                                                                value={perPageTemporaryValue}
                                                                options={pageOption}
                                                                onChanged={(event) => handleChangeFormValue(event, 'show-per-page')}
                                                            />
                                                        </div>
                                                        <div className={'e-field field field-input' + (paginationSummaryFormError.indexOf('goToPage') >= 0 ? ' is-invalid' : '')}>
                                                            <label className='e-input-label'>GO TO PAGE</label>
                                                            <div className="e-input">
                                                                <Input
                                                                    id={'goToPage'}
                                                                    type={'number'}
                                                                    value={goToPage}
                                                                    placeholder={'-'}
                                                                    maxLength={5}
                                                                    min='1'
                                                                    onChanged={(event) => handleChangeFormValue(event, 'go-to-page')}
                                                                />
                                                            </div>
                                                        </div>
                                                        <button onClick={(event) => paginationRequestHandler(event, 'submit')}>
                                                            <img src="/images/icons/icon-check-graydark.svg" alt="" />
                                                        </button>
                                                    </div>
                                                }
                                            </Popover>
                                        </Fragment>
                                    ) : null
                                }
                                <a
                                    className={pagination.counter > pagination.perPage ? 'belt-prev' : 'belt-prev is-disabled'}
                                    href="#"
                                    {...(((pagination.page*pagination.perPage) > pagination.perPage) ? { onClick: event => paginationRequestHandler(event, 'prev') } : { onClick: event => { event.preventDefault() } })}
                                >
                                    <div className="belt-icon"></div>
                                </a>
                                <a
                                    className={pagination.total <= pagination.counter ? 'belt-next is-disabled' : 'belt-next'}
                                    href="#"
                                    {...((!pagination.total <= (pagination.page*pagination.perPage)) ? { onClick: event => paginationRequestHandler(event, 'next') } : { onClick: event => { event.preventDefault() } })}
                                >
                                    <div className="belt-icon"></div>
                                </a>
                            </Fragment>
                        ) : null
                    }
                    {
                        // Pivot Configuration
                        pivot && pivot.show ? (
                            <Fragment>
                                <a id="months" className="belt-dropdown " 
                                // href="#" 
                                onClick={event => popoverRequestHandler(event, 'pivot')}>
                                    <span>
                                        {
                                            pivot.selected && pivot.actions &&
                                                pivot.actions.constructor === Array && pivot.actions.length > 0 ? (
                                                    pivot.actions.filter(item => (item.value === pivot.selected)).length > 0 ? (
                                                        pivot.actions.filter(item => (item.value === pivot.selected))[0].label
                                                    ) : 'None'
                                                ) : 'None'
                                        }
                                    </span>
                                    <div className="icon-arrowdown"></div>
                                </a>
                                <Popover
                                    id="pivotPopover"
                                    open={Boolean(pivotPopover)}
                                    anchorEl={pivotPopover}
                                    onClose={event => popoverRequestHandler(event, 'pivot')}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    {
                                        pivot.actions && pivot.actions.constructor === Array && pivot.actions.length > 0 ? (
                                            <div className="popover popover-list" data-testid="pivot-list">
                                                {pivot.actions.map((pvt, idx) =>
                                                    <a href="#" key={idx} onClick={event => actionRequestHandler(event, 'pivot', pvt.value)}>{pvt.label}</a>
                                                )}
                                            </div>
                                        ) : null
                                    }
                                </Popover>
                            </Fragment>
                        ) : null
                    }
                    {
                        filter && filter.show ? (
                            <div>
                                <Input
                                    key={'multiSelect2'}
                                    elementType={'multiSelect2'}
                                    options={filter.options && filter.options.constructor === Array ? filter.options : []}
                                    value={filter.selected && filter.selected.constructor === Array ? filter.selected : []}
                                    changed={event => handleChangeFormValue(event, 'advanced-filter')}
                                    onclick={event => popoverRequestHandler(event, 'filter')}
                                    isDisabled={false}
                                    open={Boolean(filterPopover)}
                                    className={'advanced'}
                                    id={'belt-filter'}
                                    placeholder={'Select option'}
                                    icon={filter.icon}
                                    handleClose={event => popoverRequestHandler(event, 'filter')}
                                />
                            </div>
                        ) : null
                    }

                    {
                        // Close Icon Configuration
                        config && config.iconType && ((config.iconType.constructor === Array && config.iconType.length > 0 && config.iconType.indexOf("close") >= 0) || (config.iconType === 'close')) ? (
                            <a className="modal-close" href="#" onClick={event => actionRequestHandler(event, 'icon', 'close')} date-testid = "menubar-close">
                                {SVG_CLOSE_GRAY}
                            </a>
                        ) : null
                    }

                    {
                        toggle && toggle.show && toggle.buttons && toggle.buttons.constructor === Array ? (
                            <Fragment>
                                <div className="belt-toggle">
                                    {
                                        toggle.buttons.map((item, idx) => (
                                            <a className={"belt-icon icon-calendar " + (item.value === toggle.value ? ' is-active' : '')} key={'toggle-' + idx} href="#" onClick={event => toggleSelectionHandler(event, item.value)}>
                                                {
                                                    item.value === toggle.value ? item.selectedIconDisplay : item.icon
                                                }
                                            </a>
                                        ))
                                    }
                                </div>
                            </Fragment>
                        ) : null
                    }
                </div>
            </div>
            {
                // Search Configuration
                search && search.show && search.show.constructor === Boolean ? (
                    <div className="field card-search">
                        <div className="e-input">
                            <Input
                                id={'search'}
                                type={'text'}
                                placeholder={search.placeholder ? search.placeholder : 'Search'}
                                maxLength={30}
                                readOnly={false}
                                disabled={false}
                                value={searchTemporaryValue ? searchTemporaryValue : ''}
                                onChanged={(event) => handleChangeFormValue(event, 'search')}
                                keyPressed={event => actionRequestHandler(event, 'search', 'search')}
                            />
                        </div>
                    </div>
                ) : null
            }
            {
                undoButton && undoButton.show && !undoButton.isFooter &&
                    undoButton.actions && undoButton.actions.constructor === Array &&
                    undoButton.actions.length > 0 ? (
                    undoButton.actions.map((btn, idx) => {
                        return seconds > 0 || (btn.timer !== undefined) ? (
                            <a
                                className={btn.class ? btn.class : 'button outline button-undo' + ' ' + (idx == 0 ? 'disabled' : '') + (btn.disabled === true ? ' is-disabled button-undo' : '')}
                                href="#"
                                data-testid={`undo-button-${btn.action}`}
                                key={idx}
                                {...(btn.disabled === true ? { onClick: event => { event.preventDefault() } } : { onClick: event => actionRequestHandler(event, 'undo-button', btn.action) })}>
                                <div className="belt-icon">{btn.icon ? btn.icon : ''}</div>
                                <span data-testid="undo-button-text">{btn.label ? (
                                    `${btn.label} ${btn.timer !== undefined && btn.timer.constructor === Number && seconds > 0 ? (
                                        `in ${seconds}s`
                                    ) : ''}`
                                ) : ''}</span>
                            </a>
                        ) : null
                    })
                ) : null
            }
            {props.children}

            {/* Button configuration for button footer */}
            <div className="card-footer">
                <div className="action-button">
                {
                    buttonFooter &&
                    buttonFooter.show &&
                    buttonFooter.actions.length > 0 &&
                    <div className={buttonFooter.className}>
                        {
                            buttonFooter.actions.map((btn, idx) => (
                                btn.show &&
                                <a
                                    className={btn.className}
                                    href="#" key={idx}
                                    {...(btn.disabled === true ? { onClick: event => { event.preventDefault() } } : { onClick: event => actionRequestHandler(event, 'button', btn.action) })}
                                    data-testid={btn.id && btn.id.constructor === String ? btn.id : 'default-button-footer'}
                                >
                                    <div className="icon">{btn.icon ? btn.icon : ''}</div>
                                    <span data-testid={'button-action-' + btn.action}>{btn.label ? btn.label : ''}</span>
                                </a>
                            ))
                        }
                    </div>

                }

                {
                    // UndoButton Actions Configuration
                    undoButton && undoButton.show && undoButton.isFooter &&
                        undoButton.actions && undoButton.actions.constructor === Array &&
                        <div className={buttonFooter.className}>
                            {
                                undoButton.actions.length > 0 ? (
                                    undoButton.actions.map((btn, idx) => {
                                        return seconds > 0 || (btn.timer !== undefined) ? (
                                            <a
                                                className={btn.class ? btn.class : 'button outline button-undo' + ' ' + (idx == 0 ? 'disabled' : '') + (btn.disabled === true ? ' is-disabled button-undo' : '')}
                                                href="#"
                                                data-testid={`undo-button-${btn.action}`}
                                                key={idx}
                                                {...(btn.disabled === true ? { onClick: event => { event.preventDefault() } } : { onClick: event => actionRequestHandler(event, 'undo-button', btn.action) })}>
                                                <div className="belt-icon">{btn.icon ? btn.icon : ''}</div>
                                                <span data-testid="undo-button-text">{btn.label ? (
                                                    `${btn.label} ${btn.timer !== undefined && btn.timer.constructor === Number && seconds > 0 ? (
                                                        `in ${seconds}s`
                                                    ) : ''}`
                                                ) : ''}</span>
                                            </a>
                                        ) : null
                                    })
                                ) : null
                            }
                        </div>
                }
                </div>
            </div>
        </div>
    )
}

export default MenuBar;
