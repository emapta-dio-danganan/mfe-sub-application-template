// Imports
const express = require('express');
const router = express.Router();
const multer = require('multer');
const ClientManagement = require('../model/ClientManagement');

// Declaration
const form = multer();
const storage = multer.diskStorage({
    destination: 'public/node-uploads/client-management',
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

router.post('/post-save-company-basic-info', upload.array('files', 5), ClientManagement.postSaveCompanyBasicInfo); 
router.get('/get-company-conso', form.any(), ClientManagement.getCompanyConso); 


module.exports = router;
