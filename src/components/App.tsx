import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, fetchUser, loginWithToken } from "../store";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { Container } from "@mui/material";
import Header from "./Nav";
import Nav from "./Nav";

function App() {
  const auth = useSelector<RootState, boolean>((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth === true) {
      dispatch<any>(fetchUser());
    }
  }, [auth]);

  if (!auth) {
    return (
      <Container>
        <Login />
      </Container>
    );
  }

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <div style={{ height: "60px" }}></div>
    </div>
  );
}

export default App;
