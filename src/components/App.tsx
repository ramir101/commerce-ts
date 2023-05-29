import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AuthI, RootState, loginWithToken } from "../store";
import { useDispatch } from "react-redux";
import { Login } from "./Login";
import { Container } from "@mui/material";

export const App = () => {
  const auth = useSelector<RootState>((state) => state.auth) as AuthI;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(loginWithToken());
  }, []);

  if (!auth.id) {
    return (
      <Container>
        <Login />
      </Container>
    );
  }

  return <Container>App</Container>;
};
