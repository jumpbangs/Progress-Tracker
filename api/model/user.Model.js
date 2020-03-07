const { User, UserProfile, UserToken } = require("../controllers/db.Controller");

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
  };

  findUserByToken = (data) => {
    return UserToken.findOne({
      where:{
        GeneratedUserToken: data.token
      }
    }).then(user =>{
      User.find({
        where:{
          ID: user.dataValues.UserId
        },
        include:[{
          model:UserProfile,
          as:'Profile'
        }]
      }).then(foundUser => {return foundUser});
    })
  };


}

module.exports = new userModel();
