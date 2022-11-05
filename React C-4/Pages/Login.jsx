import React from "react";
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { login_failuer, login_success } from "../Context/AuthContext/action";
import { AppContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";


function loginUser({ email, password }) {
  if (!email || !password) {
    return Promise.reject("email or password is missing");
  }

  return axios.post("https://reqres.in/api/login", {
    email,
    password,
  });
}

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const FormRef = React.useRef();
  const { state, dispatch } = useContext(AppContext);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password })
      .then((res) => {
        dispatch(login_success(res.data.token));
      })
      .catch((err) => {
        dispatch(login_failuer());
      });
  };

  if (state.isAuth) {
    return (
      <div>
        <h1> Welcome to the dashboard </h1>
        <h3> Token: {state.token} </h3>
        return <Navigate to="/" />;
      </div>
    );
  }

   if (state.isError) {
    return <h1> Error</h1>;
  }

  return (
    <div>
      <h4>Login</h4>

      <form onSubmit={handleSubmit} ref={FormRef}>
        {state.isLoading ? "Loading..." : null}
        {state.isError && "something went wrong"}
        <div>
          <label>
            Email:
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input
            type="submit"
            onClick={() => FormRef.current.reset()}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
