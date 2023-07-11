import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { attemptLogin } from "../store";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (
    ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const login = (ev: React.FormEvent) => {
    ev.preventDefault();
    dispatch<any>(attemptLogin(credentials));
    navigate("/products/all");
  };

  return (
    <Box>
      <div id="login">
        <form onSubmit={login}>
          <h2>Login</h2>
          <label>Username</label>
          <input
            value={credentials.username}
            name="username"
            onChange={onChange}
          />
          <label>Password</label>
          <input
            name="password"
            value={credentials.password}
            onChange={onChange}
            type="password"
          />
          <button>Sign In</button>
        </form>
      </div>
    </Box>
  );
}

export default Login;
