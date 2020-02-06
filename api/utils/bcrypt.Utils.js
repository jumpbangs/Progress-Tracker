const CRYPT  = require('bcryptjs');


class bcryptUtils {

    encryptPass = (password) =>{
        return CRYPT.hashSync(password, 10);
    }

    validatePassword = (userPass, inputPass) => {
        return CRYPT.compareSync(userPass, inputPass);
    }

}


module.exports = new bcryptUtils();