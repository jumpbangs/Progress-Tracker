const AUTHMODEL = require("../model/auth.Model");
const bcryptUtils = require("../utils/bcrypt.Utils");
const jwtToken = require("../utils/jwt.Utils");
const joiValidator = require("../utils/joi.Validator");

class AuthController {
  authBase = (request, response, next) => {
    response.json({
      msg: "form auth route"
    });
  };

  authLogin = (request, response, next) => {
    AUTHMODEL.userLoggingIn(request.body)
      .then(result => {
        if (!result) {
          return next({
            status: 401,
            msg: "Sorry, Invalid User"
          });
        }

        let isPasswordValid = bcryptUtils.validatePassword(
          request.body.Password,
          result.dataValues.Password
        );
        if (!isPasswordValid) {
          return next({
            status: 401,
            msg: "Sorry, Username or Password is Invalid"
          });
        } else {
          let token = jwtToken.generateToken(result.dataValues.ID, "lol");
          console.log(request.body, token);
          AUTHMODEL.storeUserToken(request.body, token).then(result => {
            response.status(200).send({
              auth: true,
              token: token
            });
          });
        }
      })
      .catch(err => {
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
    let { error, value } = joiValidator.userValidator(request.body);
    value.Password = bcryptUtils.encryptPass(value.Password);
    if (error) {
      return response.status(400).error.details[0].message.json;
    } else {
      AUTHMODEL.addUserQuery(value)
        .then(value => {
          let userName = value[0].dataValues.UserName;
          let userID = value[0].dataValues.Id;
          if (!value.isNewRecord) {
            AUTHMODEL.addUserQueryWithProfile(userID)
              .then(result => {
                response.json({
                  msg: userName + ' registered'
                })

              })
              .catch(err => {
                if (err) {
                  return next({
                    status: 400,
                    msg: err
                  });
                }
              });
          } else {
            response.json({
              msg: userName + " is already registered"
            })
          }
        })
        .catch(err => {
          console.log(err);
          if (err) {
            return next({
              status: 400,
              msg: "User is already registered"
            });
          }
        });
    }
  };

  authLogout = (request, response, next) => {
    AUTHMODEL.deleteStoredToken(request.body)
      .then(result => {
        if (result) {
          response.status(200).send({
            msg: "Logout Successfully"
          });
        } else {
          response.status(200).send({
            msg: "User already logged out"
          });
        }
      })
      .catch(err => {
        return next({
          status: 400,
          msg: err
        });
      });
  };
}

module.exports = new AuthController();
