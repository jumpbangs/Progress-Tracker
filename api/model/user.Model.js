const {
  User,
  UserProfile,
  UserToken
} = require("../controllers/db.Controller");

class userModel {
  findUser = data => {
    return User.findOne({
      where: {
        Email: data.Email
      }
    });
  };

  resetUserPassword = (data, newPass) => {
    return User.update(newPass, {
      where: {
        Name: data.Name,
        UserName: data.UserName
      }
    });
  };

  findUserByToken = data => {
    return UserToken.findOne({
      where: {
        GeneratedUserToken: data.token
      }
    });
  };

  getUserProfile = data => {
    return User.findOne({
      where: {
        Id: data
      },
      include: [UserProfile]
    });
  };
}

module.exports = new userModel();
