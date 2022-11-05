// reducer related to auth state;

// reducer related to auth state;
function reducer(state, action) {
  switch (action.type) {
    //   case "LOGIN_LOADING": {
    //     return {
    //       isLoading: false
    //       // isAuth: false,
    //       // token: "",
    //       // isError: false,
    //     };
    //   }

    case "LOGIN_SUCCESS": {
      return {
        isLoading: false,
        isAuth: true,
        token: action.payload,
        isError: false,
      };
    }

    case "LOGIN_FAILURE": {
      return {
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
