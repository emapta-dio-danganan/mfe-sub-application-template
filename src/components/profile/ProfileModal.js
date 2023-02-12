import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { NODE_API, PROFIMGURL } from '../../constants/UrlConfigs';
import { REQUEST_LINK } from '../../constants/Links';
import { axiosRoutes, getInitialsOfTwoStrings, toTitleCase, datetimeFormatter, serverTime, pluralizeWord } from '../../helpers/GlobalHelper';
import { ICON_PLACEHOLDER, SVG_USER, SVG_CLOSE_WHITE, SVG_EMPLOYEEID, SVG_TENURE, SVG_POSITION, SVG_SITE, SVG_CALENDAR_BLUE, SVG_ARROWRIGHT_GREEN } from '../../assets/Asset';
import Modal from '../modal/Modal';
import ProfileThumbnail from './Thumbnail';
import NavTab from '../nav-tab/NavTab';
import Calendar from '../calendar/Mini';
import { TeamListLoader, TeamListContentLoader } from '../../constants/Loader';

class ProfileModal extends Component{

    constructor(props) {
        super(props);

        this.MODAL_CONFIG = {
            size: 'md',
            hideMenuBar: true
        }

        this.TABS = [
            { label: 'Attendance', value: 'ATTENDANCE'},
            { label: 'Contact Details', value: 'CONTACT_DETAILS'},
            { label: 'Work Details', value: 'WORK_DETAILS'},
        ]

        this.state = {
            initialLoad: {
                profile: false,
                shift: false,
                dtrStat: false,
                requestStat: false,
                holidays: false
            },
            employeeProfile: {
                loaded: false,
                error: false,
                data: null
            },
            navTab: {
                tabs: [],
                selected: ''
            },
            currentMonth: {
                start: '',
                end: ''
            },
            tabData: {
                ATTENDANCE: {
                    calendar: {
                        loaded: false,
                        error: false,
                        title: '',
                        content: null,
                        currentDate: '',
                        selectedMonth: '',
                        selectedDates: []
                    },
                    attendance: {
                        loaded: false,
                        error: false,
                        icon: SVG_CALENDAR_BLUE,
                        title: 'ATTENDANCE',
                        content: null
                    },
                    requests: {
                        loaded: false,
                        error: false,
                        icon: SVG_CALENDAR_BLUE,
                        title: 'REQUESTS',
                        content: null
                    },
                    holidays: {
                        loaded: false,
                        error: false,
                        icon: SVG_CALENDAR_BLUE,
                        title: 'HOLIDAYS',
                        content: null
                    }
                },
                CONTACT_DETAILS: {
                    primary: {
                        loaded: false,
                        error: false,
                        icon: null,
                        title: null,
                        content: null
                    }
                },
                WORK_DETAILS: {
                    primary: {
                        loaded: false,
                        error: false,
                        icon: null,
                        title: null,
                        content: null
                    },
                    superior: {
                        loaded: false,
                        error: false,
                        icon: null,
                        title: '',
                        content: null
                    }
                }
            }
        }

    }

    componentDidMount(){
        this.getMonthFirstAndLastDay();
    }

    componentDidUpdate(prevProps, prevState){
        let oldProps = {...prevProps};
        delete oldProps.getActions;
        delete oldProps.additionalTab;
        let currentProps = {...this.props};
        delete currentProps.getActions;
        delete currentProps.additionalTab;

        if(this.props.show){
            if(JSON.stringify(oldProps) !== JSON.stringify(currentProps)){
                let { employeeProfile, navTab, tabData, initialLoad } = {...this.state};
                employeeProfile.loaded = false;
                employeeProfile.error = false;
                let additionalTab = this.props.additionalTab && this.props.additionalTab.constructor === Array ? [...this.props.additionalTab].map(item => ({ label: item.label, value: item.value })) : [];
                if(this.props.view.toUpperCase() === 'TALENT'){
                    navTab.tabs = [...this.TABS].filter(item => (item.value === 'CONTACT_DETAILS'));
                    navTab.tabs = [...additionalTab, ...navTab.tabs];
                    initialLoad.profile = false;
                    initialLoad.shift = true;
                    initialLoad.dtrStat = true;
                    initialLoad.requestStat = true;
                    initialLoad.holidays = true;
                } else {
                    navTab.tabs = [...additionalTab, ...this.TABS];
                    initialLoad.profile = false;
                    initialLoad.shift = false;
                    initialLoad.dtrStat = false;
                    initialLoad.requestStat = false;
                    initialLoad.holidays = false;
                }
                if(this.props.additionalTab && this.props.additionalTab.constructor === Array && this.props.additionalTab.length > 0){
                    this.props.additionalTab.map(item => {
                        tabData[item.value] = {
                            primary: {
                                loaded: item.data && item.data.loaded ? item.data.loaded : false,
                                error: item.data && item.data.error ? item.data.error : false,
                                icon: item.data && item.data.icon ? item.data.icon : null,
                                title: item.data && item.data.title ? item.data.title : null,
                                content: item.data && item.data.content ? item.data.content : null
                            }
                        }
                    })
                }
                navTab.selected = navTab.tabs.length > 0 && navTab.tabs[0] &&  navTab.tabs[0].value ? navTab.tabs[0].value : '';
                tabData.ATTENDANCE.calendar.selectedMonth = datetimeFormatter(tabData.ATTENDANCE.calendar.currentDate, 'month-first-date');
                Object.keys(tabData.ATTENDANCE).map(item => {
                    tabData.ATTENDANCE[item].loaded = false;
                    tabData.ATTENDANCE[item].error = false;
                });
                Object.keys(tabData.CONTACT_DETAILS).map(item => {
                    tabData.CONTACT_DETAILS[item].loaded = false;
                    tabData.CONTACT_DETAILS[item].error = false;
                });
                Object.keys(tabData.WORK_DETAILS).map(item => {
                    tabData.WORK_DETAILS[item].loaded = false;
                    tabData.WORK_DETAILS[item].error = false;
                });
                this.setState({...this.state, employeeProfile, tabData, initialLoad}, () => {
                    this.getEmployeeProfileDetails(this.props.employeeCode, this.props.bucketCode);
                    if(this.props.view.toUpperCase() !== 'TALENT'){
                        this.getEmployeeShift();
                        this.getDtrStats();
                        this.getEmployeeRequestCount();
                        this.getHolidays();
                    }
                });
            } else if(
                prevProps.employeeCode === this.props.employeeCode && 
                this.props.additionalTab &&
                this.props.additionalTab.constructor === Array && 
                this.props.additionalTab.length > 0
            ){
                let { tabData } = {...this.state};
                let saveNewState = false;
                this.props.additionalTab.map(item => {
                    if(
                        prevState.tabData[item.value] && 
                        prevState.tabData[item.value].primary && 
                        item.data && 
                        (
                            prevState.tabData[item.value].primary.loaded !== item.data.loaded || 
                            prevState.tabData[item.value].primary.error !== item.data.error 
                        )
                    ){
                        tabData[item.value].primary.loaded = item.data && item.data.loaded ? item.data.loaded : false;
                        tabData[item.value].primary.error = item.data && item.data.error ? item.data.error : false;
                        tabData[item.value].primary.icon = item.data && item.data.icon ? item.data.icon : null;
                        tabData[item.value].primary.title = item.data && item.data.title ? item.data.title : null;
                        tabData[item.value].primary.content = item.data && item.data.content ? item.data.content : null;
                        saveNewState = true;
                    }
                });
                if(saveNewState){
                    this.setState({...this.state, tabData});
                }
            }
        }
    }

    /**
    * getMonthFirstAndLastDay
    * Getting the first and last day of the month based on serverTime
    */
    async getMonthFirstAndLastDay() {
        let { currentMonth, tabData } = { ...this.state };
        const response = await serverTime('Asia/Manila');
        if(response){
            currentMonth.start = datetimeFormatter(response, 'month-first-date');
            currentMonth.end = datetimeFormatter(response, 'month-last-date');
            tabData.ATTENDANCE.calendar.currentDate = datetimeFormatter(response, 'date-standard');
            tabData.ATTENDANCE.calendar.selectedMonth = currentMonth.start;
            this.setState({...this.state, currentMonth, tabData });
        } else {
            console.error("Unable to fetch servertime")
        }
    }

    /**
    * getEmployeeProfileDetails
    * Fetching the employee profile data
    * @param {*} employeeCode - props employee code
    * @param {*} bucketCode - props bucket code
    */
    async getEmployeeProfileDetails(employeeCode, bucketCode){
        let params = {
            employeeCode: employeeCode,
            bucketCode: bucketCode,
        }
        const response = await axiosRoutes('get', `${NODE_API}/user/get-employee-profile-details`, null, { params: params });
        let { success, content, error } = {...response};
        let { employeeProfile, initialLoad } = {...this.state};
        if(success) {
            employeeProfile.loaded = true;
            employeeProfile.data = content && content.employeeProfile && content.employeeProfile.constructor === Array && content.employeeProfile.length > 0 ? content.employeeProfile[0] : null
        } else {
            employeeProfile.error = true;
            employeeProfile.data = null;
        }
        initialLoad.profile = true;
        this.setState({...this.state, employeeProfile, initialLoad}, () => {
            if(success){
                this.getContactDetails();
                this.getWorkDetails();
            }
        });
    }

    /**
    * getEmployeeShift
    * Fetching the employee shift data
    */
    async getEmployeeShift() {
        let { tabData, initialLoad } = {...this.state};
        let params = {
            date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'date-standard'),
            year: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'full-year'),
            decryptedEmployeeCode: this.props.employeeCode,
            decryptedBucketCode: this.props.bucketCode,
            decryptedCompanyCode: this.props.companyCode,
            view: this.props.view
        }
        const response = await axiosRoutes('get', `${NODE_API}/shift/get-employee-shift`, null, { params: params });
        let { success, content, error } = {...response};
        if (success) {
            tabData.ATTENDANCE.calendar.loaded = true;
            tabData.ATTENDANCE.calendar.content = <div className="profile-modal-calendar">
                <Calendar
                    date={tabData.ATTENDANCE.calendar.selectedMonth}
                    data={content ? content : {}}
                    currentDate={tabData.ATTENDANCE.calendar.currentDate}

                    getChangeMonthHandler={ event => this.getChangedMonth(event)}
                />
            </div>
        } else {
            tabData.ATTENDANCE.calendar.error = true;
            console.error('Unable to fetch data on getEmployeeShift.', JSON.stringify(error));
        }
        initialLoad.shift = true;
        this.setState({...this.state, tabData, initialLoad});
    }

    /**
    * getDtrStats
    * Fetching dtr statistics for this month
    */
    async getDtrStats() {
        let { tabData, currentMonth, initialLoad } = { ...this.state };
        let params = {
            decryptedEmployeeCode: this.props.employeeCode,
            decryptedBucketCode: this.props.bucketCode,
            start_date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'month-first-date'),
            end_date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'month-last-date'),
        };
        const response = await axiosRoutes('get', `${NODE_API}/dtr/get-dtr-criticality-stats`, null, { params: params });
        let { content, success, error } = { ...response };
        if (success) {
            tabData.ATTENDANCE.attendance.loaded = true;
            tabData.ATTENDANCE.attendance.content = <div className="modal-profile-attendance">
                <div className="attendance-completed">
                    <span>Complete</span>
                    <span><b>{content.COMPLETED ? content.COMPLETED : 0} days</b></span>
                </div>
                <div className="attendance-warning">
                    <span>Warning</span>
                    <span><b>{content.WARNING ? content.WARNING : 0} days</b></span>
                </div>
                <div className="attendance-critical">
                    <span>Critical</span>
                    <span><b>{content.CRITICAL ? content.CRITICAL : 0} days</b></span>
                </div>
            </div>
        } else {
            tabData.ATTENDANCE.attendance.error = true;
            console.error('Unable to fetch data on getDtrStats.', JSON.stringify(error));
        }
        initialLoad.dtrStat = true;
        this.setState({...this.state, tabData, initialLoad });
    }

    /**
    * getEmployeeRequestCount
    * Fetching employee approved requests for this month
    */
    async getEmployeeRequestCount() {
        let { tabData, initialLoad } = { ...this.state };
        let params = {
            decryptedEmployeeCode: this.props.employeeCode,
            decryptedBucketCode: this.props.bucketCode,
            start_date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'month-first-date'),
            end_date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'month-last-date'),
        }
        const response = await axiosRoutes('get', `${NODE_API}/dtr/get-request-count-by-cutoff`, null, { params: params });
        let { content, success, error } = { ...response };
        if (success) {
            tabData.ATTENDANCE.requests.loaded = true;
            tabData.ATTENDANCE.requests.content = content ? (
                <div>
                    <div className="modal-profile-request">
                        <h5><b>{`${content.done} of ${content.total}`}</b> Done</h5>
                        <span>{`${content.pending} request pending`}</span>
                    </div>
                    <Link to={REQUEST_LINK} className="text-link">
                        View all
                        {SVG_ARROWRIGHT_GREEN}
                    </Link>
                </div>
            ) : null
        } else {
            tabData.ATTENDANCE.holidays.error = true;
            console.error('Unable to fetch data on getEmployeeRequestCount.', JSON.stringify(error));
        }
        initialLoad.requestStat = true;
        this.setState({...this.state, tabData, initialLoad});
    }

    /**
    * getHolidays
    * Get holidays for this month
    */
    async getHolidays() {
        let { tabData, initialLoad } = { ...this.state };
        let params = {
            decryptedEmployeeCode: this.props.employeeCode,
            decryptedBucketCode: this.props.bucketCode,
            decryptedCompanyCode: this.props.companyCode,
            start_date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'month-first-date'),
            end_date: datetimeFormatter(tabData.ATTENDANCE.calendar.selectedMonth, 'month-last-date'),
        }
        const response = await axiosRoutes('get', `${NODE_API}/dtr/get-holidays-by-cutoff`, null, { params: params });
        let { content, success, error } = { ...response };
        if (success) {
            tabData.ATTENDANCE.holidays.loaded = true;
            tabData.ATTENDANCE.holidays.content = content.total_results_count > 0 ? (
                <div className='dtr-holidays'>
                    <ul>
                        {
                            content.holidayList.map((item, idx) => (
                                <li key={idx}>
                                    <p>{`${item.schedule_holiday_desc} (${item.schedule_holiday_country_code}) - ${datetimeFormatter(item.schedule_holiday_date, 'inquiry-date-standard')}`}</p>
                                    <span>{item.schedule_holiday_type_desc}</span>
                                </li>
                            ))   
                        }
                    </ul>
                </div>
            ) : <div>
                No upcoming holiday this month.
            </div>
        } else {
            tabData.ATTENDANCE.holidays.error = true;
            console.error('Unable to fetch data on getHolidays.', JSON.stringify(error));
        }
        initialLoad.holidays = true;
        this.setState({...this.state, tabData, initialLoad});
    }

    /**
    * getContactDetails
    * Get the contact details from the employee profile data
    */
    getContactDetails(){
        let { employeeProfile, tabData } = {...this.state};
        if(employeeProfile.data && employeeProfile.data.contact){
            let email = [...employeeProfile.data.contact].filter(item => (item.contact_information_coms_type === 'EMAIL'));
            let mobile = [...employeeProfile.data.contact].filter(item => (item.contact_information_coms_type === 'MOBILE'));
            let contacts = email.concat(mobile);
            tabData.CONTACT_DETAILS.primary.loaded = true;
            tabData.CONTACT_DETAILS.primary.content = email.length > 0 || mobile.length > 0 ? (
                <div>
                    {
                        contacts.map((item, idx) => (
                            <div key={idx} className="modal-profile-info">
                                {
                                    item.contact_information_coms_type === 'EMAIL' ? (
                                        <div className="icon icon-email"></div>
                                    ) : item.contact_information_coms_type === 'MOBILE' ? (
                                        <div className="icon icon-call"></div>
                                    ) : null
                                }
                                <span>{item.employee_contact_info_contact_value}</span>
                            </div>
                        ))
                    }
                </div>
            ) : null;
            this.setState({...this.state, tabData});
        }
    }

    /**
    * getTeamListCalledIn
    * Get the work details from the employee profile data
    */
    getWorkDetails(){
        let { employeeProfile, tabData } = {...this.state};
        if(employeeProfile.data){
            let tenure = employeeProfile.data.tenure ? employeeProfile.data.tenure : null;
            let reportingTo = employeeProfile.data.reportingTo ? employeeProfile.data.reportingTo : null
            tabData.WORK_DETAILS.primary.loaded = true;
            tabData.WORK_DETAILS.primary.content = <div>
                <div className="modal-profile-info"><div className="icon">{SVG_SITE}</div><span>{`${toTitleCase(employeeProfile.data.site_name)} (${employeeProfile.data.entity_code})`}</span></div>
                {
                    this.props.view === 'CLIENT' ? (
                        <div className="modal-profile-info"><div className="icon">{SVG_EMPLOYEEID}</div><span>{employeeProfile.data.employee_account_employee_number}</span></div>
                    ) : null
                }
                <div className="modal-profile-info"><div className="icon">{SVG_TENURE}</div><span>{tenure ? `${tenure.tenureship_year} ${pluralizeWord(tenure.tenureship_year, "year")} & ${tenure.tenureship_month} ${pluralizeWord(tenure.tenureship_month, "month")}` : null}</span></div>
                <div className="modal-profile-info"><div className="icon">{SVG_POSITION}</div><span>{employeeProfile.data.employment_status_desc}</span></div>
            </div>
            tabData.WORK_DETAILS.superior.loaded = true;
            tabData.WORK_DETAILS.superior.content = reportingTo ? (
                <div className="modal-profile-reportsto">
                    <label htmlFor="">REPORTS TO</label>
                        <div>
                        <ProfileThumbnail 
                            initials={getInitialsOfTwoStrings(reportingTo.employee_personal_info_first_name, reportingTo.employee_personal_info_last_name)}
                            img={ reportingTo.employee_personal_info_profile_pic ? (
                                    PROFIMGURL +
                                    reportingTo.employee_personal_info_employee_code + '/' +
                                    'BCKT-00001/PROFILE/' +
                                    reportingTo.employee_personal_info_profile_pic
                                ) : null
                            }
                            size='sm'
                        />
                        <div>
                            <span>{`${reportingTo.employee_personal_info_first_name} ${reportingTo.employee_personal_info_last_name}`}</span>
                            <label>{reportingTo.job_title_name}</label>
                        </div>
                    </div>
                </div>
            ) : null;
            this.setState({...this.state, tabData});
        }
    }

    /**
    * actionHandler
    * Passed the action to the props action function
    * @param {*} event - event
    * @param {*} action - action type
    * @param {*} data - data
    */
    actionHandler(event, action, data){
        event.preventDefault();
        if(this.props.getActions){
            this.props.getActions(action, data);
        }
    }

    /**
    * getSelectedNavTab
    * Switch selected tab
    * @param {*} tab - tab key
    */
    getSelectedNavTab(tab){
        let { navTab, tabData } = {...this.state};
        navTab.selected = tab;
        this.setState({...this.state, navTab});
    }

    /**
    * getChangedMonth
    * Get the changed month from the calendar component
    * @param {*} date - selected month
    */
    getChangedMonth(date){
        let { tabData } = {...this.state};
        tabData.ATTENDANCE.calendar.selectedMonth = date;
        Object.keys(tabData.ATTENDANCE).map(item => {
            tabData.ATTENDANCE[item].loaded = false;
            tabData.ATTENDANCE[item].error = false;
        });
        this.setState({...this.state, tabData}, () => {
            this.getEmployeeShift();
            this.getDtrStats();
            this.getEmployeeRequestCount();
            this.getHolidays();
        })
    }

    render(){
        let { employeeProfile, navTab, tabData, initialLoad } = {...this.state};
        let falseInitialLoaded = Object.keys(initialLoad).filter(key => ( !initialLoad[key] ));
        return (
            <Modal
                {...this.MODAL_CONFIG}
                show={this.props.show ? this.props.show : false}

                getActions={this.props.getActions}
            >
                <div className={(falseInitialLoaded.length > 0 ? " show-loader" : "")}>
                        <TeamListLoader view={this.props._userInformation.view} />
                    
                <div className="modal-profile">    
                    <div className="modal-profile-heading">
                        <div className="modal-profile-title">
                            <div>
                                { SVG_USER }
                                <h6>PROFILE</h6>
                            </div>
                            <a href="#" onClick={event => this.actionHandler(event, 'icon', 'close')}>
                                {SVG_CLOSE_WHITE}
                            </a>
                        </div>
                        {
                            employeeProfile.loaded ? (
                                employeeProfile.data ? (
                                    <div className="modal-profile-user">
                                        <ProfileThumbnail 
                                            initials={getInitialsOfTwoStrings(employeeProfile.data.employee_personal_info_first_name, employeeProfile.data.employee_personal_info_last_name)}
                                            img={ employeeProfile.data.employee_personal_info_profile_pic ? (
                                                    PROFIMGURL +
                                                    employeeProfile.data.employee_account_employee_code + '/' +
                                                    employeeProfile.data.employee_account_bucket_code + '/PROFILE/' +
                                                    employeeProfile.data.employee_personal_info_profile_pic
                                                ) : null
                                            }
                                            size='lg'
                                        />
                                        <div>
                                            <h5>{toTitleCase(`${employeeProfile.data.employee_personal_info_first_name} ${employeeProfile.data.employee_personal_info_last_name}`)}</h5>
                                            <label>{employeeProfile.data.job_title_name}</label>
                                            {
                                                employeeProfile.data.departmentInfo ? (
                                                    <span>{toTitleCase(employeeProfile.data.departmentInfo.company_department_name)}</span>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                ) : 'No data found'
                            ) : employeeProfile.error ? (
                                'error'
                            ) : <div className="modal-profile-user"></div>
                        }
                    </div>
                    
                    <NavTab 
                        tabs={[...navTab.tabs]}
                        selected={navTab.selected}
                        
                        getActions={tab => this.getSelectedNavTab(tab)}
                    />
                    {
                        navTab.selected && tabData && tabData[navTab.selected] ? (
                            Object.values(tabData[navTab.selected]).map((tabSection, idx) => (
                                <div key={idx} className="modal-profile-content">
                                    {
                                        tabSection.loaded ? (
                                            tabSection.content ? (
                                                <Fragment>
                                                    <div className="modal-profile-title">
                                                    { tabSection.icon ? tabSection.icon : null }
                                                    { tabSection.title ? <h6>{tabSection.title}</h6> : null }
                                                    </div>
                                                    {  tabSection.content }
                                                </Fragment>
                                            ) : null
                                        ) : tabSection.error ? (
                                            'error'
                                        ) : <TeamListContentLoader />
                                    }
                                </div>
                            ))
                        ) : 'error'
                    }
                </div>
                
                </div>
            </Modal>
        );
    }
}


const mapStateToProps = state => {
    return {
        _userInformation: state.userInformation
    };
};


export default withRouter(connect(
    mapStateToProps,
    null
)(ProfileModal))