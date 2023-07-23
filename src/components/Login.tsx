import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { attemptLogin } from "../store";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
    <Container>
      <Typography variant="h3" align="center" mt={7} gutterBottom>
        {" "}
        Commerce Project Login{" "}
      </Typography>
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
          <Button variant="contained" sx={{ margin: "auto", width: "50%" }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
