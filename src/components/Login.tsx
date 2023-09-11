import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { attemptLogin } from "../store";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login(props: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setToggle } = props;

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
    <Box id="login" sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={login}>
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="Username"
          value={credentials.username}
          name="username"
          onChange={onChange}
          variant="filled"
          fullWidth
        />
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="Password"
          value={credentials.password}
          name="password"
          onChange={onChange}
          variant="filled"
          type="password"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ margin: "auto", width: "50%" }}>
          Login
        </Button>
        <Button
          variant="contained"
          onClick={() => setToggle(true)}
          sx={{ margin: "auto", width: "50%" }}>
          Create account
        </Button>
      </form>
    </Box>
  );
}

export default Login;
