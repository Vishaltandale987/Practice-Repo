// action creators related to auth state;
export const login_failuer = () => ({
  type: "LOGIN_FAILURE",
});

export const login_success = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});
