import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { daysWeekNames, datetimeFormatter, computeExcessMinsInHours, computeExcessMins, monthNames, computeHours, toTitleCase, showGeneralErrorAlert } from '../../helpers/GlobalHelper';
import { ICON_PLACEHOLDER } from '../../assets/Asset';
import { REQUEST_LINK } from '../../constants/Links';
import Alert from '../alert/Alert';
import { CalendarAccordionLoader } from '../../constants/Loader';

//assets 
import { SVG_ARROW_LEFT, SVG_ARROW_RIGHT, SVG_ARROWRIGHT_GREEN, SVG_VIEWSHIFT, SVG_REQUEST_BLUE, SVG_HOLIDAY, SVG_BADGE_CERTIFY, SVG_BADGE_PENDING  } from '../../assets/Asset';

const Calendar = (props) => {
    let { date, data, currentDate, hidePagination, displayDetails } = { ...props };
    let calendarDisplay = [];
    let selectedContent = null;
    let mediaToggler;

    let [pressed, setPressed] = useState(false);
    let [selected, setSelected] = useState("");
    if (date && date.constructor === String) {
        calendarDisplay = [{
            label: datetimeFormatter(date, "full-month-year"),
            value: date,
        }];
    }

    const changeUIView = (width) => {
        if(width.matches){
            mediaToggler = "mobile";
        }else{
            mediaToggler = "desktop"
        }
    }

    let mobileWidth = window.matchMedia("(max-width: 767px)");

    changeUIView(mobileWidth);
    mobileWidth.addListener(changeUIView);

    /**
    * displayDaysInMonth
    * Display the days in the calendar of the selected month
    * @param {*} dateValue - selected month
    */
    const displayDaysInMonth = (dateValue) => {
        
        let calendarDays = [];
        let startDayIdx = 0;
        let startDate = 0;
        let endDate = 0;
        let monthNumber = '';
        let fullYear = '';

        let parseDate = dateValue ? new Date(dateValue) : null;
        monthNumber = parseDate ? parseDate.getMonth() + 1 : '';
        fullYear = parseDate ? parseDate.getFullYear() : '';
        endDate = monthNumber && fullYear ? (new Date(fullYear, monthNumber, 0).getDate()) : 0;
        startDate = parseDate ? parseDate.getDate() : 0;
        startDayIdx = parseDate ? parseDate.getDay() : 0;

        for (let i = 0; i < startDayIdx; i++) {
            calendarDays.push(
                <div className="calendar-item is-othermonth" key={'blank-' + fullYear + '-' + monthNumber + '-' + i}>
                    <div className="calendar-day ">
                    </div>
                </div>
            );
        }

        for (let i = startDate; i <= endDate; i++) {
            //datetimeFormatter is having issues on the convertion of single digit value on days and month an on IPHONE 12 and safari 
            //fixed by appending 0 at the beginning of single digit values
            let dateKey = datetimeFormatter(fullYear + '-' + `${monthNumber <= 9 ? '0' + monthNumber : monthNumber}` + '-' + `${i <= 9 ? '0' + i : i}`, 'date-standard');
            let dateData = data && data.constructor === Object && Object.keys(data).length > 0 ? data[dateKey] : null;
            let schedule = null;
            let dst = null;
            let certifyBadge = null;
            let criticalBadge = null;
            let pendingBadge = null;
            let actualDtr = null;
            let onLeave = null;
            let absentDisplay = null;
            let holiday = [];
            let cutoff = null;
            let isSelected = selected === dateKey ? ' is-active' : '';
            let contentClass = '';
            let isToday = dateKey === currentDate ? ' is-today' : '';
            let isRestDay = '';
            let dayName = datetimeFormatter(`${fullYear}-${monthNumber <= 9 ? '0' + monthNumber : monthNumber}-${i <= 9 ? '0' + i : i}`, 'day-name');
           
            if (dateData) {
                if(isSelected){
                    let { dtr_final_status } = { ...dateData };
                    let loaded = false;
                    let error = false;
                    if(props.selectedDateData){
                        loaded = props.selectedDateData.loaded;
                        error = props.selectedDateData.error;
                    } else {
                        loaded = true;
                        error = false;
                    }
                    selectedContent = loaded ? (
                        <div>
                            <div className="calendar-accordion-item">
                                <div className="card-title">
                                    <div className="belt-icon">{SVG_VIEWSHIFT}</div>
                                    <h6>SHIFT DETAILS</h6>
                                </div><div>
                                    
                                    {
                                        // // Schedule
                                        dateData.dtr_shift_template_schedule_type === 'STANDARD' ? (
                                            <Fragment>
                                                <span id="schedule-display">
                                                    {datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_in, 'time') + ' - ' + datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_out, 'time')}
                                                    {
                                                        dateData.dtr_shift_template_grace_period ? (
                                                            ` (${dateData.dtr_shift_template_grace_period}m GP)`
                                                        ) : null
                                                    }
                                                </span>
                                            </Fragment>
                                        ) : <span id="schedule-display">Shift Schedule is {dateData.dtr_shift_template_schedule_desc}</span>
                                    }
                                    {
                                        dtr_final_status && (dtr_final_status.dtr_final_status_clock_in || dtr_final_status.dtr_final_status_clock_out) ? (
                                            <div>
                                                <span id="actual-dtr-display">
                                                {
                                                    dtr_final_status.dtr_final_status_clock_in ? (
                                                        datetimeFormatter(dtr_final_status.dtr_final_status_clock_in, 'time')
                                                    ) : null
                                                }
                                                {
                                                    dtr_final_status.dtr_final_status_clock_out ? (
                                                        (' - ' + datetimeFormatter(dtr_final_status.dtr_final_status_clock_out, 'time'))
                                                    ) : null
                                                }
                                                {
                                                    dtr_final_status.dtr_final_status_total_rendered_minutes ? (
                                                        ` (${computeExcessMins(dtr_final_status.dtr_final_status_total_rendered_minutes)})`
                                                    ) : null
                                                }

                                                {
                                                    dtr_final_status.dtr_final_status_login_status_desc ? (
                                                        ` - ${dtr_final_status.dtr_final_status_login_status_desc}`
                                                    ) : ''
                                                }
                                                {
                                                    dtr_final_status.dtr_final_status_logout_status_desc ? (
                                                        " & " + dtr_final_status.dtr_final_status_logout_status_desc
                                                    ) : ''
                                                }
                                                </span>
                                            </div>
                                        ) : (dtr_final_status && dtr_final_status.dtr_final_status_login_status === 'ABSENT' && dtr_final_status.criticality === 'CRITICAL') ? (
                                            <div id="absent-display">Absent</div>
                                        ) : null
                                    }

                                    {
                                        // LEAVE
                                        dateData.leaveRequest && dateData.leaveRequest.constructor === Object && dateData.leaveRequest.employee_leave_request_status === 'APPROVED' ? (
                                            <div id="on-leave-display">
                                                On leave
                                                {
                                                    dateData.leaveRequest.employee_leave_request_day_type_desc && dateData.leaveRequest.employee_leave_request_day_type === 'WHOLE_DAY' ? (
                                                        ` (Whole Day)`
                                                    ) : ` (Half Day)`
                                                }
                                            </div>
                                        ) : null
                                    }
                                    
                                </div>

                                {
                                    dateData.pending_request && dateData.pending_request > 0 ? (
                                        <Fragment>
                                            <div className="calendar-accordion-item">
                                                <div className="card-title">
                                                    <div className="belt-icon">{SVG_REQUEST_BLUE}</div>
                                                    <h6>REQUESTS</h6>
                                                </div>
                                                {
                                                    props.selectedDateData && props.selectedDateData.data && props.selectedDateData.data.constructor === Array && props.selectedDateData.data.length > 0 ? (
                                                        <div>
                                                            <ul className="side-list">
                                                                {
                                                                    props.selectedDateData.data.map((item, idx) => {
                                                                        let link = "#";
                                                                        if(props && props.role && props.role == "IT"){
                                                                            //should not redirect to request inner
                                                                        }else{
                                                                            link = `/requests/${item.employee_request_junction_request_pillar.toLowerCase()}/${item.employee_request_junction_batch_code}`;
                                                                        }
                                                                        return <li key={`request-${idx}`}>
                                                                            <span>
                                                                                <Link to={link} className="text-link">
                                                                                    {item.messages_template_template_name}
                                                                                    {
                                                                                        item.employee_request_junction_request_pillar === 'LVR' || item.employee_request_junction_request_pillar === 'CSR' ? (
                                                                                            item.employee_request_junction_request_type ? (
                                                                                                ` (${toTitleCase(item.employee_request_junction_request_type)})`
                                                                                            ) : ''
                                                                                        ) : item.employee_request_junction_request_pillar === 'OTR' || item.employee_request_junction_request_pillar === 'TOR' ? (
                                                                                            item.employee_request_junction_sub_type === 'PRE' ? (
                                                                                                ` (Pre-Shift)`
                                                                                            ) : ` (Post-Shift)`
                                                                                        ) : ''
                                                                                    }
                                                                                </Link>
                                                                                {` - ${toTitleCase(item.employee_request_junction_status)}`}
                                                                            </span>
                                                                        </li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div>{`${dateData.pending_request} pending request(s)`}</div>
                                                            <Link to={REQUEST_LINK} className="text-link">
                                                                View all requests
                                                                {SVG_ARROWRIGHT_GREEN}
                                                            </Link>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </Fragment>
                                    ) : null
                                }
                                {
                                    dateData.is_holiday && dateData.holidays && dateData.holidays.constructor === Array && dateData.holidays.length > 0 ? (
                                        <Fragment>
                                        <div className="calendar-accordion-item" id="holidays-display">
                                            <div className="card-title">
                                                <div className="belt-icon">{SVG_HOLIDAY}</div>
                                                <h6>HOLIDAYS</h6>
                                            </div>
                                            {
                                                dateData.holidays.map((item, idx) => (
                                                        <div key={`holiday-${idx}`}>
                                                            <p>{`${item.schedule_holiday_desc} (${item.schedule_holiday_country_code}) - ${datetimeFormatter(item.schedule_holiday_date, 'inquiry-date-standard')}`}</p>
                                                            <span>{item.schedule_holiday_type_desc}</span>
                                                        </div>
                                                ))
                                            }
                                        </div>
                                        </Fragment>
                                    ) : null
                                }
                            </div>
                        </div>
                    ) : error ? (
                        <Alert config={showGeneralErrorAlert({})} />
                    ) : <CalendarAccordionLoader />
                }

                // Determine if will display the full details of shift
                if(displayDetails){
                    if (dateData.dtr_shift_template_schedule_type === 'STANDARD') {
                        schedule = 
                            <span id="schedule-display">
                                {
                                    datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_in, 'time') + ' - ' + datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_out, 'time')
                                }
                            </span>
                    } else if (dateData.dtr_shift_template_schedule_type === 'SEMI_FLEXI_STANDARD') {
                        schedule = 
                            <span>
                                {
                                    datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_in, 'time') + ' - ' + datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_out, 'time')
                                }
                                {
                                    dateData.dtr_shift_template_flexi_hours !== 0 && ` ${computeHours(dateData.dtr_shift_template_flexi_hours)} flexi`
                                }
                            </span>
                    } else {
                        isRestDay = dateData.dtr_shift_template_schedule_type && dateData.dtr_shift_template_schedule_type === 'REST_DAY' ? ' is-rest-day' : ''
                        schedule = <span id="schedule-display">{dateData.dtr_shift_template_schedule_desc}</span>;
                    }
    
                    // Actual DTR conditions
                    if (dateData.dtr_final_status && dateData.dtr_final_status.constructor === Object) {
                        let { dtr_final_status } = { ...dateData };
                        if (dtr_final_status.dtr_final_status_is_certify) {
                            if (isSelected) {
                                certifyBadge = SVG_BADGE_CERTIFY;
                            } else {
                                certifyBadge = SVG_BADGE_CERTIFY;
                            }
                        }
    
                        let dtrClass = dtr_final_status.dtr_criticality === 'COMPLETED' ? (
                            ' dtr-success'
                        ) : dtr_final_status.dtr_criticality === 'WARNING' ? (
                            ' dtr-warning'
                        ) : dtr_final_status.dtr_criticality === 'CRITICAL' ? (
                            ' dtr-critical'
                        ) : '';
                        contentClass = dtr_final_status.criticality === 'CRITICAL' ? ' dtr-critical' : '';
                        if (dtr_final_status.dtr_final_status_clock_in || dtr_final_status.dtr_final_status_clock_out) {
                            actualDtr = 
                                <div className={"calendar-content" + dtrClass}>
                                    <div>
                                        {
                                            dtr_final_status.dtr_final_status_clock_in ? (
                                                datetimeFormatter(dtr_final_status.dtr_final_status_clock_in, 'time')
                                            ) : null
                                        }
                                        {
                                            dtr_final_status.dtr_final_status_clock_out ? (
                                                (' - ' + datetimeFormatter(dtr_final_status.dtr_final_status_clock_out, 'time'))
                                            ) : null
                                        }
                                    </div>
                            </div>
                        } else if (dtr_final_status.dtr_final_status_login_status === 'ABSENT' && dtr_final_status.criticality === 'CRITICAL') {
                            absentDisplay = <div id="absent-display" className={"calendar-content dtr-critical"}>
                                <div>Absent</div>
                            </div>
                        }
                        if (dtr_final_status.criticality === 'CRITICAL' && (dtr_final_status.dtr_final_status_clockin_absent_tag || dtr_final_status.dtr_final_status_clockout_absent_tag)) {
                            absentDisplay = <div id="absent-display" className={"calendar-content dtr-critical"}>
                                {
                                    dtr_final_status.dtr_final_status_clockin_absent_tag_desc ? (
                                        <div>{dtr_final_status.dtr_final_status_clockin_absent_tag_desc}</div>
                                    ) : null
                                }
                                {
                                    dtr_final_status.dtr_final_status_clockout_absent_tag_desc ? (
                                        <div>{dtr_final_status.dtr_final_status_clockout_absent_tag_desc}</div>
                                    ) : null
                                }
                            </div>
                        }
                    }
    
                    // If on leave
                    if (dateData.leaveRequest && dateData.leaveRequest.constructor === Object && dateData.leaveRequest.employee_leave_request_status === 'APPROVED') {
                        onLeave = <div id="on-leave-display" className={"calendar-content dtr-success"}>
                            <div>On Leave</div>
                        </div>
                    }
    
                    // Pending Request Badge
                    if (dateData.pending_request && dateData.pending_request > 0) {
                        if (isSelected) {
                            pendingBadge = SVG_BADGE_PENDING;
                        } else {
                            pendingBadge = SVG_BADGE_PENDING;
                        }
                    }
    
                    // Holiday conditions
                    if (dateData.is_holiday) {
    
                        {
                            dateData.holiday_desc_arr && dateData.holiday_desc_arr.constructor === Array &&
                                dateData.holiday_desc_arr.map((d,i) => {
                                    holiday.push(
                                        <div key={i} id="holiday-display" className={"calendar-content" + ' dtr-holiday'}>
    
                                            <div>{d}</div>
                                        </div>
                                    )
                                })
    
                        }
                    }
    
                    if (dateData.is_cutoff) {
                        cutoff = <div id="cutoff-display" className={"calendar-content" + ' dtr-cutoff'}>
                            <div>Cutoff</div>
                        </div>
                    }
                } else {
                    isRestDay = dateData.dtr_shift_template_schedule_type && dateData.dtr_shift_template_schedule_type === 'REST_DAY' ? ' is-rest-day' : ''
                    // Actual DTR conditions
                    if (dateData.dtr_final_status && dateData.dtr_final_status.constructor === Object) {
                        let { dtr_final_status } = { ...dateData };
                        if (dtr_final_status.dtr_final_status_is_certify) {
                            if (isSelected) {
                                certifyBadge = SVG_BADGE_CERTIFY;
                            } else {
                                certifyBadge = SVG_BADGE_CERTIFY;
                            }
                        }
    
                        let dtrClass = dtr_final_status.dtr_criticality === 'COMPLETED' ? (
                            ' dtr-success'
                        ) : dtr_final_status.dtr_criticality === 'WARNING' ? (
                            ' dtr-warning'
                        ) : dtr_final_status.dtr_criticality === 'CRITICAL' ? (
                            ' dtr-critical'
                        ) : '';
                        contentClass = dtr_final_status.criticality === 'CRITICAL' ? ' dtr-critical' : '';
                        if (dtr_final_status.dtr_final_status_clock_in || dtr_final_status.dtr_final_status_clock_out) {
                            if(dtr_final_status.dtr_final_status_clock_in && !dtr_final_status.dtr_final_status_clock_out && datetimeFormatter(`${fullYear}-${monthNumber}-${i}`, 'date-standard') === props.currentDate){
                                actualDtr = <div className={"calendar-content dtr-ongoing"}> <span></span> </div>
                            } else {
                                actualDtr = <div className={"calendar-content" + dtrClass}>
                                    <div>
                                        {
                                            dtr_final_status.dtr_final_status_total_rendered_minutes ? (
                                                `${computeExcessMinsInHours(dtr_final_status.dtr_final_status_total_rendered_minutes)}`
                                            ) : null
                                        }
                                    </div>
                                </div>
                            }
                        } else if (dtr_final_status.dtr_final_status_login_status === 'ABSENT' && dtr_final_status.criticality === 'CRITICAL') {
                            absentDisplay = <div className={"calendar-content dtr-critical"}>
                                
                            </div>
                        } else
                        if (dtr_final_status.criticality === 'CRITICAL' && (dtr_final_status.dtr_final_status_clockin_absent_tag || dtr_final_status.dtr_final_status_clockout_absent_tag)) {
                            // Added condition if criticality is 'CRITICAL' to enter this condition according to Tala and Tito Jim
                            if (isSelected) {
                                criticalBadge = <img src="/images/icons/status/icon-status-critical-white.svg" alt="" />
                            } else {
                                criticalBadge = <img src="/images/icons/status/icon-status-critical.svg" alt="" />
                            }
                            absentDisplay = <div className={"calendar-content dtr-critical"}>
                                {
                                    dtr_final_status.dtr_final_status_clockin_absent_tag_desc ? (
                                        <div>{dtr_final_status.dtr_final_status_clockin_absent_tag_desc}</div>
                                    ) : null
                                }
                                {
                                    dtr_final_status.dtr_final_status_clockout_absent_tag_desc ? (
                                        <div>{dtr_final_status.dtr_final_status_clockout_absent_tag_desc}</div>
                                    ) : null
                                }
                            </div>
                        }
                    }
    
                    // If on leave
                    if (dateData.leaveRequest && dateData.leaveRequest.constructor === Object && dateData.leaveRequest.employee_leave_request_status === 'APPROVED') {
                        onLeave = <div className={"calendar-content dtr-success-leave"}>
                            <div>LEAVE</div>
                        </div>
                    }
    
                    // Pending Request Badge
                    if (dateData.pending_request && dateData.pending_request > 0) {
                        if (isSelected) {
                            pendingBadge = SVG_BADGE_PENDING;
                        } else {
                            pendingBadge = SVG_BADGE_PENDING;
                        }
                    }
    
                    // Holiday conditions
                    if (dateData.is_holiday) {
                        holiday.push(
                            <div key={'holiday'} className={"calendar-content" + ' dtr-holiday'}>
    
                                <div>HOLIDAY</div>
                            </div>
                        )
                    }
    
                    if (dateData.is_cutoff) {
                        cutoff = <div className={"calendar-content" + ' dtr-cutoff'}>
                            <div>Cutoff</div>
                        </div>
                    }
                }
            }
            calendarDays.push(
                <Fragment key={fullYear + '-' + (monthNumber <= 9 ? '0' + monthNumber : monthNumber) + '-' + (i <= 9 ? '0' + i : i)}>
                    <div
                        className={"calendar-item" + isToday + contentClass + isSelected + isRestDay}
                        onClick={event => handleSelectedDate(event, dateKey)}
                    >
                        <div className="calendar-day ">
                            <h3>{i}</h3>
                        </div>
                        {
                            schedule ? (
                                <div className="calendar-content">
                                    {schedule}
                                </div>
                            ) : null
                        }
                        {actualDtr}
                        {absentDisplay}
                        {onLeave}
                        {holiday}
                        {cutoff}
                        <div className="calendar-content dtr-icons">
                            {pendingBadge}
                            {criticalBadge}
                            {certifyBadge}
                        </div>
                    </div>
                </Fragment>
            );
            if(mediaToggler && mediaToggler == "desktop"){
                if(selectedContent && ((dayName && dayName.toUpperCase() === 'SAT') || (endDate === i))){
                    calendarDays.push(
                        <Fragment key={`${fullYear}-${monthNumber <= 9 ? '0' + monthNumber : monthNumber}-${i <= 9 ? '0' + i : i}-details`}>
                            <div className="calendar-accordion">
                                {selectedContent}
                            </div>
                        </Fragment>
                    );
                    selectedContent = null;
                }
            }else if(mediaToggler && mediaToggler == "mobile"){
                if(selectedContent){
                    calendarDays.push(
                        <Fragment key={`${fullYear}-${monthNumber <= 9 ? '0' + monthNumber : monthNumber}-${i <= 9 ? '0' + i : i}-details`}>
                            <div className="calendar-accordion">
                                {selectedContent}
                            </div>
                        </Fragment>
                    );
                    selectedContent = null;
                }
            }
        }

        return calendarDays;
    }

    /**
    * handleSelectedDate
    * Updated the selected date variable
    * @param {*} event - event
    * @param {*} date - selected date
    */    
    const handleSelectedDate = (event, date) => {
        if(event && event.preventDefault){
            event.preventDefault();
        }
        if(selected === date) {
            setSelected("");
        } else {
            setSelected(date);
        }
        if(props.getSelectedDate){
            props.getSelectedDate(selected === date ? null : date)
        }
    }

    /**
    * monthChangeHandler
    * Handles the changes of the month
    * @param {*} event - event
    * @param {*} action - action, either previous or next month
    */    
    const monthChangeHandler = (event, action) => {
        event.preventDefault();
        if(action === 'prev'){
            let selectedMonthDate = new Date(date);
            let monthIdx = selectedMonthDate.getMonth();
            let fullYear = selectedMonthDate.getFullYear();
            if(monthIdx-1 >= 0){
                monthIdx = monthIdx - 1;
            } else {
                monthIdx = 11;
                fullYear = fullYear - 1;
            }
            let newDateValue = datetimeFormatter(monthNames[monthIdx] + ' ' + fullYear, 'date-standard');
            props.getChangeMonthHandler(newDateValue);
        } else if (action === 'next'){
            let selectedMonthDate = new Date(date);
            let monthIdx = selectedMonthDate.getMonth();
            let fullYear = selectedMonthDate.getFullYear();
            if(monthIdx+1 < 12){
                monthIdx = monthIdx + 1;
            } else {
                monthIdx = 0;
                fullYear = fullYear+1;
            }
            let newDateValue = datetimeFormatter(monthNames[monthIdx] + ' ' + fullYear, 'date-standard');
            props.getChangeMonthHandler(newDateValue);
        } else {
            console.error('Action not found.')
        }
    }
    
    return (
        
        calendarDisplay.map((month, monthIdx) => (
            <Fragment key={'calendar-month-' + monthIdx}>
                <div className="modal-profile-month" id="modal-month-display">
                        <h5>{month.label}</h5>
                        {
                            !hidePagination ? (
                                <div>
                                    <button onClick={event => monthChangeHandler(event, 'prev')} >{SVG_ARROW_LEFT}</button>
                                    <button onClick={event => monthChangeHandler(event, 'next')} >{SVG_ARROW_RIGHT}</button>
                                </div>
                            ) : null
                        }
                </div>
                <div className="calendar">
                    <div className="calendar-weeks">
                        {
                            daysWeekNames.map((day, idx) => (
                                <div className="calendar-item" key={'day' + idx}>
                                    {day}
                                </div>
                            ))
                        }
                    </div>
                    <div className={'calendar-days'}>
                        {
                            displayDaysInMonth(month.value)
                        }
                    </div>
                </div>
            </Fragment>
        ))
    )
}


export default Calendar;
