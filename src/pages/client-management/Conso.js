import axios from 'axios'
import React, { useState, useEffect, Fragment, useRef } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// COMPONENTS
import { MenuBar } from 'empower-container';
import CompanyProfileConso from './CompanyProfileConso';
import { Alert, Card } from 'empower-display';
import AffiliateSearch from 'empower-affiliate-search';

// RESOURCES
import { SVG_REQUEST_BLUE, SVG_COMPANY_BLUE, SVG_ADD_WHITE, SVG_ILLUSTRATION_BLANK_CHANNEL, SVG_BADGE_WARNING, SVG_INACTIVE, SVG_BADGE_DONE } from "../../assets/Asset";
import { NODE_API } from '../../constants/UrlConfigs';
import { axiosRoutes, hideAlert, showGeneralErrorAlert, getErrorMessage, getURLSearchParams, urlParamsToSearchString, datetimeFormatter } from '../../helpers/GlobalHelper';

const CancelToken = axios.CancelToken;
let clientCancel;

const Conso = props => {
    const prevProps = useRef();
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
            iconType: ['standard'],
            showInfo: true,
            title: 'Client Managements',
            icon: SVG_REQUEST_BLUE
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
            title: "Companies"
        },
        button: {
            show: true,
            actions: [
                {
                    show: true,
                    label: "Add Company",
                    action: "add-company",       // string optional
                    icon: SVG_ADD_WHITE
                },
            ]
        },
        pagination: {
            show: true,
            hideSummary: false,
            counter: 0,
            perPage: 10,
            page: 1,
            total: 0,
        },
    })

    let [affiliateFilter, setAffiliateFilter] = useState({})
    let [client, setClient] = useState({
        loaded: false,
        error: false,
        alert: {
            show: false,
            actionable: false,
            status: "",
            title: "",
            message: [],
            actions: [],
            confirmMsg: "",
        },
        data: []
    });
    let [searchAffiliate, setSearchAffiliate] = useState({
        options: [],
    })

    const getContentMenuBarActions = (action, data) => {
        switch(action) {
            case 'button':
                    if(data === 'add-company'){
                        props.history.push('/sub-app/client-management/create-company');
                    }
                break;
            case 'pagination':
                let urlSearchParams = {};
                let searchString = ''
                if (props.history.location.search) {
                    searchString = props.location.search.substring(0);
                    urlSearchParams = getURLSearchParams(searchString);
                }
                urlSearchParams.page = data.page;
                urlSearchParams.perPage = data.perPage;
                searchString = urlParamsToSearchString(urlSearchParams);
                props.history.push(`/sub-app/client-management?${searchString}`);
                break;
            default:
                console.error("No action found.")
        }
    }

    useEffect(() => {
        if(!prevProps.current){
            checkSearchParams();
            getSearchAffiliate();
        }  else if(prevProps.current && prevProps.current.location.key !== props.location.key){
            client.loaded = false;
            client.error = false;
            client.data = [];
            setClient({...client});
            setTimeout(() => {
                checkSearchParams();
            }, 200)
        }
        prevProps.current = props;
    }, [props]);

    const checkSearchParams = () => {
        try {
            let urlSearchParams = {};
            let searchString = ''
            if (props.history.location.search) {
                searchString = props.location.search.substring(0);
                urlSearchParams = getURLSearchParams(searchString);
                Object.keys(urlSearchParams).map(item => {
                    if (urlSearchParams[item] === undefined || urlSearchParams[item] === null || urlSearchParams[item] === '') {
                        delete urlSearchParams[item];
                    }
                });
                contentMenuBar.pagination.page = urlSearchParams.page ? urlSearchParams.page : contentMenuBar.pagination.page;
                contentMenuBar.pagination.perPage = urlSearchParams.perPage ? urlSearchParams.perPage : contentMenuBar.pagination.perPage;
            } else {
                contentMenuBar.pagination.page = 1;
                contentMenuBar.pagination.perPage = 10;
            }
            client.loaded = false;
            client.error = false;
            if (parseInt(contentMenuBar.pagination.page) <= 1) {
                contentMenuBar.pagination.counter = 0;
                contentMenuBar.pagination.total = 0;
            }
            setContentMenuBar({...contentMenuBar});
            setClient({...client})
            setTimeout(() => {
                getCompanyConso();
            }, 200);
            console.log(searchAffiliate)
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
            client.error = true;
            client.loaded = false;
            client.alert = showGeneralErrorAlert(client.alert);
            setClient({...client})
        }
    }

    const getSearchAffiliate = async() => {
        try {
            let params = {
                code: 'TENANT_BASIC_INFO',
            }
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-search-affiliate`, headers,  { params: params});
            let { total_no_of_records, content, status_code, message } = { ...response };
            if(status_code && status_code >= 400){
                console.error(`getSearchAffiliate: ${JSON.stringify(message)}`);
            } else {
                searchAffiliate.options = [];
                if(total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0){
                    searchAffiliate.options = content.map(item => {
                        return ({
                            referenceCode: item.util_search_affiliate_reference_code,
                            label: item.util_search_affiliate_name,
                            value: item.util_search_affiliate_code,
                            type: item.util_search_affiliate_field_type === 'select' ? 'multiple' : "string",
                            categoryOptions: []
                        });
                    });

                    setSearchAffiliate({...searchAffiliate})
                    setTimeout(() => {
                        if(searchAffiliate.options.length > 0){
                            getIndustries();
                            getTenantUsers();
                        }
                    }, 200)
                }
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getIndustries = async() => {
        try {
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-all-industries`, headers, null);
            let { total_no_of_records, content, status_code, message } = { ...response };
            if(status_code && status_code >= 400){
                console.error(`getIndustries: ${JSON.stringify(message)}`)
            } else {
                if(total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0){
                    searchAffiliate.options.map((item, idx) => {
                        if(item.value === 'tenant_detail_industry_code'){
                            searchAffiliate.options[idx].categoryOptions = content.map(item => ({
                                label: item.util_industry_name,
                                value: item.util_industry_code
                            }));
                        }
                    });
                    setSearchAffiliate({...searchAffiliate})
                }
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getTenantUsers = async() => {
        try {
            let params = {
                userType: ['PRJM', 'CXM'],
                companyCode: 'CMP-000001'
            }
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-tenant-users-by-user-type`, headers, { params: params});
            let { total_no_of_records, content, status_code, message } = { ...response };
            if(status_code && status_code >= 400){
                console.error(`getTenantUsers: ${JSON.stringify(message)}`);
            } else {
                if(total_no_of_records && total_no_of_records > 0 && content && content.constructor === Array && content.length > 0){
                    let filterCxm = content.filter(item => (item.tenant_user_type_code === 'CXM'));
                    let filterPM = content.filter(item => (item.tenant_user_type_code === 'PRJM'));
                    searchAffiliate.options.map((item, idx) => {
                        if(item.referenceCode === 'CXM'){
                            searchAffiliate.options[idx].categoryOptions = filterCxm.map(item => ({
                                label: `${item.tenant_user_first_name} ${item.tenant_user_last_name}`,
                                value: `${item.tenant_user_employee_code}`
                            }));
                        } else if(item.referenceCode === 'PRJM'){
                            searchAffiliate.options[idx].categoryOptions = filterPM.map(item => ({
                                label: `${item.tenant_user_first_name} ${item.tenant_user_last_name}`,
                                value: `${item.tenant_user_employee_code}`
                            }));
                        }
                    });
                    setSearchAffiliate({...searchAffiliate})
                }
            }

        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    const getCompanyConso = async() => {
        try {
    
            if (clientCancel !== undefined) {
                clientCancel("cancel");
            }
            let newCancelToken = new CancelToken(function executor(c) {
                clientCancel = c;
            });
    
            let params = {
                page: contentMenuBar.pagination.page,
                perPage: contentMenuBar.pagination.perPage,
                status: 'all',
                date: {"from":"","to":""},
                sort: {"by":"","order":""},
                affiliate: affiliateFilter,
            }
            const response = await axiosRoutes('get', `${NODE_API}/client-management/get-company-conso`, headers, { params: params}, newCancelToken);
            let { total_no_of_records, content, status_code, message, cancel } = { ...response };
            if((response && response.constructor === Object && Object.keys(response).length === 0) || (status_code && status_code >= 400) || message){
                console.error(`getCompanyBasicInformation: ${JSON.stringify(message)}`)
                if(status_code === 404) {
                    client.loaded = true;
                    client.error = false;
                    client.alert = hideAlert(client.alert);
                } else {
                    client.loaded = false;
                    client.error = true;
                    client.alert = showGeneralErrorAlert(client.alert);
                    client.alert.message = getErrorMessage(message);
                }
                contentMenuBar.pagination.total = 0;
                contentMenuBar.pagination.counter = 0;
                client.data = [];
            } else {
                if(!cancel){
                    client.loaded = true;
                    client.error = false;
                    client.alert = hideAlert(client.alert);
                    if (content && content.constructor === Array && content.length > 0) {
                        contentMenuBar.pagination.total = total_no_of_records;
                        contentMenuBar.pagination.counter = (contentMenuBar.pagination.perPage * contentMenuBar.pagination.page) > total_no_of_records ? total_no_of_records : (contentMenuBar.pagination.perPage * contentMenuBar.pagination.page);
                        client.data = content;
                    } else {
                        client.data = [];
                        contentMenuBar.pagination.total = 0;
                        contentMenuBar.pagination.counter = 0;
                    }
                }
            }
            setClient({...client});
            setContentMenuBar({...contentMenuBar});
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
            client.error = true;
            client.loaded = false;
            client.alert = showGeneralErrorAlert(client.alert);
            client.data = [];
            contentMenuBar.pagination.total = 0;
            contentMenuBar.pagination.counter = 0;
            setClient({...client});
            setContentMenuBar({...contentMenuBar});
        }
    }

    const displayClientItem = (data, idx) => {
        try {
            if(data && data.constructor === Object){
                let badges = [];
                if(data.tenant_detail_completion_status && data.tenant_detail_completion_status === 'INCOMPLETE'){
                    badges = [SVG_BADGE_WARNING];
                } else if(data.tenant_detail_status_code && data.tenant_detail_status_code === 'INACTIVE'){
                    badges = [SVG_INACTIVE]
                } else if(data.tenant_detail_status_code && data.tenant_detail_status_code === 'ACTIVE'){
                    badges = [SVG_BADGE_DONE]
                }
                let cxm = null;
                let cna = null;
                let companyProfile = {
                    img: data.tenant_detail_logo ? data.tenant_detail_logo : null,
                    companyCode: data.tenant_detail_external_code ? data.tenant_detail_external_code : null,
                    tradeName: data.tenant_detail_trade_name ? data.tenant_detail_trade_name : '',
                    legalName: data.tenant_detail_name ? data.tenant_detail_name : '',
                    subDetails: []
                };
                if(data.tenant_detail_external_code){
                    companyProfile.subDetails.push({
                        type: "company-id",
                        value: data.tenant_detail_external_code
                    })
                }
                if(data.tenant_detail_industry_desc){
                    companyProfile.subDetails.push({
                        type: "industry",
                        value: `${data.tenant_detail_industry_desc} ${data.tenant_detail_industry_other_value ? ('('+ data.tenant_detail_industry_other_value +')') : '' }`
                    })
                }
                if(data.tenant_detail_company_management_users && data.tenant_detail_company_management_users.constructor === Array && data.tenant_detail_company_management_users.length > 0){
                    let filteredCxm = data.tenant_detail_company_management_users.filter(item => item.user_type_code === 'CXM');
                    let filteredCna = data.tenant_detail_company_management_users.filter(item => item.user_type_code === 'PRJM');
                    cxm = filteredCxm.length > 0 && (filteredCxm[0].employee_fname || filteredCxm[0].employee_fname) ? <div className="list-details" data-testid="cxm-text"><span>{filteredCxm[0].employee_fname} {filteredCxm[0].employee_lname}</span> as {filteredCxm[0].user_type_desc}</div> : '-';
                    cna = filteredCna.length > 0 && (filteredCna[0].employee_fname || filteredCna[0].employee_fname) ? <div className="list-details"  data-testid="cna-text"><span>{filteredCna[0].employee_fname} {filteredCna[0].employee_lname}</span> as {filteredCna[0].user_type_desc}</div> : '-';
                }
                return (
                    <div className="card-list-item" key={`request-item-${idx}`}>
                        <CompanyProfileConso {...companyProfile} />
                        <div className="card-list-details">
                            {
                                data.tenant_detail_deal_info_start_date && data.tenant_detail_deal_info_start_date.constructor === String ? (
                                    <p data-testid="started-date-text"><b>Started on {datetimeFormatter(data.tenant_detail_deal_info_start_date, 'inquiry-date-standard')}</b></p>
                                ) : null
                            }
                            {cxm}
                            {cna}
                        </div>
                        <div className="card-list-badges" data-testid="company-history-badges">
                            {
                                badges.map((badge, idx) => (<Fragment key={`badge-${idx}`}>{badge}</Fragment>))
                            }
                        </div>
                    </div>
                )
            }
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
            return false;
        }
    }

    const getAffiliateSearchValue = (query) => {
        try {
            let filter = {};
            if (query && query.constructor === Object && Object.values(query).length > 0) {
                Object.values(query).map(item => {
                    if (item && item.constructor === Object && Object.keys(item).length > 0) {
                        Object.keys(item).map(fieldName => {
                            if(item[fieldName] && item[fieldName].constructor === String){
                                filter[fieldName] = item[fieldName].substring(1, item[fieldName].length-1);
                            } else {
                                filter[fieldName] = item[fieldName];
                            }
                        })
                    }
                })
            }
            let fetchRequest = JSON.stringify(filter) !== JSON.stringify(affiliateFilter) ? true : false;
            setAffiliateFilter({...filter});
            setTimeout(() => {
                if (fetchRequest) {
                    let urlSearchParams = {};
                    let searchString = ''
                    if (props.history.location.search) {
                        searchString = props.location.search.substring(0);
                        urlSearchParams = getURLSearchParams(searchString);
                    }
                    urlSearchParams.page = 1;
                    delete urlSearchParams.batchCode;
                    searchString = urlParamsToSearchString(urlSearchParams);
                    props.history.push(`/sub-app/client-management?${searchString}`);
                }
            }, 200)
        } catch (error) {
            console.error('Client Management Error: ' + JSON.stringify(error))
        }
    }

    return (
        <div className={"v2-main v2-main-lists"}>
            <div className="v2-content">
                <div className="row">
                    <div className="col-12 page-title">
                        <MenuBar { ...pageMenuBar } />
                    </div>
                    <div className="page-content card-sticky-belt">
                        <Card hideMenuBar={true}>
                            <div className="card-page">
                                <MenuBar 
                                    { ...contentMenuBar } 
                                    getActions={(action, data) => getContentMenuBarActions(action, data)}
                                >
                                    <AffiliateSearch
                                        options={searchAffiliate.options}
                                        getValue={(val) => getAffiliateSearchValue(val)}
                                        placeholder="Click to view the search options"
                                        // isAffiliateDropdown
                                    />
                                    {
                                        client.loaded ? (
                                            <div className="card-list client-list">
                                                {
                                                    client.data.length > 0 ? (
                                                        client.data.map((item, idx) => (
                                                            displayClientItem(item, idx)
                                                        ))
                                                    ) : <div className="card-blank">
                                                            <div className="icon">{SVG_ILLUSTRATION_BLANK_CHANNEL}</div>
                                                            <h4>No records were found.</h4>
                                                            <p>None of our records match this search. Please adjust your search criteria, and try again.</p>
                                                        </div>
                                                }
                                            </div>
                                        ) : client.error ? (
                                            <Alert config={client.alert} />
                                        ) : 'loading...'
                                    }
                                </MenuBar>
                            </div>
                        </Card>
                    </div>
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

export default withRouter(connect(mapStateToProps, null)(Conso));