const Endpoints = require('../helper/Endpoints');
const Http = require('../helper/Http');
const Helper = require('../helper/Helper');
const jwtDecode = require('jwt-decode');

exports.getAuthData = (request, response) => {
    try {
        let { authID } = request.query;
        // let headers = Helper.getRequestDefaultHeaders(request.headers);
        const queryParams = `authID=${authID}`;
        const apiUrl = Helper.generateLocalWebAppURL('9087', Endpoints.AUTH.GET_AUTH_DATA, queryParams);
        Http.genarateSimpleGetRequest(apiUrl, {})
            .then(data => {
                let returnObj = {}
                returnObj.success = data.success;
                returnObj.content = data.success ? JSON.parse(jwtDecode(data.content.auth_data)) : data.content;
                returnObj.message = data.message
                return response.json(returnObj);
                
            }).catch(err => {
                let returnObj = {}
                returnObj.success = false;
                returnObj.content = JSON.stringify(error);
                return response.json(returnObj);
            });
    } catch (error) {
        let returnObj = {}
        returnObj.success = false;
        returnObj.content = JSON.stringify(error);
        return response.json(returnObj);

    }

}



