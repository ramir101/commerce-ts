import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, loginWithToken } from "../store";
import { useDispatch } from "react-redux";
import { Login } from "./Login";
import { Container } from "@mui/material";

export const App = () => {
  const auth = useSelector<RootState, boolean>((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(loginWithToken());
  }, []);

  if (!auth) {
    return (
      <Container>
        <Login />
      </Container>
    );
  }

  return <Container>App</Container>;
};
