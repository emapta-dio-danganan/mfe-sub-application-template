const Endpoints = require('../helper/Endpoints');
const Http = require('../helper/Http');
const Helper = require('../helper/Helper');
const fs = require('fs');
const https = require('https'); // or 'https' for https:// URLs
exports.fileUpload = async (request, response) => {
    response.json({ status: 'success', message: 'file uploaded' });
}


exports.getAllIndustries = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let query = {
            page: '0',
            limit: '100',
            where: { or: [] },
            select: ['util_industry_id', 'util_industry_name', 'util_industry_desc', 'util_industry_code'],
            order: 'asc=util_industry_name',
            scope: 'prosperity_scope'
        }

        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.UTILS.INDUSTRIES, query);
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

exports.getAllTimezones = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let query = {
            page: '0',
            limit: '100',
            where: { or: [] },
            select: [
                'util_timezone_id', 
                'util_timezone_code', 
                'util_timezone_name', 
                'util_timezone_desc', 
                'util_timezone_hours',
                'util_timezone_time_diff',
                'util_timezone_country_code',
                'util_timezone_country_label',
                'util_timezone_country_name',
                'util_timezone_abbrv'
            ],
            order: 'asc=util_timezone_country_label',
            scope: 'prosperity_scope'
        }

        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.UTILS.TIMEZONE, query);
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

exports.getAllCountries = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let query = {
            page: '0',
            limit: '100',
            where: { or: [] },
            select: ['util_country_id', 'util_country_code', 'util_country_name', 'util_country_desc'],
            order: 'asc=util_country_name',
            scope: 'prosperity_scope'
        }

        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.UTILS.COUNTRIES, query);
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

exports.getAllBusinessStructure = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let query = {
            page: '0',
            limit: '100',
            where: { or: [] },
            select: ['util_business_struct_id', 'util_business_struct_code', 'util_business_struct_name', 'util_business_struct_desc'],
            order: 'asc=util_business_struct_id',
            scope: 'prosperity_scope'
        }

        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.UTILS.BUSINESS_STRUCTURE, query);
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

exports.getTenatUsersByUserType = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let userType = request.query.userType;
        let companyCode = request.query.companyCode;
        let orQuery = userType.map(item => {
            return `tenant_user_type_code.eq=${item ? item : ''}%26tenant_user_company_code.eq=${companyCode ? companyCode : 'CMP-000001'}`
        });
        let query = {
            page: '0',
            limit: '500',
            where: { or: orQuery },
            select: [
                'tenant_user_id',
                'tenant_user_employee_code',
                'tenant_user_bucket_code',
                'tenant_user_type_code',
                'tenant_user_first_name',
                'tenant_user_last_name',
                'tenant_user_type_name',
                'tenant_user_email',
                'tenant_user_profile_pic_thumb',
                'tenant_user_profile_pic',
                'tenant_user_company_code'
            ],
            order: 'asc=tenant_user_first_name'
        }
        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.UTILS.TENANT_USERS, query);
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

exports.getSearchAffiliate = async (request, response) => {
    try {
        let headers = Helper.getRequestDefaultHeaders(request.headers);
        let query = {
            page: '0',
            limit: '10',
            where: { or: [`util_search_affiliate_group_code.eq=${request.query.code ? request.query.code : ''}`] },
            select: [
                'util_search_affiliate_id',
                'util_search_affiliate_field_type',
                'util_search_affiliate_code',
                'util_search_affiliate_name',
                'util_search_affiliate_desc',
                'util_search_affiliate_group_code',
                'util_search_affiliate_reference_code',
                'util_search_affiliate_meta'
            ],
            order: 'asc=util_search_affiliate_ordering',
            scope: 'prosperity_scope'
        }

        const apiUrl = Helper.generateWebAppURLv3(process.env.CLIENT_MGT_URL, Endpoints.UTILS.SEARCH_AFFILIATE, query);
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