// Imports
const express = require('express');
const router = express.Router(); 
const multer = require('multer');
const RequestModel = require('../model/Request');

// Declaration
const form = multer();

router.get('/get-request-pillar', form.any(), RequestModel.getRequestPillars);
router.get('/', form.any(), () => {
    console.log("asdasdasd")
});
module.exports = router;