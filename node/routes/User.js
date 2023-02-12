// Imports
const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserModel = require('../model/User');

// Declaration
const form = multer();

router.get('/get-employee-acl', form.any(), UserModel.getEmployeeAcl);

module.exports = router;