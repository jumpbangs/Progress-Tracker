const CRYPT = require("bcryptjs");

class bcryptUtils {
  encryptPass = (password) => {
    return CRYPT.hashSync(password, 10);
  };

  validatePassword = (userPass, inputPass) => {
    return CRYPT.compareSync(userPass, inputPass);
  };

  generatePassword = () => {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };
}

module.exports = new bcryptUtils();
