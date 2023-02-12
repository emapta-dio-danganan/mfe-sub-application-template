// Imports
const express = require('express');
const router = express.Router();
const multer = require('multer');
const UtilsModel = require('../model/Utils');

// Declaration
const form = multer();

const storage = multer.diskStorage({
    destination: 'public/node-uploads/uploads',
    limits: { fileSize: 50000000 },
    filename: function (req, file, cb) {
        let employeeCode = '';
        if (req.body && req.body.submitValues) {
            const submitValues = JSON.parse(req.body.submitValues);
            employeeCode = submitValues.employeeCode ? `${submitValues.employeeCode}_` : '';
        }
        cb(null, `${Date.now()}__${employeeCode}${file.originalname.replace(' ', '')}`);
    }

});
const upload = multer({ storage });

router.post('/upload-file', upload.array('files', 5), UtilsModel.fileUpload);
router.get('/get-all-industries', form.any(), UtilsModel.getAllIndustries);
router.get('/get-all-timezones', form.any(), UtilsModel.getAllTimezones);
router.get('/get-all-countries', form.any(), UtilsModel.getAllCountries);
router.get('/get-all-business-structure', form.any(), UtilsModel.getAllBusinessStructure);
router.get('/get-tenant-users-by-user-type', form.any(), UtilsModel.getTenatUsersByUserType);
router.get('/get-search-affiliate', form.any(), UtilsModel.getSearchAffiliate);

module.exports = router;