const Endpoints = require('../helper/Endpoints');
const Helper = require('../helper/Helper');
const Http = require('../helper/Http');

exports.getRequestPillars = async (request, response) => {
    let headers = {
      "Client-Secret": "8_3TpNomoNU9X4s72BZxfWZ7t6VF0bLZ_AlbrCKTXdb9Fht82yS-Yf9FInKjgT3xok9QPWX7ManzMgV97_agdtNQQfa81mxIsmnGxOTgnrMHyK1LPk2YPkOf6Mr8XdoG3-ILYPuJa8B-O8Aszvz4VjRCa_dVDusRZGp2tJNvBrDgmb_Q4-1TQEFa8kgZuGP4wcso_Z1d9yTBWJvZ5Moq0lRY_jKysc6VvvQtzytcNcWOoOBko-3fK9nq2xrIJbu",
      "Client-Code": "19-0562",
      "Access-Token": "jKKEt19OD1Xw9L22_w7SkjBPzbCfI99LEaXn6k26w_y4h-NIm84ZUIVNUEdvY8Oj",
      "Client-Company-Code": "CMP-000001"
    }

    // let headers = Helper.getRequestDefaultHeaders(request.headers);
    let query = {
      resources: ["employeeRequestPillar"]
    }
  
    const searchParams = `searchParams=${JSON.stringify(query)}`;
    const apiUrl = Helper.generateWebAppURL(process.env.HRIS_API_URL, Endpoints.UTILS.UTILS_RESOURCE, searchParams);
    Http.genarateSimpleGetRequest(apiUrl, headers)
      .then(data => {
        response.json(data);
      }).catch(error => {
        console.error("error", error)
        let returnObj = {}
        returnObj.success = false;
        returnObj.content = JSON.stringify(error);
        response.json(returnObj);
      });
  }