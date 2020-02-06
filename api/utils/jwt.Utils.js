const JWT = require('jsonwebtoken');

class jwtUtils {

    generateToken = (id, key) =>{
        return JWT.sign(id, key);
    }
}


module.exports = new jwtUtils();