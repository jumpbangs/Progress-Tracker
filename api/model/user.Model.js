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
    console.log(data.usertoken);
    return UserToken.findOne({
      where: {
        GeneratedUserToken: data.usertoken
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
