import AxiosApi from "../utils/axios.config";

export const AUTH_LOGIN_ERR = "AUTH_LOGIN_ERR";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";

export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
export const AUTH_REGISTER_FAIL = "AUTH_REGISTER_FAIL";



export const loginUser = (data) => {
  return async dispatch => {
    try {
      let  response = await AxiosApi.post("/auth/login", data);
      dispatch(userLoginSuccess(response.data));
    } catch(error){
        dispatch(userLoginFail(error.response.data.err.msg));
    }
  };
};

const userLoginSuccess = (success) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    success
  }
});

const userLoginFail = (error) => ({
  type: AUTH_LOGIN_ERR,
  payload: {
    error
  }
});

export const registerUser = (data)=> {
  return async (dispatch) => {
    try {
      let response = await AxiosApi.post("/auth/register", data);
      dispatch(userRegister(response.data.msg));
    }
    catch (error){
      dispatch(userRegisterFail(error.response.data.err.msg));
    }

  }
}

const userRegister = (success) => ({
  type: AUTH_REGISTER_SUCCESS,
  payload: {
    success
  }
});

const userRegisterFail = (error) => ({
  type: AUTH_REGISTER_FAIL,
  payload: {
    error
  }
})