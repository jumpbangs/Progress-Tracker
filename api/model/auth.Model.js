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
    return UserToken.findOne({
      where: {
        UserName: data.UserName
      }
    }).then(user => {
      if (user) {
        return user.update({
          GeneratedUserToken: token
        });
      }
      return UserToken.create({
        UserName: data.UserName,
        GeneratedUserToken: token
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
