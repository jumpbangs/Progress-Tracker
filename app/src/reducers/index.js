import {combineReducers} from "redux";
import userReducer from "./user.Reducer";
import authReducer from "./auth.Reducer";

const appReducer = combineReducers({
    user:userReducer,
    auth:authReducer
});

const rootReducer = (state, action) => {
    return appReducer(state,action);
}

export default rootReducer;