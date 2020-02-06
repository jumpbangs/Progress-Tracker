const JOI = require('@hapi/joi');

class joiValidator {

    userValidator = (fields) =>{
        let user = JOI.object({
            Name: JOI.string().required(),
            UserName: JOI.string().required(),
            Password: JOI.string().required(),
            Email: JOI.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
        });
        return user.validate(fields);
    }
}

module.exports = new joiValidator();