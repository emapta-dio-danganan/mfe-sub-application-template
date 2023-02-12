import Axios from 'axios';
import { MSG } from '../constants/Messages';
import { WEB, API, NODE_API } from "../constants/UrlConfigs";
import { SLA_INFO } from '../constants/Variables';
import { LOGGER } from '../constants/Logger';

export const defaultHeaders = (auth, userInfo) => {
    return {
        headers: {
            Authorization: 'Bearer: ' + auth?.accessToken || '',
            ClientSecret: auth?.clientSecret || '',
            ClientCode: userInfo?.profile.employeeCode || '',
            AccessToken: auth?.accessToken || '',
            ClientCompanyCode: userInfo?.company.companyCode || ''
        }
    }
}



export const extractUrlParams = (url) => {
    try {
        const urlSearchParams = new URLSearchParams(url)
        return Object.fromEntries(urlSearchParams.entries());    
    } catch (error) {
        console.error('GlobalHelpers: Error in extractUrlParams()')
    }

}

export const axiosRoutes = async (type, route, headers, params, cancelToken = null, responseType = null) => {

    if (Axios[type.toLowerCase()]) {
        let value;
        if (type === 'get') {
            value = await Axios[type.toLowerCase()](
                route, {
                ...(headers ? headers : defaultHeaders()),
                ...(params ? params : {}),
                cancelToken
            }
            ).then(response => {
                let { data } = response;
                if (data.errors) {
                    data.error = getErrorMessage(data.errors);
                }
                return data;
            }).catch(errors => {
                console.error(route + ": " + JSON.stringify(errors));
                return {
                    cancel: Axios.isCancel(errors),
                    success: false,
                    error: MSG.category.general.note1
                }
            });
        } else {
            params = params ? (
                params.constructor === FormData ? params : { ...params }
            ) : {};

            if (responseType == null) {
                value = await Axios[type.toLowerCase()](
                    route,
                    params,
                    {
                        ...(headers ? headers : defaultHeaders()),
                        cancelToken
                    },
                ).then(response => {
                    let { data } = response;
                    if (data.errors) {
                        data.error = getErrorMessage(data.errors);
                    }
                    return data;
                }).catch(errors => {
                    if (!Axios.isCancel(errors)) {
                        console.error(route + ": " + JSON.stringify(errors));
                    }
                    return {
                        cancel: Axios.isCancel(errors),
                        sucess: false,
                        error: MSG.category.general.note1
                    }
                });
            } else {
                value = await Axios[type.toLowerCase()](
                    route,
                    params,
                    {
                        responseType: responseType ? responseType : 'json',
                        ...(headers ? headers : defaultHeaders()),
                        cancelToken
                    },
                ).then(response => {
                    let { data } = response;

                    if (data.errors) {
                        data.error = getErrorMessage(data.errors);
                    }
                    return data;
                }).catch(errors => {

                    if (!Axios.isCancel(errors)) {
                        console.error(route + ": " + JSON.stringify(errors));
                    }
                    return {
                        cancel: Axios.isCancel(errors),
                        sucess: false,
                        error: MSG.category.general.note1
                    }
                });
            }

        }
        return value;
    } else {
        return "Invalid route type.";
    }
}

/**
* toTitleCase
* converts string to title case - front end to Front End
* @param {*} str - str, must be string
* return string or null
*/
export const toTitleCase = (str) => {
    try {
        if (str && str !== null && str !== undefined && str.constructor === String) {
            return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
                return match.toUpperCase();
            });
        } else {
            return '';
        }
    } catch (error) {
        console.error('Invalid input. Please check helpers (toTitleCase).');
        return '';
    }
}

/**
* pascalToProperCase
* converts string to Proper case
* @param {*} str - string
* return string or null
*/
export const pascalToProperCase = (str) => {
    try {
        if (str && str !== null && str !== undefined && str.constructor === String) {
            return str.replace(/([A-Z])/g, ' $1').trim();
        } else {
            return '';
        }
    } catch (error) {
        console.error('Invalid input. Please check helpers (pascalToProperCase).');
        return '';
    }
}

/**
* getOfTwoStringsInitials
* converts first character of two strings
* @param {*} firstString, - string
* @param {*} secondString, - string
* return string or null
*/
export const getInitialsOfTwoStrings = (firstString, secondString) => {
    try {
        let firstInitial = firstString && firstString.constructor === String ? firstString.charAt(0).toUpperCase() : '';
        let lastInitial = secondString && secondString.constructor === String ? secondString.charAt(0).toUpperCase() : '';
        return firstInitial + lastInitial;
    } catch (error) {
        console.error('Invalid input. Please check helpers (getInitials).');
        return '';
    }

}

/**
* getErrorMessage
* get the error message
* @param {*} error - it can be object or array depends on the return from the api
*/
export const getErrorMessage = (error) => {
    let arrayMsg = [];
    try {
        if (error && error.constructor === Array && error.length > 0) {
            error.map(error => {
                if (error && error.constructor === Object && Object.values(error)) {
                    if (Object.values(error).length > 0 && arrayMsg.indexOf(Object.values(error)[0]) < 0) {
                        arrayMsg.push(Object.values(error)[0]);
                    }
                } else if (error && error.constructor === String) {
                    arrayMsg.push(error);
                }
            });
        } else if (error && error.constructor === Object && Object.keys(error).length > 0) {
            const hasPostOrPre = error.hasOwnProperty('POST' || 'PRE')
            if (hasPostOrPre) {
                Object.keys(error).map(item => error[item].map(err => {
                    arrayMsg.push(Object.values(err));
                }))
            } else {
                arrayMsg = Object.values(error);
            }
        } else if (error && error.constructor === String) {
            arrayMsg = [error];
        } else {
            arrayMsg = [MSG.category.general.note1];
        }
        return arrayMsg;
    } catch (err) {
        console.error('Invalid input. Please check helpers (getErrorMessage).');
        return [MSG.category.general.note1];
    }

}

/**
* hideAlert
* hide alert with default values
* @param {*} alertData - the alert configuration data
*/
export const hideAlert = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = false;
            alertData.actionable = false;
            alertData.status = "";
            alertData.title = "";
            alertData.message = [];
            alertData.actions = [];
            alertData.confirmMsg = "";
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (hideAlert).');
        return null;
    }
}

/**
* showGeneralConfirmationAlert
* show confirmation alert with default values
* @param {*} alertData - the alert configuration data
*/

export const showGeneralConfirmationAlert = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = true;
            alertData.status = "info";
            alertData.title = MSG.title.title5;
            alertData.message = [MSG.category.general.note6];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showConfirmationAlert).');
        return null;
    }
}

/**
* showGeneralErrorAlert
* show Something went wrong message alert with default values
* @param {*} alertData - the alert configuration data
* returns critical alert message
*/
export const showGeneralErrorAlert = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = false;
            alertData.status = "critical";
            alertData.title = MSG.title.title1;
            alertData.message = [MSG.category.general.note1];
            alertData.actions = [];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showGeneralErrorAlert).');
        return null;
    }
}

/**
* showGeneralSuccessAlert
* show successful message alert with default values
* @param {*} alertData - the alert configuration data
* returns critical alert message
*/
export const showGeneralSuccessAlert = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = false;
            alertData.status = "success";
            alertData.title = MSG.title.title6;
            alertData.message = [MSG.category.general.note24];
            alertData.actions = [];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showGeneralSuccessAlert).');
        return null;
    }
}

/**
* showRequiredFieldsAlert
* show Required fields alert with default values
* @param {*} alertData - the alert configuration data
* returns critical alert message
*/
export const showRequiredFieldsAlert = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = false;
            alertData.status = "critical";
            alertData.title = MSG.title.title2;
            alertData.message = [MSG.category.general.note2];
            alertData.actions = [];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showRequiredFieldsAlert).');
        return null;
    }
}

/**
* showGeneralNoRecordsFound
* show Required fields alert with default values
* @param {*} alertData - the alert configuration data
* returns critical alert message
*/
export const showGeneralNoRecordsFound = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = false;
            alertData.status = "info";
            alertData.title = MSG.title.title4;
            alertData.message = [MSG.category.general.note11];
            alertData.actions = [];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showGeneralNoRecordsFound).');
        return null;
    }
}

/**
* showRequiredFieldsAlert
* show Required fields alert with default values
* @param {*} alertData - the alert configuration data
* returns critical alert message
*/
export const showErrorAlertToAddMsg = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = false;
            alertData.status = "critical";
            alertData.actions = [];
            alertData.message = [];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showErrorAlertToAddMsg).');
        return null;
    }
}

/**
* showGeneralInfoAlert
* show Required fields alert with default values
* @param {*} alertData - the alert configuration data
* returns critical alert message
*/
export const showGeneralInfoAlert = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            alertData.show = true;
            alertData.actionable = false;
            alertData.status = "info";
            alertData.title = "";
            alertData.message = [];
            alertData.actions = [];
        }
        return alertData ? alertData : null;
    } catch (error) {
        console.error('Invalid input. Please check helpers (showGeneralInfoAlert).');
        return null;
    }
}

export const daysWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const daysWeekNamesFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sat'];
export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const monthNamesFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
* addZero
* format int and make it as a string by adding 0 on the beginning if its a single digit
*/
export const addZero = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/**
* getUTCFullTime
* Getting the utc fulltime
*/
export const getUTCFullTime = (d) => {
    if (Object.prototype.toString.call(d) === '[object Date]') {
        var h = addZero(d.getUTCHours());
        var m = addZero(d.getUTCMinutes());
        var s = addZero(d.getUTCSeconds());
        return h + ":" + m + ":" + s;
    } else {
        return '';
    }
}

/**
* datetimeFormat
* format datetime values
* @param {*} timestamp - it can be string or date format or object if its from v3 utc datetime
* sample format if its object = {dateTimeStamp:'2021-09-26 23:54:55+00',source:'v3'}
* @param {*} format - string only, each format value will have a corresponding return string
* return String
*bale ung type, dinagdag to ni jeph, bale kapag "time" ung type mo, automatic dadagdagan niya ng default date sa unahan ng time
*kapag getServerTime is nka true, eto ung knukuha natin sa node, itrue nyo lng ito para regardless ung timezone
*ung dateOnly, bale i true pla ito kapag date lng ung ipapasa kasi kapag nag change ng timezone pwede kasi siya magadjust so itrue nyo nlng kapag date lng ung ipapasa and walang time
*/
export const datetimeFormatter = (timestamp, format = "datetime", todayServer = null, type = null, getServerTime = false, dateOnly = false) => {
    try {
        if (timestamp && (timestamp.constructor === String || timestamp.constructor === Date || (timestamp.constructor === Object && timestamp.dateTimeStamp))) {
            let date = null;
            let arrayDate = [];
            todayServer = todayServer && todayServer.constructor === String ? todayServer.replace('+00', '') : null

            if (type === 'time') {
                timestamp = '2021-01-01 ' + timestamp //add date when the passed timestamp is time only and the desired format is time (use to fix NaN return)
            }

            if (timestamp == "today") {
                date = new Date();
            } else {

                if (timestamp && timestamp.constructor === String) {
                    timestamp = timestamp.replace('+00', ''); //removing unnecessary gmt from backend as the time is already in ph
                    arrayDate = timestamp.split(/[- :.]/);
                } else if (timestamp.constructor === Object && timestamp.dateTimeStamp && timestamp.source && timestamp.source == "v3") {
                    // this will be used if the datetime from api is set to UTC already
                    timestamp = timestamp.dateTimeStamp; //removing unnecessary gmt from backend as the time is already in ph
                    arrayDate = timestamp.split(/[- :.]/);
                }

                if (arrayDate.length === 3) {
                    var iosDate = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2], arrayDate[3]);
                } else if (arrayDate.length >= 5 && arrayDate.length <= 8) {
                    var iosDate = new Date(arrayDate[0], arrayDate[1] - 1, arrayDate[2], arrayDate[3], arrayDate[4], arrayDate[5]);
                } else if(arrayDate.length >= 9){
                    // new implementation for safari and for the node datetime
                    var iosDate = new Date(arrayDate[0]+" "+arrayDate[1]+" "+arrayDate[2]+" "+arrayDate[3]+" "+arrayDate[4]+":"+arrayDate[5]+":"+arrayDate[6]+" GMT");
                } else {
                    var iosDate = new Date(timestamp);
                }


                //checking if the function used the getServerTime
                if (getServerTime) {
                    date = new Date(timestamp);
                } else {
                    if (dateOnly) {
                        date = new Date(timestamp).toLocaleString('en-US', { timeZone: 'GMT' }); //making the date picked as the default gmt so that the new date wont adjust by timezone
                        date = new Date(date);
                    } else {
                        let currentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        date = new Date(timestamp).toLocaleString('en-US', { timeZone: currentTz }); //making the date picked as the default gmt so that the new date wont adjust by timezone
                        date = new Date(date);
                    }
                }

                // for firefox
                if (isNaN(date)) {
                    let splitTimeStampBySpace = timestamp.split(' ');
                    if (splitTimeStampBySpace.length === 2) {
                        if (isNaN(parseInt(splitTimeStampBySpace[0])) && splitTimeStampBySpace[1]) {
                            date = new Date(`${splitTimeStampBySpace[0]} 01, ${splitTimeStampBySpace[1]}`);
                        }
                    }
                }
            }

            if ((date && date.toString() !== 'Invalid Date') || (iosDate && iosDate.toString() !== 'Invalid Date')) {

                //get DATE
                let dayName = daysWeekNames[isNaN(date.getDay()) ? iosDate.getDay() : date.getDay()];
                let dayNameFull = daysWeekNamesFull[isNaN(date.getDay()) ? iosDate.getDay() : date.getDay()];
                let dayDate = ("0" + (isNaN(date.getDate()) ? iosDate.getDate() : date.getDate())).slice(-2);
                let monthName = monthNames[isNaN(date.getMonth()) ? iosDate.getMonth() : date.getMonth()];
                let monthNameFull = monthNamesFull[isNaN(date.getMonth()) ? iosDate.getMonth() : date.getMonth()];
                let year = isNaN(date.getFullYear()) ? iosDate.getFullYear() : date.getFullYear();
                let MonthNumeric = ("0" + (isNaN(date.getMonth()) ? (iosDate.getMonth() + 1) : (date.getMonth() + 1))).slice(-2);
                let firstDay = new Date(year, isNaN(date.getMonth()) ? iosDate.getMonth() : date.getMonth(), 1);
                let lastDay = new Date(year, (isNaN(date.getMonth()) ? iosDate.getMonth() : date.getMonth()) + 1, 0);
                let monthFirstDay = ("0" + firstDay.getDate()).slice(-2);
                let monthLastDay = ("0" + lastDay.getDate()).slice(-2);

                //get TIME
                let hours = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                let minutes = isNaN(date.getMinutes()) ? iosDate.getMinutes() : date.getMinutes();
                let seconds = isNaN(date.getSeconds()) ? iosDate.getSeconds() : date.getSeconds();
                let ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                let strTime = hours + ':' + minutes + ' ' + ampm;
                let today = new Date();

                if (todayServer !== null) {
                    today = new Date(todayServer);
                }

                let todayTS = Math.round((today).getTime() / 1000);
                let dateTS = Math.round((date).getTime() / 1000);
                switch (format) {
                    case "datetime":
                        // Mon, 01 Jan 2020 at 12:00PM
                        return dayName + ", " + dayDate + " " + monthName + " " + year + " at " + strTime;
                        break;
                    case "datetime-no-day":
                        // 01 Jan 2020 at 12:00PM
                        return dayDate + " " + monthName + " " + year + " at " + strTime;
                        break;
                    case "date":
                        // Mon, 01 Jan 2020
                        return dayName + ", " + dayDate + " " + monthName + " " + year;
                        break;
                    case "momentsAgo":
                        if (todayTS >= dateTS) {
                            //check if 24hours has been passed
                            if (todayTS >= (dateTS + 86400)) {
                                return dayName + ", " + dayDate + " " + monthName + " " + year + " at " + strTime;
                            } else {
                                //check if hour has been passed
                                if (todayTS >= dateTS + 3600) {
                                    let diff = todayTS - dateTS;
                                    if (diff == 0) {
                                        return "An hour ago";
                                    }
                                    let diffHour = diff / 3600;
                                    diffHour = ~~diffHour
                                    return diffHour == 1 ? "An hour ago" : diffHour + " hours ago";
                                } else {
                                    //check if a minute has been passed
                                    if (todayTS >= dateTS + 60) {
                                        let diff = todayTS - dateTS;
                                        if (diff == 0) {
                                            return "A minute ago";
                                        }
                                        let diffMinute = diff / 60;
                                        diffMinute = ~~diffMinute
                                        return diffMinute == 1 ? "A minute ago" : diffMinute + " minutes ago";
                                    } else {
                                        let diff = todayTS - dateTS;
                                        if (diff == 0 || diff <= 10) {
                                            return "Few seconds ago";
                                        } else {
                                            return "Few seconds ago";
                                        }
                                    }
                                }
                            }
                        } else {
                            return dayName + ", " + dayDate + " " + monthName + " " + year + " at " + strTime;
                        }

                        break;
                    case "momentsAgoConvo":
                        if (todayTS >= dateTS) {
                            //check if 24hours has been passed
                            if (todayTS >= (dateTS + 86400)) {
                                return dayName + ", " + dayDate + " " + monthName + " " + year + " at " + strTime + " (PH)";
                            } else {
                                //check if hour has been passed
                                if (todayTS >= dateTS + 3600) {
                                    let diff = todayTS - dateTS;
                                    if (diff == 0) {
                                        return "An hour ago";
                                    }
                                    let diffHour = diff / 3600;
                                    diffHour = ~~diffHour
                                    return diffHour == 1 ? "An hour ago" : diffHour + " hours ago";
                                } else {
                                    //check if a minute has been passed
                                    if (todayTS >= dateTS + 60) {
                                        let diff = todayTS - dateTS;
                                        if (diff == 0) {
                                            return "A minute ago";
                                        }
                                        let diffMinute = diff / 60;
                                        diffMinute = ~~diffMinute
                                        return diffMinute == 1 ? "A minute ago" : diffMinute + " minutes ago";
                                    } else {
                                        let diff = todayTS - dateTS;
                                        if (diff == 0 || diff <= 10) {
                                            return "Few moments ago";
                                        } else {
                                            return "Few seconds ago";
                                        }
                                    }
                                }
                            }
                        } else {
                            //Mon, 01 Jan 2020 (PH)
                            return dayName + ", " + dayDate + " " + monthName + " " + year + " at " + strTime + " (PH)";
                        }
                        break;
                    case "momentsAgoClimax":
                        if (todayTS >= dateTS) {
                            //check if 24hours has been passed
                            if (todayTS >= (dateTS + 86400)) {
                                let diff = todayTS - dateTS;
                                if (diff == 0) {
                                    return "1 day";
                                }
                                let diffDay = diff / 86400;
                                diffDay = ~~diffDay
                                return diffDay == 1 ? "1 day" : diffDay + " days";
                            } else {
                                return "0 day";
                            }
                        } else {
                            return "0 day";
                        }
                        break;
                    case "inquiry-date-standard":
                        return dayDate + " " + monthName + " " + year;
                        //10 Feb 2021
                        break;
                    case "date-standard":
                        return year + "-" + MonthNumeric + "-" + dayDate;
                        //2021-02-10
                        break;
                    case "datetime-standard":
                        return year + "-" + MonthNumeric + "-" + dayDate + ' ' + date.getHours() + ':' + date.getMinutes();
                        //2021-02-10 15:49
                        break;
                    case "start-of-Week":
                        //calculating the first day of the week
                        let startWeekD = new Date(date);
                        let startWeekDay = startWeekD.getDay(),
                            startWeekDiff = startWeekD.getDate() - startWeekDay;

                        let startWeekDayNewDate = new Date(startWeekD.setDate(startWeekDiff));
                        let startWeekMonthName = monthNames[startWeekDayNewDate.getMonth()];
                        let startWeekDayDate = ("0" + startWeekDayNewDate.getDate()).slice(-2);
                        let startWeekYear = startWeekDayNewDate.getFullYear();

                        return startWeekMonthName + " " + startWeekDayDate + ", " + startWeekYear;
                        //Feb 07, 2021
                        break;
                    case "end-of-Week":
                        let endWeekD = new Date(date);
                        let endWeekDay = endWeekD.getDay(),
                            endWeekDiff = endWeekD.getDate() - endWeekDay + 6;

                        let endWeekDayNewDate = new Date(endWeekD.setDate(endWeekDiff));
                        let endWeekMonthName = monthNames[endWeekDayNewDate.getMonth()];
                        let endWeekDayDate = ("0" + endWeekDayNewDate.getDate()).slice(-2);
                        let endWeekYear = endWeekDayNewDate.getFullYear();

                        return endWeekMonthName + " " + endWeekDayDate + ", " + endWeekYear;
                        //Feb 13, 2021
                        break;
                    case "full-year":
                        return year;
                        //2021
                        break;
                    case "full-month":
                        return monthNameFull;
                        //February
                        break;
                    case "month-year":
                        return monthName.substring(0, 3) + " " + year;
                        //Feb 2021
                        break;
                    case "full-month-year":
                        return monthNameFull + " " + year;
                        //February 2021
                        break;
                    case "datetime-format-forPosting":
                        let forPostingDay = String(date.getUTCDate());
                        if (forPostingDay.length === 1) {
                            forPostingDay = "0" + forPostingDay;
                        }
                        return date.getUTCFullYear() + '-' + addZero(date.getUTCMonth() + 1) + '-' + forPostingDay + 'T' + getUTCFullTime(date) + 'Z';
                        //2021-02-10T07:57:05Z
                        break;
                    case "month-day-year":
                        return monthNameFull + " " + dayDate + ", " + year;
                        //February 10, 2021
                        break;
                    case "time":
                        return strTime;
                        //3:58 PM
                        break;
                    case "month-numeric":
                        return addZero(date.getUTCMonth() + 1);
                        //02
                        break;
                    case "month-shortName":
                        return monthName.substring(0, 3);
                        //Feb
                        break;
                    case "day-numeric":
                        return date.getUTCDate();
                        //10
                        break;
                    case "day-calendar":
                        return dayDate;
                        //10
                        break;
                    case "month-first-date":
                        return year + "-" + MonthNumeric + "-" + monthFirstDay;
                        break;
                    case "month-last-date":
                        return year + "-" + MonthNumeric + "-" + monthLastDay;
                        break;
                    case "day-name":
                        return dayName;
                    case "day-name-full":
                        return dayNameFull;
                    case 'month-day':
                        return MonthNumeric + '-' + dayDate;
                        break;
                    case 'date-without-year':
                        return dayName + ", " + monthName + " " + dayDate;
                        break;
                    case "time-standard":
                        let h = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                        let hour = h < 10 ? '0' + h : h;
                        return hour + ':' + minutes;
                        // 15:30
                        break;
                    case 'notif-date':
                        // 01-Jan-2020
                        return dayDate + "-" + monthName + "-" + year;
                        break;
                    case 'year-month':
                        return year + "-" + MonthNumeric;
                        break;

                    case "datetime-utc":
                        return year + "-" + MonthNumeric + "-" + dayDate + ' 00:00:00+00'
                        //2021-02-10 00:00:00+00
                        break;


                        case 'datetime-file-format':
                            hours = isNaN(date.getHours()) ? iosDate.getHours() : date.getHours();
                            hours = hours < 10 ? '0' + hours : hours;
                            return year + "-" + `${MonthNumeric}`+`${date.getUTCDate()}`+`${hours}`+`${minutes}`+`${seconds}`+`${'1'}`;
                            
                            break;

                    default:
                        return "";
                        break;
                }
            } else {
                return "";
            }



        } else {
            return "";
        }
    } catch (error) {
        console.error(error, 'Invalid input. Please check helpers (datetimeFormatter).');
        return "";
    }
}
/**
 * replaceUnderscore - remove underscore of a string
 * @param {*} string  - string value to be mmodified
 */
export const replaceUnderscore = (string) => {
    if (string && string.constructor === String) {
        let str1 = string;
        let str2 = str1.replace(/_/g, ' ');
        return toTitleCase(str2.toLowerCase());
    } else {
        return '';
    }

}

/**
 * computeHours - convet mins value to hours
 * @param {*} mins - value to be converted
 */
export const computeHours = (mins) => {

    try {
        if (mins && parseInt(mins)) {
            if (mins.constructor === String || mins.constructor === Number) {
                let hrs = Math.sign(mins / 60) * Math.floor(Math.abs(mins / 60)); //refactored - encountered issue when accepting negative values
                let disMins = ((parseInt(mins) % 60) != 0 ? (parseInt(mins) % 60) + ((parseInt(mins) % 60) > 1 ? 'm' : 'm') : '');
                let totalHours = (hrs != 0 ? (parseInt(hrs)) + (parseInt(hrs) > 1 ? 'h' : 'h') : '') + (disMins != '' ? ' ' + disMins : '');
                return totalHours;
            }
            else {
                return ''
            }
        }
        return ''
    } catch (error) {
        console.error(error)
        console.error('Invalid input. Please check helpers (computeHours).')
        return ''
    }




}

export const sanitizeTextArea = (value) => {
    try {
        if (value && value.constructor === String) {
            let specialText = value;
            specialText = specialText.replace(/[^a-z0-9,.() &;?"'-]/gi, "");
            let result = "";
            for (var i = 0; i < specialText.length; i++) {
                if (specialText.charAt(i) == "-") {
                    if (i == 0) {
                        //removing if its on the first
                    } else if (specialText.charAt(i - 1) == " " || specialText.charAt(i + 1) == " ") {
                        //removing if it has space before or after
                    } else {
                        result += specialText.charAt(i);
                    }
                } else {
                    result += specialText.charAt(i);
                }
            }

            return result
        }
        else {
            return ''
        }

    } catch (error) {
        console.error(error);
        console.error('Invalid input. Please check helpers (sanitizeTextArea).');
    }
}

/**
 * showVariablePlurality
 * add -s to string if integer is greather than 1
 */
export const showVariablePlurality = (number) => {

    try {
        if (number && parseInt(number)) {
            if (number.constructor === String || number.constructor === Number) {
                let value = parseInt(number);
                return value > 1 ? 's' : null;
            }
            return null
        }
        return null
    } catch (error) {
        console.error(error);
        console.error('Invalid input. Please check helpers (showVariablePlurality).');
        return null;
    }
}

/**
* alertUponSubmission
* disable alert action button
* @param {*} alertData - the alert configuration data
*/
export const alertUponSubmission = (alertData) => {
    try {
        if (alertData && alertData.constructor === Object) {
            if (alertData?.actions?.length > 0 && alertData?.actions?.constructor === Array) {
                alertData.actions.map((item, idx) => {
                    if (idx === 0) {
                        item.label = 'Submitting...';
                    }
                    item.isDisabled = true;
                })
            }
            return alertData ? alertData : null;
        }
        else {
            return null;
        }

    } catch (error) {
        console.error('Invalid input. Please check helpers (alertUponSubmission).');
    }
}

/**
* serverTime
* getting the servertime and not the local time
* @param {*} timezone - specifying the timezone
*/
export const serverTime = async (timezone = null) => {
    let value;
    value = await Axios.get(`${NODE_API}/utils/get-server-time`, {
        ...defaultHeaders()
    }).then(response => {
        let { data } = response;
        if (data.errors) {
            data.error = getErrorMessage(data.errors);
        }
        let convertedTime;
        if (data.content !== null) {
            if (timezone !== null) {
                convertedTime = new Date(data.content).toLocaleString("en-US", { timeZone: timezone });
            } else {
                convertedTime = new Date(data.content).toLocaleString();
            }
        }

        return convertedTime;
    });

    return value;
}

/**
 * computeExcessMins
 * convert mins into hours and mins format
 */
export const computeExcessMins = (totalMinutes) => {
    try {
        if (totalMinutes) {
            if (totalMinutes.constructor === String || totalMinutes.constructor === Number) {
                let hrs = Math.floor(totalMinutes / 60);
                hrs = hrs > 0 ? (
                    `${hrs}h`
                ) : '';
                let mins = parseInt(totalMinutes) % 60 > 0 ? (
                    `${parseInt(totalMinutes) % 60}m`
                ) : ''
                let totalHours = `${hrs}${hrs && mins ? ' ' : ''}${mins}`;
                return totalHours;
            }
            return '';
        }
        return '';
    } catch (error) {
        console.error(error);
        console.error('Invalid input. Please check helpers (computeExcessMins).');
        return '';
    }
}


/**
 * computeExcessMinsInHours
 * convert mins into hours
 */
export const computeExcessMinsInHours = (mins) => {
    try {
        if (mins && parseInt(mins)) {
            if (mins.constructor === String || mins.constructor === Number) {
                let hrs = Math.sign(mins / 60) * Math.floor(Math.abs(mins / 60));
                let totalHours = (hrs != 0 ? (parseInt(hrs)) + (parseInt(hrs) > 1 ? 'h' : 'h') : '');
                return totalHours;
            }
            return '';
        } else {
            return '';
        }
    } catch (error) {
        console.error(error);
        console.error('Invalid input. Please check helpers (computeExcessMinsInHours).');
        return '';
    }
}

/**
 * diffInDays
 * get the days difference of 2 dates
 */
export const diffInDays = (dateFrom, dateTo) => {
    try {
        if (dateFrom && dateTo) {
            if ((dateFrom.constructor === String || dateFrom.constructor === Number) && (dateTo.constructor === String || dateTo.constructor === Number)) {
                dateFrom = new Date(dateFrom);
                dateTo = new Date(dateTo);
                if (dateFrom !== 'Invalid Date' && dateTo !== 'Invalid Date' && dateTo >= dateFrom) {
                    const diffTime = Math.abs(dateTo - dateFrom);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays;
                } else {

                    return '';
                }

            }
            return ''
        } else {
            return '';
        }
    } catch (error) {
        console.error(error);
        console.error('Invalid input. Please check helpers (diffInDays).');
        return '';
    }
}


/**
 * Get all search params from the URL, return Object of params or null
 */

export const getURLSearchParams = (params) => {
    var container = {};
    try {
        params.split('&').toString().substr(1).split(",").forEach(item => {
            let removedEqualSeparator = item.replace("=", ' ');
            container[removedEqualSeparator.split(' ')[0]] = decodeURIComponent(removedEqualSeparator.split(' ')[1]) ? removedEqualSeparator.split(' ')[1] : "No query strings available";
        });
        if (Object.keys(container).length == 1 && Object.keys(container)[0] == "") {
            container = null
        }
        return container;
    } catch (error) {
        console.error(error);
        console.error('Invalid call. Please check helpers (getURLSearchParams).');
        return null;
    }
}

export const capitalize = (word) => {
    if (typeof word !== 'string') {
        return ''
    } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

/**
* Transform bytes to toMegabytes
* reset form element value to default
* @param {*} element - the string or int data
* @param {*} places - number of decimal places, must be int
* returns int
*/
export const byteToMegabytes = (element) => {
    try {

        if (element.constructor === String) {
            element = parseFloat(element) * 1000000;
        } else if (element.constructor === Number) {
            element = element * 1000000;
        } else {
            element = 0;
            console.error('Invalid input. Please check helpers (byteToMegabytes).');
        }
        return element ? element : 0;
    } catch (error) {
        console.error('Invalid input. Please check helpers (byteToMegabytes).');
        return 0;
    }
}

/**
 * Convert UrlParams into search string
 */

export const urlParamsToSearchString = (params) => {
    var searchString = '';
    try {
        if (params && params.constructor === Object) {
            let filteredParams = Object.keys(params).filter(item => (params[item] !== undefined && params[item] !== null && params[item] !== ''));
            filteredParams.map((item, idx) => {
                if (idx === 0) {
                    searchString = `${item}=${params[item]}`;
                } else {
                    searchString = `${searchString}&${item}=${params[item]}`;
                }
            })
        } else {
            console.error('Invalid params. Please check helpers (urlParamsToSearchString).');
        }
        return searchString;
    } catch (error) {
        console.error(error);
        console.error('Invalid call. Please check helpers (urlParamsToSearchString).');
        return null;
    }
}

/**
 * 
 * Distinct array
 */
export const distinctArray = (array) => {
    let distinctResult = [];
    try {
        if (array && array.constructor == Array) {
            array.map(item => {
                if (!distinctResult.includes(item)) {
                    distinctResult.push(item);
                }
            });
            return distinctResult;
        } else {
            return distinctResult;
        }
    } catch (error) {
        console.error('distinctArray error', JSON.stringify(error));
        return distinctResult;
    }
}

/**
 * logToFile - logs transactions per pillar
 * @param {*} params 
 */
export const logToFile = (params) => {

    //Temporary fixed
    if (params.function.toUpperCase() == 'LEAVE') {
        params.function = params.function.toUpperCase();
    }
    const otherParams = {
        agent: LOGGER.AGENT,
        resolution: LOGGER.RESOLUTION,
        current_date: new Date().toISOString().slice(0, 10),
        ip_address: localStorage.getItem('ip_address') ? localStorage.getItem('ip_address') : '',
    }
    params = { ...params, ...otherParams }


    let formData = new FormData();
    formData.append('submitValues', JSON.stringify(params));
    const response = axiosRoutes('post', `${NODE_API}/info/set-information`, null, formData);

}

/**
 * Constant objects used in logs
 */
export const logs = {
    ATTENDANCE: "attendance",
    LEAVE: "leave",
    TIME_RECORDER: "time_recorder",
    OVERTIME: "overtime",
    CHANGE_SHIFT: "change_shift",
    AMENDMENT: "amendment",
    CALLIN: "callin",
    PRE_APPROVED_TOIL: 'pre_approved_toil',
    PRE_APPROVED_OVERTIME: 'pre_approved_overtime',
    KNOWLEDGE_CENTER: 'knowledge center',
    DEALS: 'deals',
    BASIC_INFO: "basic_information"

}

export const pluralizeWord = (count, word) => {

    try {
        let wordArray = word.split("").reverse();
        let vowels = ["a", "e", "i", "o", "u"]
        let finalWord = "";

        if (count > 1) {
            if (wordArray[0] === "y") {
                if (!vowels.includes(wordArray[1])) {
                    return finalWord = wordArray.reverse().join("").slice(0, -1) + "ies"
                }
                else {
                    return finalWord = wordArray.reverse().join("") + "s"
                }
            }
            else {
                if (vowels.includes(wordArray[1]) && wordArray[0] == "x") {
                    return finalWord = wordArray.reverse().join("") + "es"
                }
                else {
                    return finalWord = wordArray.reverse().join("") + "s"
                }
            }
        }
        else {
            return word
        }
    } catch (error) {
        console.error(error)
    }
}

export const imageRandomizer = (imgCollection) => {
    try {
        if ((imgCollection && imgCollection.constructor === Array)) {
            return imgCollection[Math.floor(Math.random() * imgCollection.length)];
        }
        else {
            console.error("Invalid passed parameters in global helper - imageRandomizer()")
        }
    } catch (error) {
        console.error("A problem was encountered in global helper - imageRandomizer()")
    }
}

export const slaInformation = ({ content, infoCode }) => {
    const [info] = content.slaInformation;
    let apiReturn = {}

    if (info.sla_info_code === infoCode) {
        apiReturn.getInfo = {
            infoDetails: {
                companyPolicy: info.sla_info_group_info_policy,
                instruction: info.sla_info_group_info_instruction,
                systemPolicy: info.sla_info_group_info_system
            },
            listRow: []
        }

        Object.keys(SLA_INFO).map(key => info.hasOwnProperty(key) && info[key] ?
            apiReturn.getInfo.listRow.push(SLA_INFO[key]) : apiReturn.getInfo.listRow)
    }

    return apiReturn
}

/**
* Check if all array values share the same type
* @param {*} arrayParams - the array to be checked
* @param {*} type - the type to be checked against - e.g string, number, array, object
* returns boolean - true when all values share the same type
*/
export const arrayMustAll = (arrayParams, type) => {
    try {
        const allowedTypes = ["string", "number", "array", "object"]
        if (arrayParams && arrayParams.constructor === Array && type && type.constructor === String && allowedTypes.includes(type)) {
            function findIllegalTypes(selectedType) {
                let haveIllegalTypes = 0
                arrayParams.map((data) => {
                    if (data && data.constructor !== selectedType) {
                        ++haveIllegalTypes
                    }
                    else if (data === null || data === undefined) {
                        ++haveIllegalTypes
                    }
                })
                return haveIllegalTypes > 0 ? false : true
            }

            switch (type) {
                case "string":
                    return findIllegalTypes(String)
                case "number":
                    return findIllegalTypes(Number)
                case "object":
                    return findIllegalTypes(Object)
                case "array":
                    return findIllegalTypes(Array)
                default:
                    break;
            }
        }
        else {
            console.log("Invalid Passed Parameters in - arrayMustAll(Global Helpers)")
        }
    } catch (error) {
        console.error("arrayMustAll()", error)
    }
}

/**
 * Get Timezone country based on timezone indicated in the APP_TIMEZONE params in .env
 */
export const getCountryByTimezone = () => {
    const timeZoneList = [
        { timezone: 'Asia/Manila', country: 'ph' },
        { timezone: 'Asia/Ho_Chi_Minh', country: 'vn' },
    ]
    const timezone = process.env.APP_TIMEZONE;


    if (timezone == undefined) {
        return 'ph'
    } else {
        let tZoneFilter = timeZoneList.filter(t => t.timezone == timezone);
        if (tZoneFilter.length > 0) {
            return tZoneFilter[0].country;
        } else {
            return 'ph';
        }
    }
}

/**
 * Validate string if its in email format
 */
export const isValidWebsite = (website) => {
    if (website && website.constructor === String) {
        var regexValidator = /(http:\/\/|https:\/\/|)(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        return regexValidator.test(website);
    } else {
        return false
    }
}

export const isValidFileType = (fileName, validTypes) => {
    if (fileName && fileName.constructor === String && validTypes && validTypes.constructor === Array && validTypes.length > 0) {
        let stringToArray = fileName.split('.');
        return validTypes.includes(`.${stringToArray[stringToArray.length - 1]}`) ? true : false
    } else {
        return true
    }
}


/**
 * Validate string if its in email format
 * regexEmailValidatorStrict - Use this if you want more strict email validation
 * regexEmailValidatorSimple - Validate only the basic requirements of an email
 */
export const isValidEmail = (email) => {
    if (email && email.constructor === String) {
        //var regexEmailValidatorStrict = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        var regexEmailValidatorSimple = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regexEmailValidatorSimple.test(email);
    } else {
        return false
    }
}

/**
 * sanitizeValue - filter text value based on the given props
 * @param {*} txt - value to be filtered
 * @param {*} props -  alphabet = Boolean, numeric=Boolean, space=Boolean, allowedSymbols=Array
 */
export const sanitizeValue = (txt, props) => {
    let pattern = null;
    let newTxt = txt;

    if (props && props.constructor == Object) {
        if (props.allowedSymbols && props.allowedSymbols.constructor == Array && props.allowedSymbols.length > 0) {
            pattern = `^a-zA-Z0-9`
            pattern = new RegExp(`[${pattern}${props.allowedSymbols.join('')} ]`, 'gi')
            newTxt = newTxt.replace(pattern, "");

        } else {
            pattern = `^a-zA-Z0-9`
            pattern = new RegExp(`[${pattern} ]`, 'gi')
            newTxt = newTxt.replace(pattern, "");

        }

        if (props.alphabet == false) {
            pattern = /[a-z]/gi
            newTxt = newTxt.replace(pattern, "");

        }

        if (props.numeric == false) {
            pattern = /[0-9]+$/gi
            newTxt = newTxt.replace(pattern, "");

        }

        if (props.space == false) {
            pattern = /\s/gi
            newTxt = newTxt.replace(pattern, "");

        }

    }

    return newTxt;

}


/**
 * sortArrayObjects - sort object in the array base on the sort key
 * @param {*} arrayObj - the array of object to be sorted <Array>
 * @param {*} sortKey -  the sorting key inside the object <Number>
 * @param {*} order -  the sorting key inside the object <"asc" | "desc">
 */
export const sortArrayObjects = (arrayObj, sortKey, order) => {
    try {
        if (
            arrayObj && arrayObj.constructor === Array && arrayMustAll(arrayObj, 'object')
            && sortKey && sortKey.constructor === String
            && order && order.constructor === String
        ) {
            return order === 'desc' ? arrayObj.sort((a, b) => a[sortKey] < b[sortKey] ? 1 : b[sortKey] < a[sortKey] ? -1 : 0) :
                arrayObj.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : b[sortKey] > a[sortKey] ? -1 : 0)
        } else {
            console.error('GlobalHelpers(sortArrayObjects): invalid parameters passed')
        }
    } catch (error) {
        console.error('GlobalHelpers(sortArrayObjects): A problem occured in this function', JSON.stringify(error))
    }

}

/**
 * isAccessedViaMobile - check if the site is accessed via mobile or table and return true. 
*/
export const isAccessedViaMobile = () => {
    let isUserUsingMobile = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) isUserUsingMobile = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return isUserUsingMobile;
};

export const arrayToSentence = (wordsArray, options) => {
    try {
      let sentencedArray = "";
      
      wordsArray && wordsArray.constructor === Array && wordsArray.length > 1 && wordsArray.forEach((item, idx) => {
        sentencedArray = sentencedArray + (idx === wordsArray.length - 1 ?  ` ${options?.lastConnector || 'and'} ` : '') + (options?.prefix || '') + item + (idx < wordsArray.length - 2 ? ', ' : '')
      })

      return sentencedArray

    } catch (error) {
        console.error('arrayToSentence', error)
    }
}