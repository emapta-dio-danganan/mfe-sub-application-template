module.exports = {
    AUTH: {
        LOGIN: 'api/v2/auth/attempt',
        CALLIN: 'api/v2/call-in/verify',
        FORGOT_PASSWORD: 'api/v2/auth/forgot-password',
        VERIFY_PASSWORD: 'api/v2/auth/unlock-file',
        GET_AUTH_DATA: 'auth/get-auth-data'

    },
    UTILS: {
        UTILS_RESOURCE: 'api/v2/utils/resource',
        INDUSTRIES: 'api/v1/utils/industry',
        TIMEZONE: 'api/v1/utils/timezone',
        COUNTRIES: 'api/v1/utils/country',
        BUSINESS_STRUCTURE: 'api/v1/utils/business-structure',
        TENANT_USERS: 'api/v1/utils/tenant-users',
        SEARCH_AFFILIATE: 'api/v1/utils/search-aff',
    },
    CUSTOMIZATION: {
        ACL: 'api/v2/acl/request',
    },
    CLIENT_MANAGEMENT: {
        SAVE_COMPANY_INFO: 'api/v1/company/detail',
        GET_COMPANY_BASIC_INFO: 'api/v1/company/tenant-basic-info',
    }
}