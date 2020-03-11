const USERMODEL = require("../model/user.Model");
const bcryptUtils = require("../utils/bcrypt.Utils");
const mailer = require("../utils/mail.Utils");

class UserContoller {
  userBase = (request, response, next) => {
    response.json({
      msg: "From user route"
    });
  };

  resetPassword = (request, response, next) => {
    let newPass = bcryptUtils.generatePassword();
    let encryptPass = { Password: bcryptUtils.encryptPass(newPass) };

    USERMODEL.findUser(request.body)
      .then(result => {
        if (result == null) {
          return next({
            status: 400,
            msg: "Sorry the following email is not registered"
          });
        }

        USERMODEL.resetUserPassword(result.dataValues, encryptPass).then(
          updateValue => {
            if (updateValue) {
              response.status(200).send({
                msg: "Your new password has changed and emailed to you"
              });

              mailer
                .resetUserPassEmail("rivobah158@edusamail.net", newPass)
                .catch(val => {
                  console.log(val.error);
                });
            }
          }
        );
      })
      .catch(err => {
        if (err) {
          return next({
            status: 400,
            msg: err
          });
        }
      });
  };

  fetchUser = (request, response, next) => {
    USERMODEL.findUserByToken(request.body)
      .then(result => {
        let userId = result.dataValues.userIdToken
        USERMODEL.getUserProfile(userId)
        .then(result => {
          response.json(result);
        })
        .catch(err =>{
          if(err) {
            return next({
              status: 400,
              msg: err
            })
          }
        })
      })
      .catch(err => {
        if (err) {
          return next({
            status: 400,
            msg: 'User is not logged in'
          });
        }
      });
  };
}

module.exports = new UserContoller();
