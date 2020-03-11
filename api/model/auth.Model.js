const {
  User,
  UserProfile,
  UserToken
} = require("../controllers/db.Controller");

class authModel {
  addUserQuery = data => {
    return User.findOrCreate({
      where: {
        UserName: data.UserName,
        Email: data.Email
      },
      defaults: data
    });
  };

  addUserQueryWithProfile = data => {

    return UserProfile.findOrCreate({
      where: {
        userId: data,
        id: data
      }
    });
  };

  userLoggingIn = data => {
    return User.findOne({
      where: {
        UserName: data.UserName
      }
    });
  };

  storeUserToken = (data, token) => {

    let user_id = User.findOne({
      where: {
        UserName: data.UserName
      }
    });
    return UserToken.findOne({
      where: {
        UserName: data.UserName
      }

    }).then(result => {
      if (result) {
        return result.update({
          GeneratedUserToken: token
        });
      }
      user_id.then(result => {
        return UserToken.create({
          UserId: result.dataValues.id,
          UserName: data.UserName,
          GeneratedUserToken: token
        });
      });
    });
  };

  deleteStoredToken = data => {
    return UserToken.destroy({
      where: {
        GeneratedUserToken: data.token
      }
    });
  };
}

module.exports = new authModel();
