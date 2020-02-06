const {User, UserProfile }= require('../controllers/db.Controller');

class authModel {

    addUserQuery = (data) => {
        // return  User.create(data);
        return User.findOrCreate({
            where: {
                UserName: data.UserName,
                Email: data.Email
            },
            defaults: data
        });
    };

    addUserQueryWithProfile = (data) => {
        return UserProfile.create({
            ID : data
        })
    };

    userLoggingIn = (data) => {
        return User.findOne({
            where: {
                UserName : data.UserName
            }
        });
    }

}

module.exports = new authModel();
