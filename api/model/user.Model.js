const { User, UserProfile } = require("../controllers/db.Controller");

class userModel {

  findUser = (data) => {
    return User.findOne({
      where: {
        Email: data.Email
      }
    })
  };


  resetUserPassword = (data, newPass) => {
      return User.update( newPass, {
          where:{
              Name: data.Name,
              UserName: data.UserName
          }
      });
  }


}

module.exports = new userModel();
