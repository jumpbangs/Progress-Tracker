import {
    LOGIN_USER
} from "../actions/auth.Actions";

export default function authReducer(state=[], action) {
    switch (action.type) {
        case LOGIN_USER:
            return[...state, action.payload];
    
        default:
            return state;
    }

}