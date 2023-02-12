import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { daysWeekNames, datetimeFormatter, computeExcessMins, diffInDays, isArray, computeHours } from '../../helpers/GlobalHelper';

//assets
import { SVG_BADGE_CERTIFY, SVG_BADGE_PENDING, SVG_BADGE_PREAPPROVE, SVG_BADGE_PREAPPROVE_GRAY } from '../../assets/Asset';
import { PRE_APPROVED_IDENTIFIER } from '../../constants/Variables';


const Calendar = (props) => {
    let { type, date, data, selected, viewOnly, currentDate } = { ...props };
    selected = selected && selected.constructor === Array ? selected : [];
    let calendarDisplay = [];

    let [pressed, setPressed] = useState(false);
    let [temporarySelectedDays, setTemporarySelectedDays] = useState([]);
    // if (date && date.constructor === String) {
    if (type === 'monthly' && date && date.constructor === String) {
        calendarDisplay = [];
        calendarDisplay.push({
            label: datetimeFormatter(date, "full-month-year"),
            value: date,
            type: 'whole-month'
        });
    } else if (type === 'date-range') {
        calendarDisplay = [];
        if (date.constructor === Object) {
            if (datetimeFormatter(date.from, "full-month-year") === datetimeFormatter(date.to, "full-month-year")) {
                calendarDisplay.push({
                    label: datetimeFormatter(date.from, "full-month-year"),
                    value: date,
                    type: 'one-month'
                });
            } else {
                calendarDisplay.push({
                    label: datetimeFormatter(date.from, "full-month-year"),
                    value: date.from,
                    type: 'two-months-start'
                });
                calendarDisplay.push({
                    label: datetimeFormatter(date.to, "full-month-year"),
                    value: date.to,
                    type: 'two-months-end'
                });
            }
        }
    }
    // }

    function displayDaysInMonth(dateValue, dateType) {
        const { view } = props._userInformation;
        let calendarDays = [];
        let startDayIdx = 0;
        let startDate = 0;
        let endDate = 0;
        let monthNumber = '';
        let fullYear = '';

        if (type === 'monthly' || dateType === 'two-months-start') {
            let standardDate = dateValue ? datetimeFormatter(dateValue, 'date-standard') : null;
            let parsedstandardDate = standardDate ? new Date(standardDate).toLocaleString('en-US', { timeZone: 'GMT' }) : null;
            let parseDate = parsedstandardDate ? new Date(parsedstandardDate) : null;

            monthNumber = parseDate ? parseDate.getMonth() + 1 : '';
            fullYear = parseDate ? parseDate.getFullYear() : '';
            endDate = monthNumber && fullYear ? (new Date(fullYear, monthNumber, 0).getDate()) : 0;
            startDate = parseDate ? parseDate.getDate() : 0;
            startDayIdx = parseDate ? parseDate.getDay() : 0;

        } else if (type === 'date-range') {
            if (dateType === 'one-month') {
                let startParseDate = dateValue.from ? new Date(dateValue.from) : null;
                startDate = startParseDate ? startParseDate.getDate() : 0;
                startDayIdx = startParseDate ? startParseDate.getDay() : 0;
                monthNumber = startParseDate ? startParseDate.getMonth() + 1 : '';
                fullYear = startParseDate ? startParseDate.getFullYear() : '';
                let endParseDate = dateValue.to ? new Date(dateValue.to) : null;
                endDate = endParseDate ? endParseDate.getDate() : 0;
            } else if (dateType === 'two-months-end') {
                let monthYear = dateValue ? datetimeFormatter(dateValue, 'month-year') : null;
                let startParseDate = monthYear ? new Date(monthYear) : null;
                startDate = startParseDate ? startParseDate.getDate() : 0;
                startDayIdx = startParseDate ? startParseDate.getDay() : 0;
                monthNumber = startParseDate ? startParseDate.getMonth() + 1 : '';
                fullYear = startParseDate ? startParseDate.getFullYear() : '';
                let endParseDate = dateValue ? new Date(dateValue) : null;
                endDate = endParseDate ? endParseDate.getDate() : 0;
            }
        }

        for (let i = 0; i < startDayIdx; i++) {
            calendarDays.push(
                <div className="calendar-item is-othermonth" key={'blank-' + fullYear + '-' + monthNumber + '-' + i}>
                    <div className="calendar-day ">
                    </div>
                </div>
            );
        }

        for (let i = startDate; i <= endDate; i++) {

            let newMonthNumber = monthNumber;
            let newI = i;

            if (monthNumber < 10) {
                newMonthNumber = "0" + newMonthNumber;
            }

            if (i < 10) {
                newI = "0" + i
            }

            let dateKey = datetimeFormatter(fullYear + '-' + newMonthNumber + '-' + newI, 'date-standard', null, null, null, true);
            let dateData = data && data.constructor === Object && Object.keys(data).length > 0 ? data[dateKey] : null;
            let schedule = null;
            let certifyBadge = null;
            let pendingBadge = null;
            let actualDtr = null;
            let onLeave = null;
            let absentDisplay = null;
            let holiday = [];
            let cutoff = null;
            let isSelected = temporarySelectedDays.includes(dateKey) || selected.includes(dateKey) ? ' is-active' : '';
            let contentClass = '';
            let isToday = dateKey === currentDate ? ' is-today' : '';
            let isRestDay = '';
            let isPreApproved = null;
            if (dateData) {
                /* This check if dateData has pre-approved identifer to display pre-approved icon */
                let filtered = [];

                Object.keys(dateData)
                    .filter(data => PRE_APPROVED_IDENTIFIER.includes(data))
                    .map(keys => !dateData[keys] ? filtered : filtered = dateData[keys])

                if (filtered.length > 0 && filtered.constructor === Array) {
                    isPreApproved = SVG_BADGE_PREAPPROVE
                }

                if (filtered.constructor === Object) {
                    isPreApproved = filtered.employee_leave_request_is_pre_approved === true ? SVG_BADGE_PREAPPROVE : ''
                }

                if (dateData.dtr_shift_template_schedule_type === 'STANDARD') {
                    schedule =
                        <span id="schedule-display">
                            {
                                datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_in, 'time') + ' - ' + datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_out, 'time')
                            }
                        </span>
                } else if (dateData.dtr_shift_template_schedule_type === 'SEMI_FLEXI_STANDARD') {
                    schedule =
                        <span id="schedule-display">
                            {
                                `Hybrid ${datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_in, 'time')} - ${datetimeFormatter(dateKey + ' ' + dateData.dtr_shift_template_time_out, 'time')}`
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
                                    {
                                        view === 'PAYROLL' &&
                                        <>
                                            <div>
                                                {
                                                    dtr_final_status.dtr_final_status_total_rendered_minutes
                                                    && dtr_final_status.dtr_final_status_total_rendered_minutes !== 0
                                                    && `${computeHours(dtr_final_status.dtr_final_status_total_rendered_minutes)}`
                                                }
                                            </div>
                                            <div>
                                                {
                                                    dtr_final_status.dtr_final_status_excess_minutes
                                                    && dtr_final_status.dtr_final_status_excess_minutes !== 0
                                                    && `Excess ${computeHours(dtr_final_status.dtr_final_status_excess_minutes)}`
                                                }
                                            </div>
                                        </>
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

                // If on leave v3
                if (dateData.dtr_leave_v3_id && dateData.dtr_leave_v3_meta_data) {
                    let leaveMeta = JSON.parse(dateData.dtr_leave_v3_meta_data);

                    if (leaveMeta.leave_request_status) {
                        switch (leaveMeta.leave_request_status.toUpperCase()) {
                            case 'APPROVED':
                                onLeave = <div id="on-leave-display" className={"calendar-content dtr-success"}>
                                    <div>On Leave</div>
                                </div>
                                break;

                            case 'PENDING':
                                pendingBadge = SVG_BADGE_PENDING;
                                break;

                        }


                    }
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
                            dateData.holiday_desc_arr.map((d, i) => {
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
            }

            calendarDays.push(
                <div
                    key={fullYear + '-' + monthNumber + '-' + i}
                    className={"calendar-item" + isToday + contentClass + isSelected + isRestDay}

                    onMouseEnter={event => handleDayActions(event, 'hold', dateKey)}
                    onMouseDown={event => handleDayActions(event, 'click', dateKey)}
                    onMouseUp={event => handleDayActions(event, 'unclick', dateKey)}
                >
                    <div className="calendar-day ">
                        <h4>{i}</h4>
                    </div>
                    <div className="calendar-content">
                        {schedule}
                    </div>
                    {actualDtr}
                    {absentDisplay}
                    {onLeave}
                    {holiday}
                    {cutoff}
                    <div className="calendar-content dtr-icons">
                        {pendingBadge}
                        {certifyBadge}
                        {isPreApproved}
                    </div>
                </div>
            );
        }
        return calendarDays;
    }

    function handleDayActions(event, action, date) {
        event.preventDefault();
        if (!viewOnly) {
            if (action === 'click') {
                let tempSelected = [...temporarySelectedDays];
                tempSelected.push(date)
                setTemporarySelectedDays(tempSelected)
                setPressed(true);
            } else if (action === 'hold') {
                if (pressed) {
                    let firstSelected = temporarySelectedDays[0];
                    let lastSelected = date;

                    let daysDiff = diffInDays(lastSelected, firstSelected);
                    let tempSelected = [firstSelected];

                    if (firstSelected < lastSelected) {
                        for (let i = 1; i <= daysDiff; i++) {
                            var parseDate = new Date(firstSelected);
                            parseDate.setDate(parseDate.getDate() + i);
                            let standardDate = datetimeFormatter(parseDate.toDateString(), 'date-standard')
                            if (!tempSelected.includes(standardDate)) {
                                tempSelected.push(standardDate);
                            }
                        }
                    } else {
                        for (let i = 1; i <= daysDiff; i++) {
                            var parseDate = new Date(firstSelected);
                            parseDate.setDate(parseDate.getDate() - i);
                            let standardDate = datetimeFormatter(parseDate.toDateString(), 'date-standard')
                            if (!tempSelected.includes(standardDate)) {
                                tempSelected.push(standardDate);
                            }
                        }
                    }
                    setTemporarySelectedDays(tempSelected);
                }
            } else if (action === 'unclick') {
                let tempSelected = [...temporarySelectedDays];
                let storeSelected = selected ? [...selected] : [];

                if (tempSelected.length == 1) {
                    if (storeSelected.includes(date)) {
                        let idx = storeSelected.indexOf(date);
                        storeSelected.splice(idx, 1);
                    } else {
                        storeSelected.push(date)
                    }
                } else {
                    tempSelected.map(date => {
                        if (!storeSelected.includes(date)) {
                            storeSelected.push(date);
                        }
                    })
                }

                setPressed(false);
                setTemporarySelectedDays([]);

                return props.hasOwnProperty('getSelected') ? props.getSelected(storeSelected) : false;
            }
        }
    }

    return (
        calendarDisplay.map((month, monthIdx) => (
            <Fragment key={'calendar-month-' + monthIdx}>
                <div className="calendar-month-title" id="month-display">
                    <h4>{month.label}</h4>
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
                            displayDaysInMonth(month.value, month.type)
                        }
                    </div>
                </div>
            </Fragment>
        ))
    )
}

const mapStateToProps = state => {
    return {
        _userInformation: state.userInformation
    };
};

export default withRouter(connect(mapStateToProps, null)(Calendar));
