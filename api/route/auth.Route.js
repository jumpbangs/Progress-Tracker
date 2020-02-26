const ROUTER = require('express').Router();

let authControl = require('../controllers/auth.Controller');

ROUTER.route('/')
    .get(authControl.authBase);

ROUTER.route('/login')
    .post(authControl.authLogin);

ROUTER.route('/register')
    .post(authControl.authRegister);

ROUTER.route('/resetPass')
    .post(authControl.resetPassword);

module.exports = ROUTER;