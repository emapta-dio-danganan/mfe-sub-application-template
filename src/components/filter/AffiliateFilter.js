import axios from 'axios';
import InputSelectionHandler from '../input/InputSelectionHandler';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { axiosRoutes } from '../../helpers/GlobalHelper';
import { API, NODE_API } from "../../constants/UrlConfigs";
import fitnessCenter from 'material-ui/svg-icons/places/fitness-center';

// const CancelToken = axios.CancelToken;
let shiftCancel;
let companyCancel;
let divisionCancel;
let departmentCancel;
let teamCancel;
let employeeCancel;
class AffiliateFilter extends Component {
    constructor(props) {
        super(props);

        this.FILTER_COMPANY = [];
        this.FILTER_DEPARTMENT = [];

        this.state = {
            formElement: {
                affiliateInput: {
                    id: 'affiliateInput',
                    type: 'affiliate-textSelect',
                    value: '',
                    placeholder: 'Click to view the search options',
                    disabled: false,
                    options: [],
                },
            },
            defaultOption: [],
            affiliateJson: [],
            apiReturn: {
                company: [],
                division: [],
                department: [],
                team: [],
                employee: [],
                job: []
            },
        }
    }

    componentDidMount() {
        let { affiliateJson } = { ...this.state };


        //specifically for attendance, need some improvement for the future
        if (this.props.page == "TIME_AND_ATTENDANCE") {

            if (this.props.critical == 'true') {
                affiliateJson.push({
                    category: "dtr_final_status_is_has_critical_status",
                    categoryLabel: "Criticality",
                    type: "option",
                    value: "true",
                    valueLabel: "Critical",
                });

                this.setState({
                    affiliateJson: affiliateJson,
                }, () => {
                    this.formatUserDefinedFilter(affiliateJson);
                });
            } else {
                affiliateJson = affiliateJson.filter(a => a.category !== 'dtr_final_status_is_has_critical_status');
                this.setState({ ...this.state, affiliateJson });
            }
        }


        this.getPageFieldNamesByRoles()


    }

    componentDidUpdate(prevStatus) {
        let { affiliateJson } = { ...this.state };
        if (this.props.location.search == "" && prevStatus.location.search != "") {

            this.setState({ ...this.state, affiliateJson: [] });

        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component in jest test
        this.setState = (state,callback) => {
            return;
        };
    }

    /**
     * getPageFieldNamesByRoles
     * get field names depending on page and roles
     * @memberof Filter
     */
    async getPageFieldNamesByRoles() {
        let { defaultOption, formElement } = { ...this.state };
        try {
            const params = {
                user: this.props._userInformation.view.toUpperCase(),
                page: this.props.page
            }
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-page-fieldnames`, null, { params: params });
            let { success, content, error } = { ...response };

            if (success) {
                let { apiReturn } = { ...this.state };
                let details = content.filterPageFieldsNameByRoles;

                

                if (details && details.length > 0) {
                    details.map((v) => {
                        let { fieldCategory, filter_category_field_name, filter_category_field_type } = v;
                        let categoryOptions = [];

                        switch (filter_category_field_type) {
                            case 'option':

                                break;

                            case 'string':

                                break;
                        }

                        //check if the field has options
                        if (v.fieldCategory && v.fieldCategory.categoryOption && v.fieldCategory.categoryOption.length > 0) {
                            v.fieldCategory.categoryOption.map((copt) => {
                                categoryOptions.push({
                                    label: copt.filter_category_option_label ? copt.filter_category_option_label : "",
                                    value: copt.filter_category_option_value ? copt.filter_category_option_value : "",

                                })
                            });
                        }
                        

                        defaultOption.push({
                            label: v.filter_category_description ? v.filter_category_description : "",
                            value: v.filter_category_field_name ? v.filter_category_field_name : "",
                            categoryOptions: categoryOptions,
                            type: v.filter_category_field_type
                        });


                    });

                }

            } else {

            }

            formElement.affiliateInput.options = defaultOption;
            this.setState({
                defaultOption: defaultOption,
                formElement: formElement,
            }, () => {
                this.getCompanyList();
                // this.getJobList();
                // this.getDepartmentList();
                // this.getTeamList();
                // this.getEmployeeList()
            });

        } catch (error) {
            console.error(error, 'Error in getPageFieldNamesByRoles');

        }

    }


    async getCompanyList() {
        let { apiReturn, formElement } = { ...this.state };

        if (companyCancel !== undefined) {
            companyCancel("cancel");
        }
        let newCancelToken = new CancelToken(function executor(c) {
            companyCancel = c;
        });

        const response = await axiosRoutes('get', `${NODE_API}/utils/get-company-list`, null, null, newCancelToken);
        let { success, content, error } = { ...response }
        if (success) {
            if (content && content.constructor == Array && content.length > 0) {

                // Filter company based on view
                switch (this.props._userInformation.view) {
                    case 'HR':
                    case 'HR_CLIENT':
                        content = content.filter(c => this.props._userInformation.company.companies.includes(c.value));

                        break;
                }

                apiReturn.company = content;
                formElement.affiliateInput.options.map(m => {
                    if (m.value == "company_details_name") {
                        m.categoryOptions = apiReturn.company;
                    }
                })




            } else {
                apiReturn.company = [];

            }

        } else {
            apiReturn.company = [];
            console.error("Unable to fetch company", JSON.stringify(error));
        }
        this.setState({ ...this.state, apiReturn, formElement }, () => {
            if (success) {

                // this.getEmployeeList();
            }
        });
    }

    async getDivisionList() {
        let { employeeFilter, apiReturn } = { ...this.state };
        if (divisionCancel !== undefined) {
            divisionCancel("cancel");
        }
        let newCancelToken = new CancelToken(function executor(c) {
            divisionCancel = c;
        });

        let params = {
            'employeeCode': this.props._userInformation.profile.employeeCode
        };
        const response = await axiosRoutes('get', `${NODE_API}/utils/get-division-list`, null, { params: params }, newCancelToken);
        let { success, content, error } = { ...response };
        if (success) {
            if (content && content.constructor == Array && content.length > 0) {
                apiReturn.division = content;
            }

        } else {
            console.error("Unable to fetch division", error);
        }
        this.setState({ ...this.state, employeeFilter, apiReturn }, () => {
            if (success) {
                this.getPageFieldNamesByRoles()

            }
        });
    }

    async getDepartmentList(company = null) {
        let { employeeFilter, apiReturn, formElement } = { ...this.state };

        if (departmentCancel !== undefined) {
            departmentCancel("cancel");
        }
        let newCancelToken = new CancelToken(function executor(c) {
            departmentCancel = c;
        });

        let divisionQuery = [];
        this.props._userInformation.company.divisionCode.map(d => {
            divisionQuery.push(d.company_department_division_code);
        });

        let params = {
            'client_company_code': company,
            // 'divisions': divisionQuery
        };
        const response = await axiosRoutes('get', `${NODE_API}/utils/get-department-filtered`, null, { params: params }, newCancelToken);
        let { success, content, error } = { ...response }
        if (success) {
            if (content && content.constructor == Array && content.length > 0) {
                apiReturn.department = content;

                formElement.affiliateInput.options.map(m => {
                    if (m.value == "company_department_name") {
                        m.categoryOptions = apiReturn.department;
                    }
                })


            }

        } else {
            console.error("Unable to fetch departments", JSON.stringify(error));
        }
        this.setState({ ...this.state, employeeFilter, apiReturn, formElement }, () => {
            if (success) {

            }
        });
    }

    async getTeamList() {
        let { employeeFilter, apiReturn, formElement } = { ...this.state };

        if (teamCancel !== undefined) {
            teamCancel("cancel");
        }
        let newCancelToken = new CancelToken(function executor(c) {
            teamCancel = c;
        });

        let departmentQuery = [];
        this.props._userInformation.company.departments.map(d => {
            departmentQuery.push(d.employee_department_code);
        });

        let params = {
            'departments': departmentQuery
        };
        const response = await axiosRoutes('get', `${NODE_API}/utils/get-team-list`, null, { params: params }, newCancelToken);
        let { success, content, error } = { ...response };
        if (success) {
            if (content && content.constructor == Array && content.length > 0) {
                apiReturn.team = content;
                formElement.affiliateInput.options.map(m => {
                    // if(m.value=="company_department_name"){
                    //     m.categoryOptions = apiReturn.department;
                    // }
                })

            }

        } else {

            console.error("Unable to fetch teams", JSON.stringify(error));
        }
        this.setState({ ...this.state, employeeFilter }, () => {
            if (success) {
                // this.getEmployeeList();
            }
        });
    }

    async getEmployeeList() {
        let { apiReturn, formElement } = { ...this.state };

        if (employeeCancel !== undefined) {
            employeeCancel("cancel");
        }
        let newCancelToken = new CancelToken(function executor(c) {
            employeeCancel = c;
        });

        // let teamCodes = this.props._userInformation.view.toUpperCase() === 'CLIENT' || this.props._userInformation.view.toUpperCase() === 'HR_CLIENT' ? (
        //     apiReturn.team.value.toLowerCase() === 'all' || apiReturn.team.value === '' ? (
        //         apiReturn.team.options.filter(opt => (opt.value !== 'all')).map(opt => (opt.value))
        //     ) : [apiReturn.team.value]
        // ) : [];
        // let companyCodes = this.props._userInformation.view.toUpperCase() === 'HR' || this.props._userInformation.view.toUpperCase() === 'PAYROLL' ? (
        //     apiReturn.company.value.toLowerCase() === 'all' || apiReturn.company.value === '' ? (
        //         apiReturn.company.options.filter(opt => (opt.value !== 'all')).map(opt => (opt.value))
        //     ) : [apiReturn.company.value]
        // ) : [];

        let teamQuery = [];
        this.props._userInformation.company.teams.map(d => {
            teamQuery.push(d.employee_team_code);
        });


        let params = {
            teamCodes: [],
            companyCodes: this.props._userInformation.company.companies,
            divisionCodes: [],
            departmentCodes: [],
            view: this.props._userInformation.view.toUpperCase(),
        };

        const response = await axiosRoutes('get', `${NODE_API}/utils/get-employee-list`, null, { params: params }, newCancelToken);
        let { success, content, error } = { ...response };
        if (success) {
            if (content && content.listEmployeeForPocWithEENo && content.listEmployeeForPocWithEENo.constructor == Array && content.listEmployeeForPocWithEENo.length > 0) {
                apiReturn.employee = content.listEmployeeForPocWithEENo;
                formElement.affiliateInput.options.map(m => {
                    if (m.value == "dtr_final_status_employee_code") {
                        m.categoryOptions = apiReturn.employee;
                    }
                })
            } else {
                apiReturn.employee = [];
            }
            apiReturn.employee.disabled = false;
        } else {

            console.error("Unable to fetch employee", error);
        }
        this.setState({ ...this.state, apiReturn, formElement });
    }

    async getJobList() {
        let { apiReturn, formElement } = { ...this.state };

        if (employeeCancel !== undefined) {
            employeeCancel("cancel");
        }
        let newCancelToken = new CancelToken(function executor(c) {
            employeeCancel = c;
        });


        let teamQuery = [];
        this.props._userInformation.company.teams.map(d => {
            teamQuery.push(d.employee_team_code);
        });


        let params = {
            teamCodes: [],
            companyCodes: this.props._userInformation.company.companies,
            divisionCodes: [],
            departmentCodes: [],
            view: this.props._userInformation.view.toUpperCase(),


        };

        const response = await axiosRoutes('get', `${NODE_API}/utils/get-job-list`, null, { params: params }, newCancelToken);
        let { success, content, error } = { ...response };
        if (success) {
            if (content && content.listEmployeeForPocWithEENo && content.listEmployeeForPocWithEENo.constructor == Array && content.listEmployeeForPocWithEENo.length > 0) {
                apiReturn.job = content.listEmployeeForPocWithEENo;
                formElement.affiliateInput.options.map(m => {
                    if (m.value == "job_title_name") {
                        m.categoryOptions = apiReturn.job;
                    }
                })
            } else {
                apiReturn.employee = [];
            }
            apiReturn.employee.disabled = false;
        } else {

            console.error("Unable to fetch jobs", error);
        }
        this.setState({ ...this.state, apiReturn, formElement });
    }


    removeAffiliate(idx, inputName) {
        let { affiliateJson, formElement, defaultOption } = { ...this.state };

        if (idx == "all") {
            affiliateJson = []; //clear the object
        } else {
            affiliateJson.splice(idx, 1);
        }

        this.formatUserDefinedFilter(affiliateJson);


        if (affiliateJson.length > 0) {
            let flag = false;
            if (affiliateJson[affiliateJson.length - 1].value == "") {
                defaultOption.map((opt) => {
                    if (opt.value == affiliateJson[affiliateJson.length - 1].category) {
                        if (opt.categoryOptions && opt.categoryOptions.length > 0) {
                            formElement[inputName].options = opt.categoryOptions
                            formElement[inputName].options = this.affiliateOptionChecker(inputName, affiliateJson[affiliateJson.length - 1].category, formElement[inputName].options);
                            flag = true;
                        } else {
                            //this means there are no options available
                            if (!flag) {
                                formElement[inputName].options = [];
                            }
                        }
                    } else {
                        if (!flag) {
                            formElement[inputName].options = [];
                        }
                    }
                });

            }else{
                formElement[inputName].options = defaultOption;
            }

        } else {
            //reset the options
            formElement[inputName].options = defaultOption;
        }



        this.setState({ ...this.state, affiliateJson, formElement });
    }

    affiliateOptionChecker(inputName, category, options) {
        let { affiliateJson } = { ...this.state };
        //check if the affiliateJson has currently have same value on the category
        affiliateJson.map((item, idx) => {
            if (item.category == category) {
                options.map((optionItem, optionIdx) => {
                    if (optionItem.value == item.value) {
                        options = options.filter(function (item) {
                            return item !== optionItem
                        })
                    }
                });
            }
        })

        return options;
    }

    searchEnterHandler(event, inputName) {
        //this is for the custom value
        let { formElement, affiliateJson, defaultOption } = { ...this.state };

        if (affiliateJson.length > 0 && affiliateJson[affiliateJson.length - 1].value == "") {
            affiliateJson[affiliateJson.length - 1].value = event;
            affiliateJson[affiliateJson.length - 1].valueLabel = event;
            formElement[inputName].options = defaultOption;
            formElement[inputName].placeholder = 'Enter keyword/s to search';
            this.formatUserDefinedFilter(affiliateJson);

            formElement[inputName].value = "";

            this.setState({
                formElement: formElement,
                affiliateJson: affiliateJson,
            });

        } else {

            //commenting this out to avoid the free text on the category.

            // affiliateJson.push({
            //     "categoryLabel": event,
            //     "category": event,
            //     "valueLabel": "",
            //     "value": "",
            // });
        }
    }

    affiliateBlurHandler(event, inputName) {
        //this is for the custom value
        let { formElement, affiliateJson, defaultOption } = { ...this.state };

        if (event && !event.value) {
            if (affiliateJson.length > 0 && affiliateJson[affiliateJson.length - 1].value == "") {
                affiliateJson[affiliateJson.length - 1].value = event;
                affiliateJson[affiliateJson.length - 1].valueLabel = event;

                formElement[inputName].options = defaultOption;

                this.formatUserDefinedFilter(affiliateJson);

            } else {
                affiliateJson.push({
                    "categoryLabel": event,
                    "category": event,
                    "valueLabel": "",
                    "value": "",
                });
            }

            formElement[inputName].value = "";

            this.setState({
                formElement: formElement,
                affiliateJson: affiliateJson,
            });
        }
    }

    affiliateChangeHandler(event, inputName) {
        let { formElement, affiliateJson, defaultOption, apiReturn } = { ...this.state };
        formElement[inputName].value = event;

        if (event) {
            switch (event.constructor) {
                case String:
                    // formElement[inputName].options = defaultOption;
                    this.setState({ formElement: formElement });
                    break;


                case Object:
                    // //check if its a custom value, dont put it yet on the
                    if (event.value && event.label) {
                        let prevJson = affiliateJson[affiliateJson.length - 1];

                        //check if the affiliateJson last object doesnt have value
                        if (affiliateJson.length > 0 && prevJson.value == "") {
                            // Check if category exists
                            const FILTER_CATEGORY = defaultOption.filter(f => f.value === prevJson.category);

                            if (FILTER_CATEGORY.length > 0) {
                                prevJson.value = event.value;
                                prevJson.valueLabel = event.label;
                                affiliateJson[affiliateJson.length - 1] = prevJson;
                                formElement[inputName].placeholder = 'Enter keyword/s to search';

                                //update the values and format it before sending the values on the parent source
                                this.formatUserDefinedFilter(affiliateJson);
                            } else {
                                const FIELD_TYPE = defaultOption.filter(f => f.value === event.value);
                                affiliateJson[affiliateJson.length - 1] = {
                                    "categoryLabel": event.label,
                                    "category": event.value,
                                    "valueLabel": "",
                                    "value": "",
                                    "type": FIELD_TYPE.length > 0 ? FIELD_TYPE[0].type : "",
                                };
                                // formElement[inputName].placeholder = 'Enter ' + event.label;
                                formElement[inputName].placeholder = 'Enter keyword/s to search'; //EP032EV2-US028_TC-001-SC-009-0538
                            }
                        } else {

                            const FIELD_TYPE = defaultOption.filter(f => f.value === event.value);
                            affiliateJson.push({
                                "categoryLabel": event.label,
                                "category": event.value,
                                "valueLabel": "",
                                "value": "",
                                "type": FIELD_TYPE.length > 0 ? FIELD_TYPE[0].type : "",
                            });
                            formElement[inputName].placeholder = 'Enter ' + event.label;
                        }

                        this.setState({
                            formElement: formElement,
                            affiliateJson: affiliateJson,
                        }, () => {
                            if (affiliateJson.length > 0) {
                                //check if the affiliateJson last object doesnt have value
                                if (affiliateJson[affiliateJson.length - 1].value == "" && affiliateJson[affiliateJson.length - 1].type !== 'string') {
                                    //changing the options to be related on the last category selected

                                    let flag = false;
                                    defaultOption.map((opt) => {
                                        if (opt.value == affiliateJson[affiliateJson.length - 1].category) {
                                            if (opt.categoryOptions && opt.categoryOptions.length > 0) {
                                                formElement[inputName].options = opt.categoryOptions
                                                formElement[inputName].options = this.affiliateOptionChecker(inputName, affiliateJson[affiliateJson.length - 1].category, formElement[inputName].options);
                                                flag = true;
                                            } else {
                                                //this means there are no options available
                                                if (!flag) {
                                                    formElement[inputName].options = [];
                                                }
                                            }
                                        } else {
                                            if (!flag) {
                                                formElement[inputName].options = [];
                                            }
                                        }
                                    });
                                } else if (affiliateJson[affiliateJson.length - 1].value == "" && affiliateJson[affiliateJson.length - 1].type == 'string') {

                                    formElement[inputName].options = [];
                                } else {

                                    formElement[inputName].options = defaultOption;
                                }
                                this.setState({ formElement: formElement, });
                            }
                        });
                    }

                    break;
            }
        } else {
            formElement[inputName].value = '';
            // formElement[inputName].options = defaultOption;
            this.setState({ ...this.state, formElement: formElement });
        }

    }


    formatUserDefinedFilter(data) {

        let userDefinedFilter = {};

        if (data && data.length > 0) {
            data.map((item) => {
                switch (item.type) {
                    case 'string':

                        if (userDefinedFilter['AND'] == undefined) {
                            userDefinedFilter['AND'] = {};
                        }



                        switch (item.category) {
                            // case 'company_details_name':
                            //     if (userDefinedFilter.AND[item.category] == undefined) {
                            //         userDefinedFilter.AND[item.category] = [];
                            //     }
                            //     userDefinedFilter.AND[item.category].push(item.value);

                            //     break;
                            default:
                                if (userDefinedFilter.AND[item.category] == undefined) {
                                    userDefinedFilter.AND[item.category] = {};
                                }
                                userDefinedFilter.AND[item.category] = '|' + item.value + '|';
                                break;
                        }
                        break;
                    case 'option':
                    case 'multiple':
                        if (userDefinedFilter['OR'] == undefined) {
                            userDefinedFilter['OR'] = {};
                        }
                        if (userDefinedFilter.OR[item.category] == undefined) {
                            userDefinedFilter.OR[item.category] = [];
                        }
                        if (item.value !== "") {
                            userDefinedFilter.OR[item.category].push(item.value);
                        }

                        break;
                }

            });

            this.props.getValue(userDefinedFilter);
        } else {
            this.props.getValue(null);
        }
    }


    render() {
        let { formElement, affiliateJson, apiReturn, defaultOption } = { ...this.state };
        
        return (
            <Fragment>
                <div className="field e-field">
                    <InputSelectionHandler
                        {...formElement.affiliateInput}
                        onChanged={val => this.affiliateChangeHandler(val, "affiliateInput")}
                        keyPressed={event => this.searchEnterHandler(event, "affiliateInput")}
                        // onBlurred={event => this.affiliateBlurHandler(event, "affiliateInput")}
                        affiliateSelected={affiliateJson}
                        onRemoveAffiliate={(event) => this.removeAffiliate(event, "affiliateInput")}
                    />
                    {/* <label className="label">AFFILIATE</label> */}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        _userInformation: state.userInformation,
    };
};

export default withRouter(connect(mapStateToProps)(AffiliateFilter));