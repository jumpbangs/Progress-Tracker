import axios from 'axios';

export const TEST_URL = 'TEST_URL';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

const API_URL = 'http://localhost:8080';

export function testApi() {
    return axios.post(API_URL+'/test/')
        .then((response)=>{
            return response;
        }).catch((err)=>{
            return err;
        });
}

export function checkDB() {
    return (dispatch) =>{
        dispatch(attemptCheckDb());
        return testApi()
            .then((data)=>{
                return dispatch(testDbSuccess(data));
            })
            .catch((err)=>{
                return dispatch(testDbSuccess(err));
            })
    }

     function attemptCheckDb(){
        return {
            type: TEST_URL
        }
    }
}

export function testDbSuccess(payload) {
    return {
        payload : payload
    }

}