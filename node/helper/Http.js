// Imports
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

/*
    Function: Http get data to api
    return: object
*/
exports.genarateSimpleGetRequest = async function (endpointUrl, headerOptions = {}, requestData) {
    // Checks if payload is a form-data 
    if (requestData !== null) {
        return await fetch(endpointUrl, {
            method: 'GET',
            headers: headerOptions
        })
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => error);
    } else {
        var formData = new FormData();
        Object.keys(requestData).map(item => {
            if (typeof payloadData[item] === 'string') {
                formData.append(item, requestData[item]);
            } else {
                formData.append(item, JSON.stringify(requestData[item]));
            }
        });
        return await fetch(endpointUrl, {
            method: 'GET',
            headers: headerOptions,
            body: formData
        })
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => error);
    }

}

/*
    Function: Http post data to api (Multiform)
    return: object
*/
exports.generateMultipartFormPostRequest = async function (endpointUrl, payloadData, headerOptions, isFile = false) {
    var formData = new FormData();
    Object.keys(payloadData).map(item => {
        if (item === 'file[]') {
            payloadData[item].map(file => {
                formData.append(item, fs.createReadStream(file.path), file.originalname);
            });
            
        } else if (item === 'file') {
                payloadData[item].map(file => {
                    formData.append(item, fs.createReadStream(file.path), file.originalname);
                });
            
        } else if (item === 'attachments') {
            payloadData[item].map(file => {
                formData.append(item, fs.createReadStream(file.path), file.originalname);
            });
        
        } else if (item === 'image[]') {
            payloadData[item].map(file => {
                formData.append(item, fs.createReadStream(file.path), file.originalname);
            });
        } else if (item === 'thumbnail[]') {
            payloadData[item].map(file => {
                formData.append(item, fs.createReadStream(file.path), file.originalname);
            });
        } else if (item === 'request_attachment') {
            payloadData[item].map(file => {
                formData.append(item, fs.createReadStream(file.path), file.originalname);
            });
        } else {
            if (typeof payloadData[item] === 'string') {
                formData.append(item, payloadData[item]);
            } else {
                formData.append(item, JSON.stringify(payloadData[item]));
            }
        }
    });
    var requestOptions = {
        method: 'POST',
        headers: headerOptions,
        body: formData
    };
    return await fetch(endpointUrl, requestOptions)
        .then(response => response.text())
        .then(result => isFile ? result : JSON.parse(result.replace(/.*\w: /, '')))
        .catch(error => error);
}