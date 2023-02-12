// Imports
const url = require('url');
const crypto = require('crypto');
const jwtEncode = require("jwt-encode");
const jwtDecode = require("jwt-decode");
const { networkInterfaces } = require('os');

/*
    Function: Generate web app url
    return: string
*/
exports.generateWebAppURL = (apiUrl, endpoint, queryData = '') => {
    return url.format({
        protocol: process.env.PROTOCOL,
        hostname: apiUrl,
        pathname: endpoint,
        search: queryData, 
    });
}

exports.generateWebAppURLv3 = (apiUrl, endpoint, queryData = '') => {

    // console.log(process.env.PROTOCOL);
    // console.log(apiUrl);
    // console.log(endpoint);

    let searchParam = '';
    let searchParamArr = [];

    if(queryData && queryData.constructor == Object){
        let queryArr = Object.keys(queryData);

        queryArr.map((key)=>{
            // console.log(key);
            // console.log(queryData[key]);
            if(key && queryData[key]){ //check if it has a key and a value
                if(key == "where"){
                    if(queryData[key].constructor == Object){
                        queryData[key] = JSON.stringify(queryData[key]);
                        searchParamArr.push(key+'='+queryData[key]);
                    }
                }else if(key == "select"){
                    if(queryData[key].constructor == Array){
                        queryData[key] = queryData[key].join();
                        searchParamArr.push(key+'='+queryData[key]);
                    }
                }else{
                    searchParamArr.push(key+'='+queryData[key]);
                }
            }
        });

        searchParam = searchParamArr.join('&');
    }

    return url.format({
        protocol: process.env.PROTOCOL,
        hostname: apiUrl,
        pathname: endpoint,
        search: searchParam ? searchParam : queryData, 
    });
}


exports.generateWebAppURLv3 = (apiUrl, endpoint, queryData = '') => {

    // console.log(process.env.PROTOCOL);
    // console.log(apiUrl);
    // console.log(endpoint);

    let searchParam = '';
    let searchParamArr = [];

    if(queryData && queryData.constructor == Object){
        let queryArr = Object.keys(queryData);

        queryArr.map((key)=>{
            // console.log(key);
            // console.log(queryData[key]);
            if(key && queryData[key] !=null){ //check if it has a key and a value
                if(key == "where"){
                    if(queryData[key].constructor == Object){
                        queryData[key] = JSON.stringify(queryData[key]);
                        searchParamArr.push(key+'='+queryData[key]);
                    }
                }else if(key == "select"){
                    if(queryData[key].constructor == Array){
                        queryData[key] = queryData[key].join();
                        searchParamArr.push(key+'='+queryData[key]);
                    }
                }else{
                    searchParamArr.push(key+'='+queryData[key]);
                }
            }
        });

        searchParam = searchParamArr.join('&');
    }

    return url.format({
        protocol: process.env.PROTOCOL,
        hostname: apiUrl,
        pathname: endpoint,
        search: searchParam ? searchParam : queryData, 
    });
}

/*

/*
    Function: Format dates
    return: string
*/
exports.dateFormatter = (date, format) => {
    try {
        if(date){
            var parseDate = new Date(date);
    
            let dayDate = ("0" + parseDate.getDate()).slice(-2);
            let year = parseDate.getFullYear();
            let MonthNumeric = ("0" + (parseDate.getMonth() + 1)).slice(-2);
    
            switch (format){
                case 'date-standard':
                    return `${year}-${MonthNumeric}-${dayDate}`;
                break;
                case 'datetime-standard':
                    return `${year}-${MonthNumeric}-${dayDate}`+ ' ' + `${date.getHours()}` + ':' + `${date.getMinutes()}`;
                    break;
                default:
                    console.error("Invalid format")
                    return "";
                break;
            }
        } else {
            console.error("Invalid date")
            return "";
        }
    } catch (error) {
        console.error(error);
        return "";
    }
}

/*
    Function: Encrypt string
    return: string
*/
exports.encryptItem = data => {
    try {
        if(data){
            data = data.toString();
            var encrypt = function (plain_text, encryptionMethod, secret, iv) {
                var encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
                return encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
            };
            var encryptionMethod = 'AES-256-CBC';
            var secret = "imvnvU3pVp19xuCp32MAItKaHMGDOle5";
            var iv = secret.substr(0,16);
            var encryptedMessage = encrypt(data, encryptionMethod, secret, iv);
    
            var regExprPlus = /[\+]/g;
            var regExprSlash = /[\/]/g;
            encryptedMessage = encryptedMessage.replace(regExprPlus, '-');
            encryptedMessage = encryptedMessage.replace(regExprSlash, '_');

            return encryptedMessage;
        } else {
            console.error("encryptItem: Invalid data")
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}

/*
    Function: Decrypt string
    return: string
*/
exports.decryptItem = (data) => {
    try {
        if(data){
            var decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
                var decryptor = crypto.createDecipheriv(encryptionMethod, secret, iv);
                return decryptor.update(encryptedMessage, 'base64', 'utf8') + decryptor.final('utf8');
            };
            var encryptionMethod = 'AES-256-CBC';
            var secret = "imvnvU3pVp19xuCp32MAItKaHMGDOle5";
            var iv = secret.substr(0,16);
            
            var regExprMinus = /[\-]/g;
            var regExprUnderscore = /[\_]/g;
            var decodedData = data.replace(regExprMinus, '+');
            decodedData = decodedData.replace(regExprUnderscore, '/');

            var decryptedMessage = decrypt(decodedData, encryptionMethod, secret, iv);
            
            return decryptedMessage;
        } else {
            console.error("decryptItem: Invalid data")
            return data;
        }
    } catch (error) {
        return data;
    }
}

/*
    Function: Encrypt Data (Object)
    return: object
*/
exports.encryptData = (data, fields) => {
    try {
        if(data && data.constructor === Object && fields && fields.constructor === Array) {
            Object.keys(data).map(item => {
                if(fields.includes(item)){
                    data[item] = this.encryptItem(data[item]);
                }
            })
            return data;
        } else if(data && data.constructor === Array && fields && fields.constructor === Array) {
            data.map(obj => {
                Object.keys(obj).map(item => {
                    if(fields.includes(item)){
                        obj[item] = obj[item] ? this.encryptItem(obj[item]) : obj[item];
                    }
                })
            })
            return data;
        } else {
            console.error("encryptData: Invalid data")
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}

/*
    Function: Decrypt Data (Object)
    return: object
*/
exports.decryptData = (data, fields) => {
    try {
        if(data && data.constructor === Object && fields && fields.constructor === Array) {
            Object.keys(data).map(item => {
                if(fields.includes(item)){
                    data[item] = this.decryptItem(data[item]);
                }
            })
            return data;
        } else {
            console.error("decryptData: Invalid data");
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}

/*
    Function: Get and Encrypt Authorization Data (Object)
    return: object
*/
exports.getEncryptedAuthorizationData = data => {
    try {
        if(data && data.constructor === Object) {
            let returnObj = {
                accessToken: jwtEncode(JSON.stringify(data.access_token), process.env.APP_KEY),
                clientSecret: jwtEncode(JSON.stringify(data.client_secret), process.env.APP_KEY),
                refreshToken: jwtEncode(JSON.stringify(data.refresh_token), process.env.APP_KEY),
            };
            let encryptedReturnObj = jwtEncode(JSON.stringify(returnObj), process.env.APP_KEY);
        
            return encryptedReturnObj;
        } else {
            console.error("getEncryptedAuthorizationData: Invalid data");
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}

/*
    Function: Get and Encrypt User Information (Object)
    return: object
*/
exports.getEncryptedUserInformation = data => {
    // console.log(JSON.stringify(data))
    try {
        if(data && data.constructor === Object) {
            let returnObj = {
                profile: jwtEncode({
                        firstName: data.employee_first_name,
                        middleName: data.employee_middle_name,
                        lastName: data.employee_last_name,
                        extension: data.employee_extension_name,
                        nickName: data.employee_nick_name,
                        email: data.employee_email,
                        username: data.username,
                        picture: data.profile_pic,
                        pictureThumbnail: data.profile_pic_thumb,
                        picturePublicUrl: data.profile_public_url,
                        bucketCode: data.bucket_code,
                        employeeCode: data.employee_code,
                        employeeNumber:data.employee_number,
                        accountType: data.employee_account_type,
                        position: data.position,
                        employeeAccountEmploymentStatusCode: data.employee_account_employment_status_code,
                        employeeAccountEmploymentOffboardDate: data.employee_account_employment_offboard_date,
                        decryptedEmployeeCode: this.decryptItem(data.employee_code),
                        decryptedBucketCode: this.decryptItem(data.bucket_code),
                        userCode:data.user_code
                        
                }, process.env.APP_KEY),
                company: jwtEncode({
                        siteCode: data.site_code,
                        siteAddress: data.site_address,
                        divisionCode: data.division_code,
                        departmentCode: data.department_code,
                        companyCode: data.company_code,
                        decryptedCompanyCode: this.decryptItem(data.company_code),
                        teams: data.teams,
                        departments: data.departments,
                        departmentName: data.department_name,
                        companies: data.companies && data.companies.constructor === Array && data.companies.length > 0 ? data.companies : [this.decryptItem(data.company_code)],
                        companyName: data.company_name,
                        companyLogo: data.company_logo,
                        companyThumbnail: data.company_thumbnail,
                        companyHeader: data.company_header,
                        teamName: data.team_name,
                        teamCode: data.team_code,
                        companyConfigAllowBypass: data.company_config_allow_bypass || null,
                        companyConfigBypassPillars: data.company_config_bypass_pillar || null,
                        compiledCompanyCode: data.compiled_company_code,
                        compiledDivisionCode: data.compiled_division_code,
                        compiledDepartmentCode: data.compiled_department_code,
                        compiledTeamCode: data.compiled_team_code
                }, process.env.APP_KEY),
                config: jwtEncode({
                        isAllowRemoteAccess: data.is_allow_remote_access,
                        companyOtToilFillingPeriod: data.company_ot_toil_filling_period,
                        companyOtToilFillingPeriodDays: data.company_ot_toil_filling_period_days,
                        companyOtToilStart: data.company_ot_toil_start,
                        companyOtToilEnd: data.company_ot_toil_end,
                        companyConfigSupportedPillar: data.company_config_supported_pillar,
                        employeeConfigHolidayToFollow: data.employee_config_holiday_to_follow,
                        employeeConfigHolidayAdditional: data.employee_config_holiday_additional,
                        submitCountdown: data.company_config_preview_countdown ? parseInt(data.company_config_preview_countdown) > 0 ? parseInt(data.company_config_preview_countdown) / 1000
                                         : 2 : 2,
                        themeCode:data.theme_code,
                        themeValue:data.theme_value,
                        timezone:data.default_timezone || 'Asia/Manila',
                        localizationCountryCode : data.localizationCountryCode || 'PH',

                }, process.env.APP_KEY),
                view: jwtEncode(data.user_type, process.env.APP_KEY)
            };
            let encryptedReturnObj = jwtEncode(JSON.stringify(returnObj), process.env.APP_KEY);
        
            return encryptedReturnObj;
        } else {
            console.error("getEncryptedUserInformation: Invalid data");
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}

/*
    Function: Get version 1 user info (object)
    return: object
*/
exports.getVersion1UserInfo = data => {
    try {
        if(data && data.constructor === Object) {
            let returnObj = {
                username: data.username,
                first_name: data.employee_first_name,
                last_name: data.employee_last_name,
                middle_name: data.employee_middle_name,
                email: data.employee_email,
                account_type: data.employee_account_type,
                user_type: data.user_type,
                employee_code: this.decryptItem(data.employee_code),
                company_code: this.decryptItem(data.company_code),
                companies: data.companies,
                bucket_code: this.decryptItem(data.bucket_code),
                encrypted_employee_code: data.employee_code,
                profile_pic: data.profile_pic,
                profile_pic_thumb: data.profile_pic_thumb,
                is_allow_remote_access: data.is_allow_remote_access,
                department: data.department_code,
                employee_teams: data.teams,
                department_name: data.department_name,
                employee_nick_name:  data.employee_nick_name,
                encrypted_bucket_code: data.bucket_code,
                team_code: data.team_code,
                team_name: data.team_name,
                departments: data.departments,
                site_code: data.site_code,
                division:  data.division_code,
                position: data.position,
                ip_address: this.getUserIP(),
                company_name: data.company_name ? data.company_name : null,
                company_logo: data.company_logo ? data.company_logo : null,
                company_thumbnail: data.company_thumbnail ? data.company_thumbnail : null,
                company_ot_toil_filling_period: data.company_ot_toil_filling_period,
                company_ot_toil_filling_period_days: data.company_ot_toil_filling_period_days,
                company_ot_toil_start: data.company_ot_toil_start,
                company_ot_toil_end: data.company_ot_toil_end,
                company_config_supported_pillar: data.company_config_supported_pillar,
                company_header: data.company_header ? data.company_header : null,
                employee_config_holiday_to_follow: data.employee_config_holiday_to_follow ? data.employee_config_holiday_to_follow : null,
                employee_config_holiday_additional: data.employee_config_holiday_additional ? data.employee_config_holiday_additional : null,
                theme_code: data.theme_code ? data.theme_code : null,
                theme_value: data.theme_value ? data.theme_value : null,
            }
            return returnObj;
        } else {
            console.error("getVersion1UserInfo: Invalid data");
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}

/*
    Function: Get request ip address
    return: string
*/
exports.getUserIP = () => {

    const nets = networkInterfaces();
    const results = Object.create(null);

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = '';
                }
                results[name] = net.address;
            }
        }
    }

    return results[Object.keys(results)[0]];
}

/*
    Function: Get headers from the request
    return: object
*/
exports.getRequestDefaultHeaders = data => {
    try {
        if(data && data.constructor === Object) {
            let returnObj = {
                'Client-Secret': JSON.parse(jwtDecode(data.clientsecret)),
                'Client-Code': this.decryptItem(data.clientcode),
                'Access-Token': JSON.parse(jwtDecode(data.accesstoken)),
                'Client-Company-Code': this.decryptItem(data.clientcompanycode),
                'Client-Role': data.clientrole,
            }
            return returnObj;
        } else {
            console.error("getRequestDefaultHeaders: Invalid data");
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}


/*
    Function: Get headers from the request
    return: object
*/
exports.getPillarsRequestDefaultHeaders = data => {
    try {
        if(data && data.constructor === Object) {
            let returnObj = {
                'Client-Secret': JSON.parse(jwtDecode(data.clientsecret)),
                'Client-Code': this.decryptItem(data.clientcode),
                'Access-Token': JSON.parse(jwtDecode(data.accesstoken)),
                'Client-Company-Code': this.decryptItem(data.clientcompanycode),
            }
            if(data.clientrequestedemployeecode){
                returnObj['Client-Requested-Employee-Code'] = data.clientrequestedemployeecode;
            }
            if(data.clientrole){
                returnObj['Client-Role'] = data.clientrole;
            }
            if(data.pillartype){
                returnObj['Pillar-Type'] = data.pillartype;
            }
            return returnObj;
        } else {
            console.error("getRequestDefaultHeaders: Invalid data");
            return data;
        }
    } catch (error) {
        console.error(error);
        return data;
    }
}
