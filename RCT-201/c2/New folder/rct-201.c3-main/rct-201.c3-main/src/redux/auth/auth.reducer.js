import {
  AUTH_GET_ERROR,
  AUTH_GET_LOADING,
  AUTH_GET_RESET,
  AUTH_GET_SUCCESS,
} from "./auth.types.js";

let initionaldata = {
  loading: false,
  error: false,
  isLoggedIn: false,
  token: "",
};
export const authReducer = (state = initionaldata, { type, payload }) => {
  switch (type) {
    case AUTH_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case AUTH_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case AUTH_GET_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        loading: false,
      };
    }

    case AUTH_GET_RESET: {
      return {
        ...initionaldata,
      };
    }

    default: {
      return state;
    }
  }
};
