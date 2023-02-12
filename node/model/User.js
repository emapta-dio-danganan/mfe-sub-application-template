const Endpoints = require('../helper/Endpoints');
const Http = require('../helper/Http');
const Helper = require('../helper/Helper');
const jwtDecode = require('jwt-decode');
const jwtEncode = require('jwt-encode');



exports.getEmployeeAcl = async (request, response)  => {
    let headers = Helper.getRequestDefaultHeaders(request.headers);
    let query = JSON.stringify({
        employee_code: Helper.decryptItem(request.query.employeeCode),
        bucket_code: Helper.decryptItem(request.query.bucketCode)
    });


    const searchParams = `searchParams=${query}`;
    const apiUrl = Helper.generateWebAppURL(process.env.HRIS_API_URL, Endpoints.CUSTOMIZATION.ACL, searchParams); 
    Http.genarateSimpleGetRequest(apiUrl, headers)
    .then(data => {
        let returnObj = {};
        if(data.success && data.content){
            // let decryptedUserToken = JSON.parse(jwtDecode(request.headers.usertoken, process.env.APP_KEY));
            let userRoles = Object.keys(data.content).map(item => (
                {
                    label: item,
                    value: item
                }
            ));
            returnObj.success = true;
            returnObj.content =  {
                systems: data.content,
                roles: userRoles,
                // user: Helper.getVersion1UserInfo(decryptedUserToken)
            }
            if(userRoles.length > 0 && !Object.keys(data.content).includes(request.query.view)){
                // decryptedUserToken.user_type = Object.keys(data.content)[0];
                // returnObj.content.updatedUserToken = jwtEncode(JSON.stringify(decryptedUserToken), process.env.APP_KEY);
                // returnObj.content.user.user_type = Object.keys(data.content)[0];
                returnObj.content.updatedView = Object.keys(data.content)[0];
            }
        } else {
            returnObj = data;
        }
        response.json(returnObj);
    }).catch(  error => {
            console.error("error", error)
            let returnObj = {}
            returnObj.success = false;
            returnObj.content = JSON.stringify(error);
            response.json(returnObj);
    });
}


 