const ROUTER = require('express').Router();

let userControl = require('../controllers/user.Controller');

ROUTER.route('/')
    .get(userControl.userBase);

ROUTER.route('/resetpass')
    .post(userControl.resetPassword)



module.exports = ROUTER;