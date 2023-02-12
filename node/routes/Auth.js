// Imports
const express = require('express');
const router = express.Router(); 
const multer = require('multer');
const AuthModel = require('../model/Auth');

const path = require('path');


// Declaration
const form = multer();


router.get('/get-auth-data', form.any(), AuthModel.getAuthData);


// router.post('/verify-call-in', form.any(), AuthenticationModel.verifyCallIn);
// router.post('/verify-call-in-sso', form.any(), AuthenticationModel.verifyCallInSSO); 
// router.post('/encrypt-user-info', form.any(), AuthenticationModel.encryptUserInfo);
// router.get('/verify-login-sso', form.any(), AuthenticationModel.verifyLoginSSO);
// router.post('/regenerate-token', form.any(), AuthenticationModel.regenerateToken);
// router.post('/change-password', form.any(), AuthenticationModel.changePassword);
// router.post('/forgot-password', form.any(), AuthenticationModel.forgotPassword);
//router.post('/verify-password', form.any(), AuthenticationModel.verifyPassword);
module.exports = router;