// Imports
const jwtDecode = require("jwt-decode");

/*
    Function: Decode the token to define if the user has a function
 */
const AccessValidation = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    let returnObj = {
        success: false,
        forbiddenAccess: true,
        content: "Invalid access token"
    }
    try {
        let accessToken = req.headers.authorization && req.headers.authorization.replace("Bearer: ", "") ? req.headers.authorization.replace("Bearer: ", "") : '';
        if (accessToken && jwtDecode(accessToken, process.env.APP_KEY)) {
            next();
        } else {
            res.json(returnObj);
        }
    } catch (error) {
        console.error("Node Middleware: ", JSON.stringify(error));
        res.json(returnObj);
    }
}

module.exports = AccessValidation;