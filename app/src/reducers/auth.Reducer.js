import {
    AUTH_ERR_LOGIN,
} from "../actions/auth.Actions";

export default function authReducer(state=[], action) {
    switch (action.type) {
        case AUTH_ERR_LOGIN:
            return [...state, action.payload];        

        default:
            return state;
    }

}