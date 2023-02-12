import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// COMPONENTS
import { MenuBar } from 'empower-container';
// import Card from '../../components/card/Card';
import { InputSelectionHandler, SelectWithProfile } from 'empower-inputs';
import { Alert, Card } from 'empower-display';

// RESOURCES / HELPERS
import { SVG_COMPANY_BLUE, SVG_SAVE } from "../../assets/Asset";
import { axiosRoutes, getInitialsOfTwoStrings, showRequiredFieldsAlert, isValidEmail, isValidFileType, hideAlert, byteToMegabytes, getErrorMessage, showGeneralSuccessAlert, showGeneralErrorAlert } from "../../helpers/GlobalHelper";
import { NODE_API } from "../../constants/UrlConfigs";
import { MSG } from "../../constants/Messages";


const CreateCompany = props => {

    const headers = {
        headers: {
            Authorization: 'Bearer: ' + props._authentication.accessToken,
            ClientSecret: props._authentication.clientSecret,
            ClientCode: props._userInformation.profile.employeeCode,
            AccessToken: props._authentication.accessToken,
            ClientCompanyCode: props._userInformation.company.companyCode,
            ClientRole: props._userInformation.view
        }
    }
    const pageMenuBar = {
        config: {
            isWidget: false,
            withTalent: true,
            iconType: ['back'],
            showInfo: true,
            title: 'Add Company',
        },
        info: null
    };

    let [contentMenuBar, setContentMenuBar] = useState({
        config: {
            show: true,
            isWidget: false,
            withTalent: true,
            icon: SVG_COMPANY_BLUE,
            iconType: ['standard'],
            showInfo: false,
            title: "Basic Information"
        },
        buttonFooter: {
            show: true,
            actions: [
                {
                    show: true,
                    label: "Save and Continue",
                    action: "readytosubmit",       // string optional
                    className: 'button save',
                    icon: SVG_SAVE,
                    disabled: false
                },
            ]
        },
    });

    let [loaded, setLoaded] = useState(false);
    let [formError, setFormError] = useState([]);

    let [formElement, setFormElement] = useState({
        firstRow: {
            legalBusinessName: {
                label: 'LEGAL BUSINESS NAME',
                id: 'legalBusinessName',
                type: 'text',
                value: '',
                placeholder: 'Enter Legal Business Name',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: true
            },
            tradeName: {
                label: 'TRADE NAME',
                id: 'tradeName',
                type: 'text',
                value: '',
                placeholder: 'Enter Trade Name',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '8',
                display: true
            },
            website: {
                label: 'WEBSITE',
                id: 'website',
                type: 'text',
                value: '',
                placeholder: 'example.com',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: true
            },
            industry: {
                label: 'INDUSTRY',
                id: 'industry',
                type: 'select',
                placeholder: 'Select industry',
                value: '',
                disabled: false,
                options: [
                ],
                required: true,
                column: '4',
                display: true
            },
            industryOthers: {
                label: 'OTHER/S',
                id: 'industryOthers',
                type: 'text',
                value: '',
                placeholder: 'Please Specify',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: false
            },
            timezone: {
                label: 'TIMEZONE',
                id: 'timezone',
                type: 'select',
                placeholder: 'Select timezone',
                value: '',
                disabled: false,
                options: [
                ],
                required: true,
                column: '4',
                display: true
            },
            country: {
                label: 'COUNTRY',
                id: 'country',
                type: 'select',
                placeholder: 'Select country',
                value: '',
                disabled: false,
                options: [
                ],
                required: true,
                column: '4',
                display: true
            },
            state: {
                label: 'STATE/CITY',
                id: 'state',
                type: 'text',
                value: '',
                placeholder: 'Enter State/City',
                maxLength: 50,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: false
            },
            companyDescription: {
                label: 'COMPANY DESCRIPTION',
                id: 'companyDescription',
                type: 'textarea',
                value: '',
                maxLength: 1000,
                placeholder: 'Enter Company Description',
                disabled: false,
                required: true,
                column: '12',
                display: true
    
            },
            companyLogo: {
                label: 'COMPANY LOGO',
                id: "companyLogo",
                type: 'file',
                selected: [],
                accept: ".png,.jpeg,.jpg",
                disabled: false,
                required: true,
                column: '12',
                hasChips: true,
                maxsize: 5,
                display: true
            },
        },
        secondRow: {
            inBusinessSince: {
                label: 'IN BUSINESS SINCE',
                id: 'inBusinessSince',
                type: 'text',
                value: '',
                placeholder: 'Enter Year',
                maxLength: 50,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: true
            },
            businessStructure: {
                label: 'BUSINESS STRUCTURE',
                id: 'businessStructure',
                type: 'select',
                placeholder: 'Select Business Structure',
                value: '',
                disabled: false,
                options: [
                ],
                required: true,
                column: '4',
                display: true
            },
            businessStructureOthers: {
                label: 'BUSINESS STRUCTURE - OTHERS',
                id: 'businessStructureOthers',
                type: 'text',
                value: '',
                placeholder: 'Please Specify',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: false
            },
            phoneNumber: {
                label: 'PHONE NUMBER',
                id: 'phoneNumber',
                type: 'text',
                value: '',
                placeholder: 'Enter Phone Number',
                maxLength: 50,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: true
            },
            faxNumber: {
                label: 'FAX NUMBER',
                id: 'faxNumber',
                type: 'text',
                value: '',
                placeholder: 'Enter Fax Number',
                maxLength: 50,
                readOnly: false,
                disabled: false,
                required: false,
                column: '4',
                display: true
            },
            emailAddress: {
                label: 'EMAIL ADDRESS',
                id: 'emailAddress',
                type: 'text',
                value: '',
                placeholder: 'Enter Email Address',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: true
            },
            address: {
                label: 'ADDRESS',
                id: 'address',
                type: 'text',
                value: '',
                placeholder: 'Enter Address',
                maxLength: 100,
                readOnly: false,
                disabled: false,
                required: true,
                column: '8',
                display: true
            },
            companyCountry: {
                label: 'COUNTRY',
                id: 'companyCountry',
                type: 'select',
                placeholder: 'Select Country',
                value: '',
                disabled: false,
                options: [
                ],
                required: true,
                column: '4',
                display: true
            },
            stateCity: {
                label: 'STATE/CITY',
                id: 'stateCity',
                type: 'text',
                value: '',
                placeholder: 'Enter State/City',
                maxLength: 50,
                readOnly: false,
                disabled: true,
                required: true,
                column: '4',
                display: true
            },
            postalCode: {
                label: 'POSTAL CODE',
                id: 'postalCode',
                type: 'text',
                value: '',
                placeholder: 'Enter Postal Code',
                maxLength: 50,
                readOnly: false,
                disabled: false,
                required: true,
                column: '4',
                display: true
            },
        },
        thirdRow: {
            businessDevelopmentManager: {
                id: 'businessDevelopmentManager',
                type: 'multi-select',
                options: [],
                placeholder: 'Select for BDM',
                label: "BUSINESS DEVELOPMENT MANAGER",
                value: [],
                disabled: false,
                required: true,
                isMultiple: false,
                hideClearIcon: false,
                isEmployeeSelection: false,
                column: '6',
                display: true
            },
            projectManager: {
                id: 'projectManager',
                type: 'multi-select',
                options: [],
                placeholder: 'Select for Project Manager',
                label: "PROJECT MANAGER",
                value: [],
                disabled: false,
                required: true,
                isMultiple: false,
                hideClearIcon: false,
                isEmployeeSelection: false,
                column: '6',
                display: true
            },
            customerExperienceManager: {
                id: 'customerExperienceManager',
                type: 'multi-select',
                options: [],
                placeholder: 'Select for CXM',
                label: "CUSTOMER EXPERIENCE MANAGER",
                value: [],
                disabled: false,
                required: true,
                isMultiple: false,
                hideClearIcon: false,
                isEmployeeSelection: false,
                column: '6',
                display: true
            },
            customerExperienceLeader: {
                id: 'customerExperienceLeader',
                type: 'multi-select',
                options: [],
                placeholder: 'Select for CXL',
                label: "CUSTOMER EXPERIENCE LEADER",
                value: [],
                disabled: false,
                required: true,
                isMultiple: false,
                hideClearIcon: false,
                isEmployeeSelection: false,
                column: '6',
                display: true
            },
            humanResourcesBusinessPartner: {
                id: 'humanResourcesBusinessPartner',
                type: 'multi-select',
                options: [],
                placeholder: 'Select for HRBP',
                label: "HUMAN RESOURCES BUSINESS PARTNER",
                value: [],
                disabled: false,
                required: false,
                isMultiple: false,
                hideClearIcon: false,
                isEmployeeSelection: false,
                column: '6',
                display: true
            },
            hrClusterLead: {
                id: 'hrClusterLead',
                type: 'multi-select',
                options: [],
                placeholder: 'Select for HR Cluster Lead',
                label: "HR CLUSTER LEAD",
                value: [],
                disabled: false,
                required: false,
                isMultiple: false,
                hideClearIcon: false,
                isEmployeeSelection: false,
                column: '6',
                display: true
            },
        }
    });

    let [alert, setAlert] = useState({
        show: false,
        actionable: false,
        status: "",
        title: "",
        message: [],
        actions: [],
        confirmMsg: "",
    })

    useEffect(() => {
        getIndustries();
        getTimezones();
        getCountries();
        getBusinessStructure();
        getTenantUsers();
    }, []);

    const getPageMenubarAction = (action, data) => {
        switch(action) {
            case 'icon':
                    if(data === 'back'){
                        props.history.goBack();
                    }
                break;
            default:
                console.error("No action found.")
        }
    }

    const getContentMenubarAction = (action, data) => {
        switch (action) {
            case 'button':
                if (data === 'readytosubmit') {
                    let formRequiredKeysError = [];
                    Object.keys(formElement).filter(row=> {
                        Object.keys(formElement[row]).map(item => {
                            if(item !== 'companyLogo' && formElement[row][item].required && formElement[row][item].display && (
                                    formElement[row][item].value === undefined ||
                                    formElement[row][item].value === null ||
                                    formElement[row][item].value === "" ||
                                    (formElement[row][item].value.constructor === Array && formElement[row][item].value.length === 0)
                                )
                            ){
                                formRequiredKeysError.push(item);
                            } else if(item === 'companyLogo' && formElement[row][item].required && formElement[row][item].display && (
                                    formElement[row][item].selected === undefined ||
                                    formElement[row][item].selected === null ||
                                    formElement[row][item].selected === "" ||
                                    (formElement[row][item].selected.constructor === Array && formElement[row][item].selected.length === 0)
                                )
                            ){
                                formRequiredKeysError.push(item);
                            }
                        })
                    });
                    if (formRequiredKeysError.length < 1) {
                        if (byteToMegabytes(formElement.firstRow.companyLogo.maxsize) < formElement.firstRow.companyLogo.selected[0].size) {
                            alert = showRequiredFieldsAlert(alert);
                            alert.title = MSG.title.title2;
                            alert.message = [MSG.category.general.note2];
                            formError = ['companyLogo'];
                        } else if (!isValidEmail(formElement.secondRow.emailAddress.value)) {
                            alert = showRequiredFieldsAlert(alert);
                            alert.title = MSG.title.title2;
                            alert.message = [MSG.category.email.note1];
                            formError = ['emailAddress'];
                        } else if (!isValidFileType(formElement.firstRow.companyLogo.selected[0]?.name, formElement.firstRow.companyLogo.accept.split(','))) {
                            alert = showRequiredFieldsAlert(alert);
                            alert.title = MSG.title.title3;
                            alert.message = [MSG.category.general.note3];
                            formError = ['companyLogo'];
                        } else {
                            formError = [];
                            alert = hideAlert(alert)
                            Object.keys(formElement).map(row => {
                                Object.keys(formElement[row]).map(item => {
                                    formElement[row][item].disabled = true;
                                })
                            });
                            contentMenuBar.buttonFooter.actions[0].label = 'Saving...';
                            contentMenuBar.buttonFooter.actions[0].disabled = true;
                        }
                    } else {
                        alert = showRequiredFieldsAlert(alert);
                        formError = formRequiredKeysError;
                    }

                    setFormError([...formError]);
                    setAlert({...alert});
                    setFormElement({...formElement});
                    if(formError.length === 0){
                        setTimeout(() => {
                            postSaveCompanyBasicInfo();
                        }, 500);
                    }
                }
                break;
            default:
                console.error("Action not found.")
                break;
        }
    }

    const postSaveCompanyBasicInfo = async() => {
        try {
            let submitValues = {
                createdBy: props._userInformation.profile.decryptedEmployeeCode
            };
            Object.keys(formElement).map(row => {
                Object.keys(formElement[row]).map(item => {
                    if (item !== 'companyLogo') {
                        submitValues[item] = formElement[row][item].value;
                    }
                })
            });

            const formData = new FormData();
            formData.append('submitValues', JSON.stringify(submitValues));
            if (formElement.firstRow.companyLogo.selected.length > 0) {
                formElement.firstRow.companyLogo.selected.map(file => {
                    formData.append('files', file);
                })
            }

            const response = await axiosRoutes('post', `${NODE_API}/client-management/post-save-company-basic-info`, headers, formData);
            let {  status_code, message } = { ...response };
            if (status_code && status_code >= 400) {
                alert = showGeneralErrorAlert(alert);
                alert.message = getErrorMessage(message);
                Object.keys(formElement).map(row => {
                    Object.keys(formElement[row]).map(item => {
                        formElement[item].disabled = false;
                    })
                });
                contentMenuBar.buttonFooter.actions[0].label = 'Save and Continue';
                contentMenuBar.buttonFooter.actions[0].disabled = false;
            } else {
                alert = showGeneralSuccessAlert(alert);
                alert.message = [MSG.category.clientManagement.note1];
                contentMenuBar.buttonFooter.show = false;
            }
            setFormElement({...formElement});
            setContentMenuBar({...contentMenuBar});
            setAlert({...alert});

            if (status_code < 400) {
                setTimeout(() => {
                    alert = hideAlert(alert);
                    setAlert({...alert});
                    props.history.push(`/client-management`);
                }, 2000);
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getIndustries = async() => {
        try {
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-all-industries`, headers, null);
            let { total_no_of_records, content, status_code, message } = { ...response };
            if (status_code && status_code >= 400) {
                console.error(`getIndustries: ${JSON.stringify(message)}`)
            } else {
                if (total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0) {
                    formElement.firstRow.industry.options = content.map(item => {
                        return { label: item.util_industry_name, value: item.util_industry_code }
                    });
                    setFormElement({...formElement});
                }
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getTimezones = async() => {
        try {
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-all-timezones`, headers, null);
            let { total_no_of_records, content, status_code, message } = { ...response };
            if (status_code && status_code >= 400) {
                console.error(`getTimezones: ${JSON.stringify(message)}`)
            } else {
                if (total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0) {
                    formElement.firstRow.timezone.options = content.map(item => {
                        return { label: item.util_timezone_name, value: item.util_timezone_code }
                    });
                    setFormElement({...formElement});
                }
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getCountries = async() => {
        try {
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-all-countries`, headers, null);
            let { total_no_of_records, content, status_code, message } = { ...response };
            if (status_code && status_code >= 400) {
                console.error(`getCountries: ${JSON.stringify(message)}`)
            } else {
                if (total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0) {
                    formElement.firstRow.country.options = content.map(item => {
                        return { label: item.util_country_name, value: item.util_country_code }
                    });
                    formElement.secondRow.companyCountry.options = formElement.firstRow.country.options;
                    setFormElement({...formElement});
                }
            }

        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getBusinessStructure = async() => {
        try {
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-all-business-structure`, headers, null);
            let { total_no_of_records, content, status_code, message } = { ...response };
            if (status_code && status_code >= 400) {
                console.error(`getBusinessStructure: ${JSON.stringify(message)}`)
            } else {
                if (total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0) {
                    formElement.secondRow.businessStructure.options = content.map(item => {
                        return { label: item.util_business_struct_name, value: item.util_business_struct_code }
                    });
                    setFormElement({...formElement});
                }
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getTenantUsers = async() => {
        try {
            let params = {
                userType: ['BDM', 'PRJM', 'CXM', 'CEXPL', 'HRBP', 'HRCL'],
                companyCode: 'CMP-000001'
            }
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-tenant-users-by-user-type`, headers, { params: params });
            let { total_no_of_records, content, status_code, message } = { ...response };
            if (status_code && status_code >= 400) {
                console.error(`getTenantUsers: ${JSON.stringify(message)}`);
            } else {
                if (total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0) {
                    params.userType.map(item => {
                        let filteredItems = content.filter(opt => (opt.tenant_user_type_code === item));
                        if (filteredItems.length > 0) {
                            let mappedOptions = filteredItems.map(item => {
                                return {
                                    employee_name: `${item.tenant_user_first_name} ${item.tenant_user_last_name}`,
                                    employee_position: item.tenant_user_type_name,
                                    employee_email: item.tenant_user_email,
                                    employee_code: item.tenant_user_employee_code,
                                    employee_bucket_code: item.tenant_user_bucket_code,
                                    employee_profile_pic: item.tenant_user_profile_pic,
                                    initials: getInitialsOfTwoStrings(item.tenant_user_first_name, item.tenant_user_last_name),
                                }
                            });
                            switch (item) {
                                case 'BDM':
                                    formElement.thirdRow.businessDevelopmentManager.options = mappedOptions;
                                    break;
                                case 'PRJM':
                                    formElement.thirdRow.projectManager.options = mappedOptions;
                                    break;
                                case 'CXM':
                                    formElement.thirdRow.customerExperienceManager.options = mappedOptions;
                                    break;
                                case 'CEXPL':
                                    formElement.thirdRow.customerExperienceLeader.options = mappedOptions;
                                    break;
                                case 'HRBP':
                                    formElement.thirdRow.humanResourcesBusinessPartner.options = mappedOptions;
                                    break;
                                case 'HRCL':
                                    formElement.thirdRow.hrClusterLead.options = mappedOptions;
                                    break;
                                default: break;
                            }
                            setFormElement({...formElement})
                        } else {
                            console.error(`${item}: No available data`);
                        }
                    });
                }
            }
            setLoaded(true)
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const inputChangedHandler = (input, row, val) => {
        try {
            if(row === 'thirdRow'){
                formElement[row][input].value = val;
            } else {
                if(input === 'companyLogo'){
                    formElement[row][input].selected = val.selected;
                } else {
                    formElement[row][input].value = val.target.value;
                }
            }
            if (input === 'companyCountry') {
                formElement[row].stateCity.disabled = val.target.value ? false : true;
                formElement[row].stateCity.value = val.target.value ? formElement[row].stateCity.value : '';
            } else if (input === 'country') {
                    formElement[row].state.display = val.target.value ? true : false;
                    formElement[row].state.value = val.target.value ? formElement[row].state.value : '';
            } else if (input === 'industry') {
                formElement[row].industryOthers.value = '';
                if (val.target.value === 'others') {
                    formElement[row].industryOthers.display = true;
                } else {
                    formElement[row].industryOthers.display = false;
                }
            } else if (input === 'businessStructure') {
                formElement[row].businessStructureOthers.value = '';
                if (val.target.value === 'others') {
                    formElement[row].businessStructureOthers.display = true;
                } else {
                    formElement[row].businessStructureOthers.display = false;
                }
            }

            if (formError.length > 0 && formError.includes(input)) {
                if (val !== undefined && val !== null && val !== "") {
                    formError = formError.filter(item => (item !== input));
                    if (formError.length === 0) {
                        alert = hideAlert(alert);
                    }
                }
            }
            setFormElement({...formElement})
            setFormError([...formError]);
            setAlert({...alert});
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    return (
        <div className={"v2-main v2-main-lists"}>
            <div className="v2-content sub-app">
                <MenuBar 
                    { ...pageMenuBar } 
                    getActions={(action, data) => getPageMenubarAction(action, data)}
                />
                <div className="page-content client-page-content">
                    <div className="company-header">
                        <Card>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="profile-item">
                                            <div class="thumb thumb-xl">
                                                <span>Image here</span>
                                            </div>
                                            <h3>New Client</h3>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <Card hideMenuBar={true}>
                        <div className="card-page">
                            <MenuBar  
                                { ...contentMenuBar }
                                getActions={(action, data) => getContentMenubarAction(action, data)}
                            >
                                <div className="card-content">
                                    <Alert config={alert} />
                                    <div className="row">
                                        {
                                            Object.keys(formElement.firstRow).map(item => (
                                                formElement.firstRow[item].display ? ( 
                                                    <div key={item} className={`col-${formElement.firstRow[item].column} ${formError.includes(item) ? "is-invalid" : ""}`}>
                                                        <InputSelectionHandler
                                                            config={{...formElement.firstRow[item]}}
                                                            onChanged={val => inputChangedHandler(item, 'firstRow', val)}
                                                        />
                                                        {
                                                            formElement.firstRow[item].type === 'file' ? (
                                                                <span>File size: Max of 5MB</span>
                                                            ) : null
                                                        }
                                                    </div>
                                                ) : null
                                            ))
                                        }
                                    </div>
                                    <div className="row">
                                        {
                                            Object.keys(formElement.secondRow).map(item => (
                                                formElement.secondRow[item].display ? (
                                                    <div key={item} className={`col-${formElement.secondRow[item].column} ${formError.includes(item) ? "is-invalid" : ""}`}>
                                                        <InputSelectionHandler
                                                            config={{...formElement.secondRow[item]}}
                                                            onChanged={val => inputChangedHandler(item, 'secondRow', val)}
                                                        />
                                                    </div>
                                                ) : null
                                            ))
                                        }
                                    </div>
                                    <div className="row">
                                        {
                                            loaded ? (
                                                Object.keys(formElement.thirdRow).map(item => (
                                                    <div key={item} className={`col-${formElement.thirdRow[item].column} ${formError.includes(item) ? "is-invalid" : ""}`}>
                                                        <SelectWithProfile
                                                            config={{...formElement.thirdRow[item]}}
                                                            onChanged={val => inputChangedHandler(item, 'thirdRow', val)}
                                                        />
                                                    </div>
                                                ))
                                            ) : false
                                        }
                                    </div>
                                </div>
                            </MenuBar>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        _userInformation: state.userInformation,
        _acl: state.acl,
        _authentication: state.authentication
    };
};

export default withRouter(connect(mapStateToProps, null)(CreateCompany));