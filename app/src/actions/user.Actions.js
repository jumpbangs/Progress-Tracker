import AxiosApi from "../utils/axios.config";

export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAIL = "FETCH_PROFILE_FAIL";

export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAIL = "UPDATE_PROFILE_FAIL";

export const fetchUserDetails = data => {
  return async dispatch => {
    try {
      let response = await AxiosApi.get("/user/profile", {
        headers: { usertoken: data }
      });
      dispatch(fetchProfileSuccess(response.data));
    } catch (error) {
      dispatch(fetchProfileFail(error));
    }
  };
};

const fetchProfileSuccess = success => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: {
    success
  }
});

const fetchProfileFail = error => ({
  type: FETCH_PROFILE_FAIL,
  payload: {
    error
  }
});

export const updateUserDetails = (data) => {
  return async dispatch => {
    try{
      let response = await AxiosApi.post("/user/profile", data);
      dispatch(updateUserSuccess(response.data));
    } catch (error) {
      dispatch(updateUserFail(error))
    }
  }
};

const updateUserSuccess = sucess => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: {
    sucess
  }
});

const updateUserFail = error => ({
  type: UPDATE_PROFILE_FAIL,
  payload:{
    error
  }
})
