import React, { useState, Fragment } from 'react';

import '../calendar/CalendarNative.css';
import { datetimeFormatter } from '../../helpers/GlobalHelper';
import { Popover } from '@material-ui/core';
import { SVG_CALENDAR_GRAY, SVG_ARROW_DOWN, SVG_CLOSE_GRAY } from '../../assets/Asset';

const NativePopover = props => {
    return (
        <Fragment>
            {
                props.open &&
                <Fragment>
                    <div className="e-popover" style={props.origin !== undefined && props.origin == "right" ? { right: 200 + 'px' } : { left: 0 + 'px' }}>
                        {props.children}
                    </div>
                    <div className="e-overlay" onClick={props.onClose}></div>
                </Fragment>
            }
        </Fragment>
    )
}

const DAYS_NAME = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEAR_LIST = () => {
    let year = (new Date()).getFullYear();
    let arrayYear = [];

    for (var i = (year + 20); i > (year - 80); i--) {
        arrayYear = [...arrayYear, i];
    }

    return arrayYear;
}

const dateStandardFormat = (day, month, year, monthCondition) => {
    let returnDateString = "";
    if (monthCondition < 0) {
        if (month - 1 < 0) {
            returnDateString = year - 1 + "-12-" + ("0" + day).slice(-2);
        } else {
            returnDateString = year - 1 + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
        }
    } else if (monthCondition > 0) {
        if (month + 1 >= MONTHS_NAME.length) {
            returnDateString = year + 1 + "-01-" + ("0" + day).slice(-2);
        } else {
            returnDateString = year + 1 + "-" + ("0" + (month + 2)).slice(-2) + "-" + ("0" + day).slice(-2);
        }
    } else {
        returnDateString = year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("0" + day).slice(-2);
    }
    return returnDateString;
}

const getMonthDetails = (month, year, isMultiple) => {

    /**
    * getDayDetails
    * determine if the day from the calendar is from previous month or previous year
    * @param {*} args - the object element of the date from the calendar
    */
    function getDayDetails(args) {
        let date = args.index - args.firstDay;
        let day = args.index % 7;
        let prevMonth = args.month - 1;
        let prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }

        let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let completeDate = dateStandardFormat(_date, args.month, args.year, month);

        return {
            date: _date,
            completeDate: completeDate,
            day,
            month,
        }
    }

    /**
    * getNumberOfDays
    * determine the number of days in a month including the previous or next month that will overlap the selected month
    * @param {*} year - year
    * @param {*} month - month based on the array key
    */
    function getNumberOfDays(year, month) {
        return 40 - new Date(year, month, 40).getDate();
    }

    // Manipulate the first month data to populate all the days of the month with its details
    let firstDay = (new Date(year, month)).getDay();
    let numberOfDays = (40 - new Date(year, month, 40).getDate());
    let monthArray = [];
    let rows = 7;
    let currentDay = null;
    let index = 0;
    let cols = 6;

    // Inser the day into an Array
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month

            });


            monthArray.push(currentDay);
            index++;
        }
    }

    let returnArray = [
        {
            label: MONTHS_NAME[month] + ' ' + year,
            days: monthArray
        }
    ];

    // if the selection is multiple it will display two months
    if (isMultiple) {
        // Manipulate the second month data to populate all the days of the month with its details
        let nextMonth = (month + 1 < MONTHS_NAME.length) ? (month + 1) : 0;
        let nextYear = (month + 1 < MONTHS_NAME.length) ? year : (year + 1);
        let nextFirstDay = (new Date(nextYear, nextMonth)).getDay();
        let nextNumberOfDays = (40 - new Date(nextYear, nextMonth, 40).getDate());
        let nextMonthArray = [];
        let nextRows = 7;
        let nextCurrentDay = null;
        let nextIndex = 0;
        let nextCols = 6;

        // Inser the day into an Array
        for (let nextRow = 0; nextRow < nextRows; nextRow++) {
            for (let nextCol = 0; nextCol < nextCols; nextCol++) {

                nextCurrentDay = getDayDetails({
                    index: nextIndex,
                    numberOfDays: nextNumberOfDays,
                    firstDay: nextFirstDay,
                    year: nextYear,
                    month: nextMonth

                });


                nextMonthArray.push(nextCurrentDay);
                nextIndex++;
            }
        }
        returnArray = [
            ...returnArray,
            {
                label: MONTHS_NAME[nextMonth] + ' ' + nextYear,
                days: nextMonthArray
            }
        ];
    }

    return returnArray
}

const descriptiveDateFormat = (date) => {
    // Manipulate the date standard format and turned it into declarative format
    // let newdate = new Date(date).toLocaleDateString({},{timeZone:'UTC'});
    // console.log(datetimeFormatter(date,'date'));

    // newdate = new Date(newdate);
    // let dayName = DAYS_NAME[newdate.getDay()];
    // let monthName = "Jan"; //setting default month name
    // let dayDate = ("0" + newdate.getDate()).slice(-2);
    // if(MONTHS_NAME[newdate.getMonth()]){
    // 	monthName = MONTHS_NAME[newdate.getMonth()].slice(0,3);
    // }

    // let year = newdate.getFullYear();

    // return dayName+", "+dayDate+" "+monthName+" "+year;

    return datetimeFormatter(date, 'date',null,null,null,true);
}

const Datepicker = props => {
    // Props variable data manipulation
    let { id, placeholder, value, multiple, disabled, disabledDates, disabledDays, minDate, maxDate, dateNow, enabledDayDates, cutoff } = { ...props };
    placeholder = placeholder && placeholder.constructor === String ? placeholder : "-";
    value = value && value.constructor === Object && value.from && value.to ? value : null;

    // React Hook and Declaration
    let dateToday = new Date();
    let [datepickerPopover, setDatepickerPopover] = useState(false);
    let [selectedMonth, setSelectedMonth] = useState(value && value.from && value.from.constructor === String ? (new Date(value.from)).getMonth() : dateToday.getMonth());
    let [selectedYear, setSelectedYear] = useState(value && value.from && value.from.constructor === String ? (new Date(value.from)).getFullYear() : dateToday.getFullYear());
    let [selectedDates, setSelectedDates] = useState([]);

    /**
    * popoverRequestHandler
    * hide and show the options popover
    * @param {*} event - event
    * @param {*} action - it can be either show or hide
    */
    function popoverRequestHandler(event, action) {
        // event.preventDefault();
        if (action === "show") {
            setDatepickerPopover(event.currentTarget);
        } else {
            setDatepickerPopover(null);
            manipulateReturnValues(selectedDates);
        }
    }

    /**
    * manipulateReturnValues
    * manipulate selected values from array into obj return
    * @param {*} selected - selected dates inserted in an array
    */
    function manipulateReturnValues(selected) {
        selected = selected.sort((a, b) => ((new Date(a).getTime()) - (new Date(b).getTime())));
        let returnDate = null;
        if (selected.length > 0) {
            returnDate = {
                from: selected[0],
                to: selected[1] ? selected[1] : selected[0]
            }
        } else {
            returnDate = value;
        }

        setSelectedDates([]);
        setSelectedMonth(returnDate && returnDate.from ? (new Date(returnDate.from)).getMonth() : dateToday.getMonth());
        setSelectedYear(returnDate && returnDate.from ? (new Date(returnDate.from)).getFullYear() : dateToday.getFullYear());
        return props.onChanged(returnDate);
    }

    /**
    * datepickerNavigationHandler
    * change the calendar display by selection of date and year
    * @param {*} event - event
    * @param {*} action - navigation action such as 'year', 'month', 'next' or 'previous'
    */
    function datepickerNavigationHandler(event, action) {
        if (action === 'month') {
            setSelectedMonth(parseInt(event.target.value))
        } else if (action === 'year') {
            setSelectedYear(parseInt(event.target.value))
        } else if (action === 'previous') {
            if (selectedMonth - 1 < 0 && selectedYear - 1 >= YEAR_LIST()[YEAR_LIST().length - 1]) {
                setSelectedMonth(MONTHS_NAME.length - 1);
                setSelectedYear(selectedYear - 1);
            } else if (selectedMonth - 1 >= 0 && selectedYear - 1 >= YEAR_LIST()[YEAR_LIST().length - 1]) {
                setSelectedMonth(selectedMonth - 1);
            }
        } else if (action === 'next') {
            if (selectedMonth + 1 >= MONTHS_NAME.length && selectedYear + 1 <= YEAR_LIST()[0]) {
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
            } else if (selectedMonth + 1 < MONTHS_NAME.length && selectedYear + 1 <= YEAR_LIST()[0]) {
                setSelectedMonth(selectedMonth + 1);
            }
        }
    }

    /**
    * onSelectDateHandler
    * insert the selected date into an array
    * @param {*} event - event
    * @param {*} date - the selected date
    */
    function onSelectDateHandler(event, date) {
        event.preventDefault();
        selectedDates = [...selectedDates, date];
        setSelectedDates(selectedDates);
        if (multiple) {
            if (selectedDates.length >= 2) {
                popoverRequestHandler(event, "hide");
            }
        } else {
            popoverRequestHandler(event, "hide");
        }
    }

    /**
    * getValueToString
    * manipute the value or selectedDates from standard format into declarative format
    * @param {*} event - event
    * @param {*} selected - the selected date
    */
    function getValueToString(value, selected) {
        let returnManipulatedValue = "";
        if (selected.length > 0) {
            if (selected[0] && selected[1] && selected[0] !== selected[1]) {
                selected = selected.sort((a, b) => ((new Date(a).getTime()) - (new Date(b).getTime())));
                returnManipulatedValue = descriptiveDateFormat(selected[0]) + ' - ' + descriptiveDateFormat(selected[1]);
            } else {
                returnManipulatedValue = descriptiveDateFormat(selected[0]);
            }
        } else if (value) {
            if (value.from !== value.to) {
                returnManipulatedValue = descriptiveDateFormat(value.from) + ' - ' + descriptiveDateFormat(value.to);
            } else {
                returnManipulatedValue = descriptiveDateFormat(value.from);
            }
        }

        return returnManipulatedValue;
    }

    /**
    * isSelectedDate
    * determine if the days in the calendar is being select
    * @param {*} date - calendar date
    */
    function isSelectedDate(date) {
        let selected = selectedDates.sort((a, b) => ((new Date(a).getTime()) - (new Date(b).getTime())));
        let calendarDate = new Date(date);
        if (selected.length >= 2) {
            let selectedDate1 = new Date(selected[0]);
            let selectedDate2 = new Date(selected[1]);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate2.getTime();
        } else if (selected.length === 1) {
            let selectedDate1 = new Date(selected[0]);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate1.getTime();
        } else if (value && value.from && value.to) {
            let selectedDate1 = new Date(value.from);
            let selectedDate2 = new Date(value.to);
            return calendarDate.getTime() >= selectedDate1.getTime() && calendarDate <= selectedDate2.getTime();
        } else {
            return false;
        }
    }

    /**
    * isDisabledDate
    * determine if the days in the calendar is disabled
    * @param {*} data - calendar date data
    */
    function isDisabledDate(data) {
        if (data.month !== 0) {
            return true;
        } else { 
            let newMinDate = null
            if(minDate && cutoff){
                newMinDate = new Date(new Date(minDate).getTime()+(5*24*60*60*1000));
                newMinDate = newMinDate.toLocaleString();
            }   

            if (disabledDates && disabledDates.constructor === Array && disabledDates.length > 0 && disabledDates.includes(data.completeDate)) {
                return true;
            } else if (disabledDays && disabledDays.constructor === Array && disabledDays.length > 0 && disabledDays.map(d => d.toLowerCase()).includes(DAYS_NAME[data.day].toLowerCase())) {
                return true;
            } else if (
                (
                    minDate && 
                    minDate.constructor === String && 
                    (new Date(minDate)) !== 'Invalid Date' && 
                    (new Date(data.completeDate)).getTime() < (new Date(minDate)).getTime()
                )
                || 
                (
                    newMinDate && 
                    newMinDate.constructor === String && 
                    (new Date(newMinDate)) !== 'Invalid Date' && 
                    (new Date(data.completeDate)).getTime() < (new Date(newMinDate)).getTime()
                )
            ){
                if(cutoff){
                    if (
                        newMinDate && 
                        newMinDate.constructor === String && 
                        (new Date(newMinDate)) !== 'Invalid Date' && 
                        (new Date(data.completeDate)).getTime() < (new Date(newMinDate)).getTime()
                    ) {
                        return true;
                    }
                }else{

                    return true;
                }
            } else if (maxDate && maxDate.constructor === String && (new Date(maxDate)) !== 'Invalid Date' && (new Date(data.completeDate)).getTime() > (new Date(maxDate)).getTime()) {
                return true;
            } else if (enabledDayDates && enabledDayDates.constructor == Array && enabledDayDates.length > 0) {
                let dayDateNumber = datetimeFormatter(data.completeDate,'day-calendar');
                let fullmonth = datetimeFormatter(data.completeDate,'full-month');
                let paydate30 = false;
                if(enabledDayDates.includes('30')){
                    //checking if its payday 30
                    paydate30 = true;
                }

                if(enabledDayDates.includes(dayDateNumber)){
                    return false;
                }else{
                    if(paydate30 && fullmonth == "February" && dayDateNumber == "28"){
                        return false;
                    }else{
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }


    function isDateToday(data) {

        if (data.completeDate !== null) {
            let newDate = null;
            let dateNowNew = new Date(); 
            console.log(dateNow);
            if (dateNow !== null && dateNow !== undefined) {
                if (typeof dateNow == "string") {
                    newDate = datetimeFormatter(dateNow, 'date-standard');
                } else {
                    newDate = datetimeFormatter(dateNow.toString(), 'date-standard');
                }
            }else{
                newDate = datetimeFormatter(dateNowNew.toString(), 'date-standard');
            }
            
            if (newDate == data.completeDate) {
                return true;
            }
        } else {
            return false;
        }
    }

    /**
    * clearValuesHandler
    * reset value into null and return it to parent
    * @param {*} event - event
    */
    function clearValuesHandler(event) {
        event.preventDefault();
        return props.onChanged(null);
    }

    return (
        <Fragment>
            <div className={'e-input ' + (disabled && disabled.constructor === Boolean ? 'disabled' : "")} onClick={(event) => { disabled ? null : !value ? popoverRequestHandler(event, 'show') : null}}>
                <input
                    id={id && id.constructor === String ? id : "datePickerStandardID"}
                    type="text"
                    placeholder={placeholder}
                    value={getValueToString(value, selectedDates)}
                    readOnly
                    onClick={event => popoverRequestHandler(event, 'show')}
                    disabled={disabled && disabled.constructor === Boolean ? true : false}
                />
                {
                    disabled && disabled.constructor === Boolean ? (
                        <div className='e-input-icon icon-arrowdown'>
                            {SVG_ARROW_DOWN}
                        </div>
                    ) : (
                            getValueToString(value, selectedDates) && getValueToString(value, selectedDates) !== "" ? (
                                <div onClick={event => clearValuesHandler(event)} className='e-input-icon'>
                                    {SVG_CLOSE_GRAY}
                                </div>
                            ) : (
                                    <div className='e-input-icon'>
                                        {SVG_CALENDAR_GRAY}
                                    </div>
                                )
                        )
                }
            </div>
            {
                // <Popover className={Boolean(datepickerPopover) ? 'open-popover' : ''} open={Boolean(datepickerPopover)} onClose={event => popoverRequestHandler(event, 'hide')}>
            }
            <Popover
                id="datepickerPopover"
                open={Boolean(datepickerPopover)}
                anchorEl={datepickerPopover}
                onClose={event => popoverRequestHandler(event, 'hide')}
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
                <div className="popover popover-input open-popover">
                    {
                        Boolean(datepickerPopover) ? (
                            <div className={multiple && multiple.constructor === Boolean ? "e-datepicker e-datepicker-large" : "e-datepicker"}>
                                <div className="e-datepicker-header">
                                    <button id="button-prev-month" onClick={event => datepickerNavigationHandler(event, "previous")}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14 5.4L12.4865 4L6 10L12.4865 16L14 14.6L9.02703 10L14 5.4Z" fill="#fff" />
                                        </svg>
                                    </button>
                                    <div>
                                        <select id="date-picker-select-month" value={selectedMonth} onChange={event => datepickerNavigationHandler(event, "month")}>
                                            {
                                                MONTHS_NAME.map((item, idx) => (
                                                    <option key={"opt" + idx} value={idx}>{item}</option>
                                                ))
                                            }
                                        </select>
                                        <select id="date-picker-select-year" value={selectedYear} onChange={event => datepickerNavigationHandler(event, "year")}>
                                            {
                                                YEAR_LIST().map((item, idx) => (
                                                    <option key={"opt" + idx} value={item}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <button id="button-next-month" onClick={event => datepickerNavigationHandler(event, "next")}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 5.4L7.51351 4L14 10L7.51351 16L6 14.6L10.973 10L6 5.4Z" fill="#fff" />
                                        </svg>
                                    </button>
                                </div>
                                {
                                    getMonthDetails(selectedMonth, selectedYear, multiple).map((monthDetails, monthIdx) => (
                                        <div className={multiple && multiple.constructor === Boolean ? "e-datepicker-content e-datepicker-content-multiple" : "e-datepicker-content"} key={"month-" + monthIdx}>
                                            {
                                                multiple && multiple.constructor === Boolean ? <h5>{monthDetails.label}</h5> : null
                                            }
                                            <div className="e-datepicker-week">
                                                {
                                                    DAYS_NAME.map((item, idx) => (
                                                        <div key={idx} className="e-datepicker-day">
                                                            {item}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="e-datepicker-days">
                                                {
                                                    monthDetails.days.map((item, idx) => (
                                                        <div key={idx} className={'e-datepicker-day' + (isDisabledDate(item) ? ' disabled' : (isSelectedDate(item.completeDate) ? ' selected' : "")) + (isDateToday(item) ? ' e-date-today' : "")}>
                                                            {
                                                                isDisabledDate(item) ? (
                                                                    <span>
                                                                        {item.date}
                                                                    </span>
                                                                ) : (
                                                                        <span onClick={(event) => onSelectDateHandler(event, item.completeDate)}>
                                                                            {item.date}
                                                                        </span>
                                                                    )
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </div>
            </Popover>
        </Fragment>
    );
}

export default Datepicker;
