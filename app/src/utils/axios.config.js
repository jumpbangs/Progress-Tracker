// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    //baseURL: 'http://localhost:8080/'
    // baseURL: 'http://10.10.3.137:8080/'
    baseURL: 'http://192.168.0.101:8080/'
});


export default instance;