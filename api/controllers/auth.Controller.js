const AUTHMODEL = require('../model/auth.Model');
const bcryptUtils = require('../utils/bcrypt.Utils');
const jwtToken = require('../utils/jwt.Utils');
const joiValidator = require('../utils/joi.Validator');

class AuthController {

    authBase = (request, response, next) => {
        response.json({
            msg: 'form empty route'
        })
    };


    authLogin = (request, response, next) => {
        AUTHMODEL.userLoggingIn(request.body).then((result) => {
            if (!result) {
                return next({
                    status:401,
                    msg: 'Sorry, Invalid User'
                });
                // response.status(401).send({
                //     Error: 'Sorry, Invalid User'
                // });
            }

            let isPasswordValid = bcryptUtils.validatePassword(request.body.Password, result.dataValues.Password);
            if (!isPasswordValid) {
                return next({
                    status:401,
                    msg: 'Sorry, Invalid User'
                });
            } else {
                let token = jwtToken.generateToken(result.dataValues.ID, 'lol');
                response.status(200).send({
                    auth: true,
                    token: token
                })
            }
        }).catch((err) => {
            // if(err){
            //     return next({
            //         status: 400,
            //         msg: err
            //     });
            // }
            console.log(err);
        });
    };


    authRegister = (request, response, next) => {
        let {error, value} = joiValidator.userValidator(request.body);
        value.Password = bcryptUtils.encryptPass(value.Password);
        if (error) {
            return response.status(400).error.details[0].message.json;
        } else {
            AUTHMODEL.addUserQuery(value).then(value => {
                let userID = value[0].dataValues.ID;
                let userName = value[0].dataValues.UserName;
                AUTHMODEL.addUserQueryWithProfile(userID).then(result => {
                    response.json({
                        msg: userName + ' is ' + (
                            value.isNewRecord ? 'already' : '') + ' Registered'
                    });
                }).catch((err)=>{
                    if(err){
                       return next({
                            status: 400,
                            msg: err
                        });
                    }
                });
            }).catch((err) =>{
                if(err){
                    return next({
                        status: 400,
                        msg: 'User is already registered'
                    });
                }
            });
        }

    };

    resetPassword = (request, response, next) => {

    }

    
}


module.exports = new AuthController();