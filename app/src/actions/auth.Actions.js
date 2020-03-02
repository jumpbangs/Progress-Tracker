import AxiosApi from "../utils/axios.config";

export const AUTH_ERR_LOGIN = "AUTH_ERR_LOGIN";


export const loginUser = (data, history) => {
  return async dispatch => {
    try {
      const res = await AxiosApi.post("/auth/login", data);
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("auth", res.data.auth);
      history.push("/home");
    } catch(error){
        dispatch({
            type: AUTH_ERR_LOGIN,
            payload: error.response.data
        });
    }
  };
};


