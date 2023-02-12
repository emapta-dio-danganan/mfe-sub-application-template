
const Endpoints = require('../helper/Endpoints');
const Http = require('../helper/Http');
const Helper = require('../helper/Helper');
const fs = require('fs');

exports.postSaveCompanyBasicInfo = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        const submitValues = JSON.parse(request.body.submitValues);
        const files = request.files;
        let tenantUsers = [];
        if (submitValues.businessDevelopmentManager.length > 0) {
            submitValues.businessDevelopmentManager.map(item => {
                tenantUsers.push({
                    tenant_user_type: "MANAGEMENT",
                    tenant_user_role_code: "BDM",
                    tenant_user_employee_code: item,
                    tenant_user_is_active: true
                })
            });
        }
        if (submitValues.projectManager.length > 0) {
            submitValues.projectManager.map(item => {
                tenantUsers.push({
                    tenant_user_type: "MANAGEMENT",
                    tenant_user_role_code: "PRJM",
                    tenant_user_employee_code: item,
                    tenant_user_is_active: true
                })
            });
        }
        if (submitValues.customerExperienceManager.length > 0) {
            submitValues.customerExperienceManager.map(item => {
                tenantUsers.push({
                    tenant_user_type: "MANAGEMENT",
                    tenant_user_role_code: "CXM",
                    tenant_user_employee_code: item,
                    tenant_user_is_active: true
                })
            });
        }
        if (submitValues.customerExperienceLeader.length > 0) {
            submitValues.customerExperienceLeader.map(item => {
                tenantUsers.push({
                    tenant_user_type: "MANAGEMENT",
                    tenant_user_role_code: "CEXPL",
                    tenant_user_employee_code: item,
                    tenant_user_is_active: true
                })
            });
        }
        if (submitValues.humanResourcesBusinessPartner.length > 0) {
            submitValues.humanResourcesBusinessPartner.map(item => {
                tenantUsers.push({
                    tenant_user_type: "MANAGEMENT",
                    tenant_user_role_code: "HRBP",
                    tenant_user_employee_code: item,
                    tenant_user_is_active: true
                })
            });
        }
        if (submitValues.hrClusterLead.length > 0) {
            submitValues.hrClusterLead.map(item => {
                tenantUsers.push({
                    tenant_user_type: "MANAGEMENT",
                    tenant_user_role_code: "HRCL",
                    tenant_user_employee_code: item,
                    tenant_user_is_active: true
                })
            });
        }
        let query = {
            request_data: {
                tenant_detail_name: submitValues.legalBusinessName,
                tenant_detail_trade_name: submitValues.tradeName,
                tenant_detail_website: submitValues.website,
                tenant_detail_industry_code: submitValues.industry,
                tenant_detail_industry_other_value: submitValues.industryOthers ? submitValues.industryOthers : null,
                tenant_detail_country_code: submitValues.country,
                tenant_detail_state_city: submitValues.state,
                tenant_detail_desc: submitValues.companyDescription,
                tenant_detail_business_since: `${submitValues.inBusinessSince}-01-01`,
                tenant_detail_business_struct: submitValues.businessStructure,
                tenant_detail_business_struct_other: submitValues.businessStructureOthers,
                tenant_detail_created_by: submitValues.createdBy,
                tenant_detail_contacts: [
                    {
                        contact_type: 'PRIMARY_CONTACT',
                        phone_number: submitValues.phoneNumber,
                        fax_number: submitValues.faxNumber,
                        email_address: submitValues.emailAddress,

                    }
                ],
                tenant_detail_address: [
                    {
                        address: submitValues.address,
                        state: submitValues.stateCity,
                        address_type: 'MAIN_ADDRESS',
                        country_code: submitValues.companyCountry,
                        city: submitValues.stateCity,
                        postal_code: submitValues.postalCode,
                    }
                ],
                tenant_detail_support_time_zones: [
                    {
                        supported_timezone_type: "PRIMARY_TIMEZONE",
                        supported_timezone_code: submitValues.timezone,
                    }
                ],
                tenant_detail_users: tenantUsers
            }
        };
        if (files) {
            query['attachments'] = files;
        }
        const apiUrl = Helper.generateWebAppURL(process.env.CLIENT_MGT_URL, Endpoints.CLIENT_MANAGEMENT.SAVE_COMPANY_INFO);
        Http.generateMultipartFormPostRequest(apiUrl, query, headers)
            .then(data => {
                if (data.status_code && data.status_code < 400 && data.content) {
                    data.content.encryptedCompanyCode = data.content.tenant_detail_external_code ? Helper.encryptItem(data.content.tenant_detail_external_code) : 'undefined';
                }

                if (files) {
                    files.map(file => {
                        fs.unlinkSync(file.path)
                    })
                }

                response.json(data);
            }).catch(error => {
                if (files) {
                    files.map(file => {
                        fs.unlinkSync(file.path)
                    })
                }
                console.error("error", error)
                let returnObj = {
                    message: { 'code_error': 'Kindly check the construction of code' },
                    status: 'BAD_CODE',
                    status_code: 500
                }
                response.json(returnObj);
            });
    } catch (error) {
        console.error("error", error)
        let returnObj = {
            message: { 'code_error': 'Kindly check the construction of code' },
            status: 'BAD_CODE',
            status_code: 500
        }
        response.json(returnObj);
    }
}

exports.getCompanyConso = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let page = request.query.page && parseInt(request.query.page) ? parseInt(request.query.page) - 1 : 0;
        let limit = request.query.perPage;
        let orQuery = [];
        let orderByQuery = 'desc=tenant_detail_status_order,tenant_detail_updated_at,tenant_detail_created_at';
        let filterQuery = '';
        if (request.query.status && request.query.status !== 'all') {
            if (request.query.status === 'incomplete') {
                filterQuery = filterQuery + `tenant_detail_completion_status.eq=${request.query.status}`;
            } else {
                filterQuery = filterQuery + `tenant_detail_status_code.eq=${request.query.status}`;
            }
        }
        if (request.query.date && JSON.parse(request.query.date) && JSON.parse(request.query.date).constructor === Object) {
            let parseDateObj = JSON.parse(request.query.date);
            if (parseDateObj.from && parseDateObj.to) {
                if (parseDateObj.from !== parseDateObj.to) {
                    filterQuery = `${filterQuery ? `${filterQuery}%26` : ''}tenant_detail_deal_info_start_date.gte=${parseDateObj.from}%26tenant_detail_deal_info_start_date.lte=${parseDateObj.to}`;
                } else {
                    filterQuery = `${filterQuery ? `${filterQuery}%26` : ''}tenant_detail_deal_info_start_date.eq=${parseDateObj.from}`;
                }
            }
        }
        if (request.query.sort && JSON.parse(request.query.sort) && JSON.parse(request.query.sort).constructor === Object) {
            let parseSortObj = JSON.parse(request.query.sort);

            if (parseSortObj.by && parseSortObj.order) {
                orderByQuery = `${parseSortObj.order}=${parseSortObj.by}`;
            }
        }
        if (request.query.affiliate && JSON.parse(request.query.affiliate) && JSON.parse(request.query.affiliate).constructor === Object) {
            let parseAffiliate = JSON.parse(request.query.affiliate);
            if (Object.keys(parseAffiliate).length > 0) {
                Object.keys(parseAffiliate).map(item => {
                    if (parseAffiliate[item] && parseAffiliate[item].constructor === Array) {
                        parseAffiliate[item].map(val => {
                            filterQuery = `${filterQuery ? `${filterQuery}%26` : ''}${item}.like=${val}`
                        });
                    } else if (parseAffiliate[item] && parseAffiliate[item].constructor === String) {
                        filterQuery = `${filterQuery ? `${filterQuery}%26` : ''}${item}.like=${parseAffiliate[item]}`
                    }
                });
            }
        }

        if (filterQuery) {
            orQuery.push(`${filterQuery}%26tenant_detail_deleted_by.eq=null`);
        } else {
            orQuery.push(`tenant_detail_deleted_by.eq=null`);
        }

        let query = {
            page: page.toString(),
            limit: limit.toString(),
            where: { or: orQuery },
            select: [
                'tenant_detail_id',
                'tenant_detail_external_code',
                'tenant_detail_name',
                'tenant_detail_trade_name',
                'tenant_detail_industry_code',
                'tenant_detail_industry_other_value',
                'tenant_detail_company_management_users',
                'tenant_detail_industry_desc',
                'tenant_detail_status_code',
                'tenant_detail_deal_info_start_date',
                'tenant_detail_logo',
                'tenant_detail_completion_status',
                'tenant_detail_template_config_code'
            ],
            order: orderByQuery,
            scope: 'prosperity_scope'
        };

        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.CLIENT_MANAGEMENT.GET_COMPANY_BASIC_INFO, query);

        Http.genarateSimpleGetRequest(apiUrl, headers)
            .then(data => {
                response.json(data);
            }).catch(error => {
                console.error("error", error)
                let returnObj = {
                    message: { 'code_error': 'Kindly check the construction of code' },
                    status: 'BAD_CODE',
                    status_code: 500
                }
                response.json(returnObj);
            });





    } catch (error) {
        console.error("error", error)
        let returnObj = {
            message: { 'code_error': 'Kindly check the construction of code' },
            status: 'BAD_CODE',
            status_code: 500
        }
        response.json(returnObj);
    }
}