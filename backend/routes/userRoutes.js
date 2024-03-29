const express = require('express');
const userController = require(`./../controllers/userController`);
const authenticationController = require(`./../controllers/authenticationController`);

const router = express.Router();

router.route('/signup').post(userController.uploadUserPhoto, authenticationController.signup);
router.route('/login').post(userController.uploadUserPhoto,  authenticationController.login);
router.route('/verifyOTP').post(authenticationController.verifyOTP)
router.route('/logout').get(authenticationController.logout);

router.route('/forgotPassword').post(authenticationController.forgotPassword);
router.route('/resetPassword/:token').patch(authenticationController.resetPassword);
router.route('/updatePassword').patch(authenticationController.protect ,authenticationController.updatePassword);

router.route('/me').get(authenticationController.protect, userController.getMe, userController.getUser);
router.route('/updateMe').patch(authenticationController.protect, userController.updateMe);
router.route('/deleteMe').delete(authenticationController.protect, userController.deleteMe);

module.exports = router
