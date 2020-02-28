import AxiosApi from "../utils/axios.config";
import Etc from "../utils/etc";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

// export const loginUser = data => {
//   return dispatch => {
//     return AxiosApi.post("/auth/login", data)
//       .then(response => {
//         let res = Etc.convertToString(response);
//         localStorage.setItem("userToken", res.data.token);
//         localStorage.setItem("auth", res.data.auth);
//         // history.push("/home");
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };

export const loginUser = (data, history) => {
  return async dispatch => {
    try {
      const res = await AxiosApi.post("/auth/login", data);
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("auth", res.data.auth);
      history.push("/home");
    } catch(error){
        dispatch({
            type:'authentication_error',
            payload:error
        })
    }
  };
};
