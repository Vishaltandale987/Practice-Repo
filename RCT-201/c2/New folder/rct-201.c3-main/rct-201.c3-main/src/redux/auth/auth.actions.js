// import { FEED_GET_RESET } from "../feed/feed.actionType";
// import { POSTS_GET_RESET } from "../post/post.actionType";
import { AUTH_GET_ERROR, AUTH_GET_LOADING, AUTH_GET_RESET, AUTH_GET_SUCCESS } from "./auth.types";
import { loginApi } from "./auth.api";

export const login = async (dispatch, creds) => {
    dispatch({ type: AUTH_GET_LOADING });
  
    try {
      let data = await loginApi(creds);
      dispatch({ type: AUTH_GET_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: AUTH_GET_ERROR });
    }
  };

  export const logout =(dispatch) => {
    dispatch({type:AUTH_GET_RESET})
    
  }