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

  updateUserProfile = (userId, data) => {
    let userUpdate = User.update(
      {
        Name: data.Name,
        Email: data.Email
      },
      {
        where: {
          Id: userId
        }
      }
    );

    let profileUpdate = UserProfile.update(
      {
        Address: data.Address,
        LastName: data.LastName,
        Phone: data.Phone
      },
      {
        where: {
          userId: userId
        }
      }
    );

    return { userUpdate, profileUpdate };
  };
}

module.exports = new userModel();
