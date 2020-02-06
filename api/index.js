// Port Settings
const PORT = 5000;
const HOST = '0.0.0.0';

// Import/Required
const EXPRESS = require('express');
const MORGAN = require('morgan');
const PATH = require('path');
const CORS = require('cors');

const APP = EXPRESS();


//Enable Cors
APP.use(CORS());

// String filtering
APP.use(EXPRESS.urlencoded({
    extended: true,
}));

APP.use(EXPRESS.json());

const AUTHROUTE = require('./route/auth.Route');

APP.use('/auth', AUTHROUTE);


//Application Level
APP.use(function (req, res, next) {
    // res.end('you are blocked at middleware');
    next({
        status: 404,
        msg: 'Application Level Error'
    });
});


//Error Handling
APP.use((err, req, res, next) => {
    console.log('i am error handling middleware');
    console.log(err );
    res.status(err.status || 404).json({
        msg: 'from error handling middleware',
        err: err
    })
});

// Server
// APP.listen(PORT,() => {
//     console.log('server listening at port ' + PORT);
// });

APP.listen(PORT, HOST);


