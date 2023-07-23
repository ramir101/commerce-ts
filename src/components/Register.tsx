import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unitedStates } from "../../server/db/syncNseed/unitedStates";
import { Box, Button, InputLabel, MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    state: "AK",
    zip: "",
  });

  const onChange = (
    ev:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | SelectChangeEvent
  ) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  //   const login = (ev: React.FormEvent) => {
  //     ev.preventDefault();
  //     credentials.username && credentials.password && confirmPassword
  //       ? users.filter((user) => user.username === credentials.username).length
  //         ? alert("username taken")
  //         : credentials.password === confirmPassword
  //         ? dispatch(createUser(credentials), navigate("/"))
  //         : alert("password must match")
  //       : alert("all fields required");
  //   };

  return (
    <form>
      <Box
        id="createUser"
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="Username"
          value={credentials.username}
          name="username"
          onChange={onChange}
          variant="filled"
          fullWidth
          inputProps={{ maxLength: 10 }}
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
          inputProps={{ maxLength: 10 }}
        />
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="Email"
          value={credentials.email}
          name="email"
          onChange={onChange}
          variant="filled"
          fullWidth
        />
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="First Name"
          value={credentials.firstName}
          name="firstName"
          onChange={onChange}
          variant="filled"
          fullWidth
          inputProps={{ maxLength: 10 }}
        />
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="Last Name"
          value={credentials.lastName}
          name="lastName"
          onChange={onChange}
          variant="filled"
          fullWidth
          inputProps={{ maxLength: 10 }}
        />
        <Select
          labelId="state-select-helper-label"
          sx={{ margin: "auto", width: "50%" }}
          label="State"
          variant="filled"
          value={credentials.state}
          name="state"
          onChange={onChange}>
          {unitedStates.map((state) => (
            <MenuItem value={state}>{state}</MenuItem>
          ))}
        </Select>
        <TextField
          sx={{ margin: "auto", width: "50%" }}
          label="Zip Code"
          value={credentials.zip}
          name="zip"
          onChange={onChange}
          variant="filled"
          fullWidth
          inputProps={{ maxLength: 5 }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ margin: "auto", width: "50%" }}>
          Create Account
        </Button>
      </Box>
    </form>
  );
}

export default Register;
