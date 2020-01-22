import {combineReducers} from "redux";
import userReducer from "./user.Reducer";
import authReducer from "./auth.Reducer";

export default combineReducers({
    user:userReducer,
    auth:authReducer()
});