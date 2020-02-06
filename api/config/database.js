const dotEnv = require('dotenv').config().parsed;

let databaseType;
const databaseConfig ={
    dev :{
        host: 'localhost',
        admin: 'chong',
        password: 'password',
        database: 'le_database',
        dialect: 'mysql'
    },
    vm :{
        host: '172.17.0.1',
        admin: 'chong',
        password: 'password',
        database: 'le_database',
        dialect: 'mysql'
    },
    prod :{
        host: '192.1.1.1',
        admin: 'chong',
        password: 'lol',
        database: 'le_database',
        dialect: 'mysql'
    },


};

if ( dotEnv.NODE_ENV_MODE ===  'dev'){
    databaseType = databaseConfig.dev;
}
else if (dotEnv.NODE_ENV_MODE ===  'vm'){
    databaseType = databaseConfig.vm;
}
else{
    databaseType = databaseConfig.prod;
}

module.exports = databaseType;