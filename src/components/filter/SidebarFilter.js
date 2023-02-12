import InputSelectionHandler from '../input/InputSelectionHandler';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { axiosRoutes } from '../../helpers/GlobalHelper';
import { API, NODE_API } from "../../constants/UrlConfigs";
import { SideLoader } from '../../constants/Loader';

class SidebarFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: {
                loaded: false,
            },
            formElement: {
                dateRange: {
                    id: "dateRange",
                    type: 'datepicker',
                    placeholder: 'Select date',
                    value: this.props.dateValue ? this.props.dateValue : null,
                    disabled: false,
                    required: true,
                    description: "Date",
                    field_name: this.getDateByPage(),
                },
                status: {
                    id: 'status',
                    label: 'Status',
                    value: this.props.statusValue ? this.props.statusValue : '',
                    options: []
                },

                sort: {
                    id: 'sort',
                    label: 'Sort',
                    type: 'select',
                    placeholder: '-',
                    value: this.props.sortingValue && this.props.sortingValue.sort ? this.props.sortingValue.sort : '',
                    options: []
                },
                sortType: {
                    id: 'sortType',
                    label: 'sortType',
                    value: this.props.sortingValue && this.props.sortingValue.sortType ? this.props.sortingValue.sortType : '',
                }
            },
            defaultOption: [],

            sidebarValues: {
                orderBy: null,
                date: this.props.dateValue ? '>' + this.props.dateValue.from + ',' + this.props.dateValue.to + '<' : null,
                query: this.props.statusValue ? { AND: { request_status: this.props.statusValue } } : null,
            },
        }
    }

    componentWillUnmount() {
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
        let { defaultOption, formElement, page } = { ...this.state };
        try {
            const params = {
                user: this.props._userInformation.view.toUpperCase(),
                page: this.props.page
            }
            const response = await axiosRoutes('get', `${NODE_API}/utils/get-page-fieldnames`, null, { params: params });
            let { success, content, error } = { ...response };

            if (success) {
                let details = content.filterPageFieldsNameByRoles;

                if (details && details.length > 0) {
                    details.map((v) => {


                        switch (v.filter_category_field_type) {
                            case 'string':
                                if (v.filter_category_field_type && v.filter_category_field_type == "string") {
                                    defaultOption.push({
                                        "label": v.filter_category_description,
                                        "value": v.filter_category_field_name,
                                    });
                                }

                                formElement.sort.options = defaultOption;
                                break;

                            case 'option':
                                switch (v.filter_category_field_role_field_name) {
                                    case 'dtr_final_status_is_certify':
                                        v.fieldCategory.categoryOption.map(f => {
                                            formElement.status.options.push({
                                                label: f.filter_category_option_label,
                                                value: f.filter_category_option_value,
                                                field: f.filter_category_option_field_name
                                            })
                                        })

                                        break;

                                }
                                break;




                        }



                    });
                }

                //harcoded statuses on the request page side bar filter

                if (this.props.page == "REQUEST_PAGE") {
                    if (this.props.view == "TALENT") {
                        formElement.status.options = [
                            {
                                label: "All",
                                value: "all",
                                field: "status"
                            },
                            {
                                label: "Pending",
                                value: "pending",
                                field: "status"
                            },
                            {
                                label: "Approved",
                                value: "approved",
                                field: "status"
                            },
                            {
                                label: "Rejected",
                                value: "rejected",
                                field: "status"
                            },
                            {
                                label: "Cancelled",
                                value: "cancelled",
                                field: "status"
                            },
                        ];
                        // }else if(this.props.view == "CLIENT"){
                    } else {
                        formElement.status.options = [
                            {
                                label: "All",
                                value: "all",
                                field: "status"
                            },
                            {
                                label: "Pending",
                                value: "pending",
                                field: "status"
                            },
                            {
                                label: "Done",
                                value: "done",
                                field: "status"
                            },
                        ];
                    }
                    // formElement.status.value = "pending";
                }else if(this.props.page == "TALENT_DIRECTORY"){
                    formElement.status.options = [
                        {
                            label: "All",
                            value: "all",
                            field: "status"
                        },
                        {
                            label: "Active",
                            value: "active",
                            field: "status"
                        },
                        {
                            label: "Incomplete",
                            value: "incomplete",
                            field: "status"
                        },
                        {
                            label: "Inactive",
                            value: "inactive",
                            field: "status"
                        },
                    ];
                }

                page.loaded = true;

            } else {

            }

            this.setState({
                defaultOption: defaultOption,
                formElement: formElement,
                page: page,
            }, () => {
                if (this.props.setLoaded) {
                    this.props.setLoaded();
                }
            })

        } catch (error) {
            console.error(error, 'Error in getPageFieldNamesByRoles');
            return <Alert config={this.RENDER_ALERT} />
        }

    }

    /**
    * getDateByPage
    * generate a datepicker component depending on a particular page
    * @returns - datepicker component
    * @memberof Filter
    */
    getDateByPage() {
        try {
            let param = '';
            if (this.props.page === 'TIME_AND_ATTENDANCE') {
                param = 'dtr_final_status_work_date';

            } else if (this.props.page === 'REQUEST_PAGE') {
                param = 'employee_request_junction_affected_date';

            } else if (this.props.page === 'PAYROLL') {
                param = 'payroll_query_created_at';

            } else if (this.props.page === 'INQUIRIES') {
                param = 'inquiries_request_junctions_created_at';
            }

            return param;

        } catch (err) {
            console.error(err, 'Error in getDateByPage');
            return <Alert config={this.RENDER_ALERT} />
        }

    }

    inputChangedHandler(val, inputName) {
        let { formElement, sidebarValues } = { ...this.state };



        switch (inputName) {
            case 'sort':
            case 'sortType':
                formElement[inputName].value = val;
                // formElement.sortType.value = "";
                //checking if the sort and sorttype got both values
                if (formElement.sort.value != "" && formElement.sortType.value != "") {
                    let orderBy = {};
                    orderBy[formElement.sort.value] = formElement.sortType.value;
                    sidebarValues.orderBy = orderBy;

                } else {
                    //cleared
                    formElement.sortType.value = "";
                    sidebarValues.orderBy = null;
                }
                // this.props.getValue(sidebarValues, inputName);
                break;


            case 'dateRange':
                formElement[inputName].value = val;
                if (val && val.from && val.to) {
                    let query = '>' + val.from + ',' + val.to + '<'

                    sidebarValues.date = query;
                } else {
                    sidebarValues.date = null;
                }


                break;

            case 'status':
                if (val && val !== formElement.status.value) {
                    formElement[inputName].value = val;
                    //need to optimized this
                    let query;
                    if (this.props.page == "REQUEST_PAGE") {
                        query = { AND: { request_status: val.toString() } };
                    } else if (this.props.page == "CLIENT_MANAGEMENT") {
                        query = { AND: { client_status: val.toString() } };
                    } else if(this.props.page == "TALENT_DIRECTORY") {
                        query = { AND: { talent_status: val.toString() } };
                    } else {
                        query = { AND: { dtr_final_status_is_certify: val.toString() } };
                    }

                    sidebarValues.query = query;
                } else {
                    //no unselection on request page
                    if (this.props.page != "REQUEST_PAGE" && this.props.page != "TALENT_DIRECTORY") {
                        sidebarValues.query = null;
                        formElement[inputName].value = ''
                    }


                }


                break;

        }


        this.setState({ ...this.state, formElement, sidebarValues }, () => {
            if (inputName == "sort" && val != "" && formElement.sortType.value == "") {
                // dont return the getvalue
            } else {
                if(this.props.getValue){
                    this.props.getValue(sidebarValues, inputName);
                }
                
            }
        });
    }

    componentDidMount() {
        let { sidebarValues, page, formElement } = { ...this.state };

        let orderBy = {};

        if (this.props.sortingValue && this.props.sortingValue.sort && this.props.sortingValue.sortType) {
            orderBy[this.props.sortingValue.sort] = this.props.sortingValue.sortType;
            sidebarValues.orderBy = orderBy;
        }
        if(this.props.page === 'CLIENT_MANAGEMENT'){
            page.loaded = true;
            formElement.status.options = [
                {
                    label: "All",
                    value: "all",
                    field: "status"
                },
                {
                    label: "Active",
                    value: "active",
                    field: "status"
                },
                {
                    label: "Inactive",
                    value: "inactive",
                    field: "status"
                },
                {
                    label: "Incomplete",
                    value: "incomplete",
                    field: "status"
                }
            ];
            formElement.sort.options = [
                {
                    label: 'Start Date',
                    value: 'tenant_detail_deal_info_start_date'
                }
            ]

        }

        this.setState({ ...this.state, sidebarValues, page, formElement }, () => {
            if(this.props.page !== 'CLIENT_MANAGEMENT'){
                this.getPageFieldNamesByRoles();
            }
        });


    }

    componentDidUpdate(prevStatus) {
        let { formElement, sidebarValues } = { ...this.state };
       
        if (this.props.location.search == "" && prevStatus.location.search !="") {

            formElement.dateRange.value = null;
            formElement.sort.value = '';
            formElement.sortType.value = '';

            sidebarValues.orderBy = null;
            sidebarValues.date = null;
            this.setState({ ...this.state, formElement, sidebarValues});

        }

    }


    clearFilters() {
        let { formElement, sidebarValues } = { ...this.state };
        formElement.dateRange.value = null;
        formElement.sort.value = '';
        formElement.sortType.value = '';

        sidebarValues.orderBy = null;
        sidebarValues.date = null;

        this.setState({
            formElement: formElement,
            sidebarValues: sidebarValues,
        }, () => {
            if(this.props.getValue){
                this.props.getValue(sidebarValues, "clear");
            }
        });

    }

    render() {
        let { formElement, affiliateJson, defaultOption, page } = { ...this.state }


        return (
            <Fragment>
                {
                    page.loaded ? (
                        <div className="card">
                            {
                                formElement.status.options.length > 0 &&
                                <Fragment>
                                    <div className="side-title">
                                        <h6>BY STATUS</h6>
                                    </div>
                                    <div className="side-certify">
                                        {
                                            formElement.status.options.length > 0 &&
                                            formElement.status.options.map(f => {
                                                let is_active = f.value === formElement.status.value ? 'is-active' : '';
                                                return <div
                                                    className={'icon-' + f.value + ' ' + is_active} key={f.value}
                                                    onClick={event => this.inputChangedHandler(f.value, "status")}
                                                >
                                                    <div className="icon"></div> <span>{f.label}</span>

                                                </div>
                                            })

                                        }
                                    </div>

                                </Fragment>
                            }

                            {
                                this.props.page && this.props.page != "TALENT_DIRECTORY" ? (
                                    <Fragment>
                                        <div className="side-title">
                                <h6>BY DATE</h6>
                                </div>
                                <div className={'field e-field'}>
                                    <label className='e-input-label'>DATE</label>
                                    <InputSelectionHandler
                                        {...formElement.dateRange}
                                        multiple={true}
                                        onChanged={event => this.inputChangedHandler(event, "dateRange")}
                                        disabled={false}
                                    />
                                </div>
                                <div className="side-title">
                                    <h6>SORT</h6>
                                </div>
                                <div className={'field e-field'}>
                                    <label className='e-input-label'>CATEGORY</label>

                                    <InputSelectionHandler
                                        {...formElement.sort}
                                        onChanged={val => this.inputChangedHandler(val, "sort")}
                                    />
                                    <div className={"button-group filter-sort"}>
                                        {
                                            ['asc', 'desc'].map((v, i) => (
                                                <button
                                                    key={'bg_' + i}
                                                    type="button"
                                                    value={typeof v.toString() !== 'undefined' ? v.toString() : ""}
                                                    className={formElement.sortType.value === v ? "button outline  is-active" : "button outline "}
                                                    disabled={formElement.sort.value == ''}
                                                    onClick={e => this.inputChangedHandler(v, 'sortType')}
                                                // disabled={!filterForm.sortOptions.touched}
                                                >
                                                    <div className="icon"></div>
                                                    <span>{v == "asc" ? "Ascending" : "Descending"}</span>
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className={"button"}
                                        onClick={e => this.clearFilters()}
                                    // disabled={!filterForm.sortOptions.touched}
                                    >
                                        <div className="icon"></div>
                                        <span>Clear Filters</span>
                                    </button>
                                </div>
                        
                                    </Fragment>
                                ) : null
                            }
                        </div>

                    ) : <SideLoader />
                }
            </Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        _tkn: state.user.user._tkn,
        _view: state.user.view,
        _userInfo: state.user.user.info,
        _userTry: state.user.account_type,
        _userInformation: state.userInformation,
    };
};

export default withRouter(connect(mapStateToProps)(SidebarFilter));