const dotEnv = require('dotenv').config().parsed;

let databaseType;
const databaseConfig ={
    dev :{
        host: '172.17.0.1',
        admin: 'root',
        password: 'password',
        database: 'le_database',
        dialect: 'mysql'
    },
    vm :{
        host: 'mysql-db',
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

console.log('Running');
console.log(dotEnv.NODE_ENV_MODE);
console.log('Running end');

if ( dotEnv.NODE_ENV_MODE ===  'dev'){
    databaseType = databaseConfig.dev;
}
// else if (dotEnv.NODE_ENV_MODE ===  'vm'){
//     databaseType = databaseConfig.vm;
// }
else{
    databaseType = databaseConfig.vm;
}

module.exports = databaseType;