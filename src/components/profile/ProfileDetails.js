import React, { Component, Fragment } from "react";
import { NODE_API, PROFIMGURL } from "../../constants/UrlConfigs";
import { axiosRoutes, getInitialsOfTwoStrings } from '../../helpers/GlobalHelper';

//assets 
import { SVG_TENURE, SVG_EMPLOYEEID, SVG_SITE } from '../../assets/Asset';

class PofileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {
                load: false,
                error: false,


            },
            apiReturn: {
                profile: null
            }
        };
    }


    componentDidMount() {
        this.getEmployeeProfile();
    }




    async getEmployeeProfile() {
        let { apiReturn, page } = { ...this.state };

        try {
            let params = {
                bucketCode: this.props.params.bucketCode,
                employeeCode: this.props.params.employeeCode,
                view: this.props.params.view,
                isEncrypted: this.props.isEncrypted

            };
            const response = await axiosRoutes('get', `${NODE_API}/profile/user`, null, { params: params });
            let { success, content, error } = { ...response };

            if (success) {
                apiReturn.profile = content.employeeProfile[0];
                page.load = true;


            } else {
                page.load = false;
                page.error = true;
            }
            this.setState({ ...this.state, apiReturn: apiReturn, page: page },()=>{
                if (this.props.setLoaded) {
                    this.props.setLoaded();
                }
            });





        } catch (error) {
            console.error(error, 'error in getEmployeeProfile');
        }

    }


    render() {
        let { page, apiReturn } = { ...this.state };
        let { profile } = { ...apiReturn };
        let { reportingTo, tenure } = { ...profile };

        let PROFILE_IMG = '';
        let IMG_URL_REPORTING = '';
        let PROFILE_IMG_REPORTING = '';

        if (profile) {
            const IMG_URL = PROFIMGURL + profile.employee_account_employee_code + '/' + profile.employee_account_bucket_code + '/PROFILE/' + profile.employee_personal_info_profile_pic_thumb;
            PROFILE_IMG = IMG_URL && profile.employee_personal_info_profile_pic_thumb ? <img src={IMG_URL} /> : getInitialsOfTwoStrings(profile.employee_personal_info_first_name, profile.employee_personal_info_last_name);

            if (reportingTo) {
                IMG_URL_REPORTING = PROFIMGURL + profile.reportingTo.employee_personal_info_employee_code + '/' + profile.employee_account_bucket_code + '/PROFILE/' + profile.reportingTo.employee_personal_info_profile_pic_thumb;
                PROFILE_IMG_REPORTING = IMG_URL_REPORTING && profile.reportingTo.employee_personal_info_profile_pic_thumb ? <img src={IMG_URL_REPORTING} /> : getInitialsOfTwoStrings(profile.reportingTo.employee_personal_info_first_name, profile.reportingTo.employee_personal_info_last_name);

            }


        }

        return profile ?
            <Fragment>

                <div className="profile-detail-name">
                    <div>
                        <div className="thumb thumb-lg">{PROFILE_IMG}</div>
                    </div>
                    <div>
                        <div>
                            <p>
                                {profile.employee_personal_info_first_name && profile.employee_personal_info_first_name}
                                {profile.employee_personal_info_last_name && ' ' + profile.employee_personal_info_last_name}
                            </p>
                        </div>
                        <label>{profile.job_title_name && profile.job_title_name}</label>
                        <span>{profile.departmentInfo && profile.departmentInfo.company_department_name}</span>
                    </div>
                </div>

                <div className="profile-detail-info">

                    <div>
                        <label htmlFor="">DETAILS</label>
                        <div className="info-item">
                            <div className="icon">{SVG_SITE}</div>
                            <span>{profile.site_name && profile.site_name}</span>
                        </div>
                        <div className="info-item">
                            <div className="icon">{SVG_EMPLOYEEID}</div>
                            <span>{profile.employee_account_employee_number && profile.employee_account_employee_number}</span>
                        </div>
                        {
                            tenure &&
                            <div className="info-item">
                                <div className="icon">{SVG_TENURE}</div>
                                <span>
                                    {
                                        tenure.tenureship_year && `${tenure.tenureship_year} ${tenure.tenureship_year === '1' || tenure.tenureship_year === '0' ? 'year' : 'years'}`
                                    }
                                    {
                                        tenure.tenureship_month && ` ${tenure.tenureship_month} ${tenure.tenureship_month === '0' || tenure.tenureship_month === '1' ? 'month' : 'months'}` 
                                    }
                                </span>
                            </div>
                        }

                    </div>

                    {
                        reportingTo &&

                        <div className="profile-details-reportsto">
                            <label htmlFor="">REPORTS TO</label>
                            <div>
                                <div className="thumb thumb-sm">{PROFILE_IMG_REPORTING}</div>
                                <div>
                                    <p>{profile.reportingTo.employee_personal_info_first_name} {profile.reportingTo.employee_personal_info_last_name}</p>
                                    <label>{profile.reportingTo.job_title_name}</label>
                                </div>
                            </div>
                        </div>

                    }


                </div>




            </Fragment> : page.error ? 'Error in getting employee profile' : 'Loading....'


    }


}

export default PofileDetails;
