import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ActionProducti,
  RootState,
  fetchProducts,
  fetchUser,
  loginWithToken,
} from "../store";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { Container } from "@mui/material";
import Nav from "./Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Products from "./Products";

function App() {
  const auth = useSelector<RootState, boolean>((state) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch<any>(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth === true) {
      dispatch<any>(fetchUser());
      dispatch<any>(fetchProducts());
    }
  }, [auth]);

  if (!auth) {
    return (
      <Container>
        <Login />
      </Container>
    );
  }

  if (pathname === "/") {
    navigate("/products");
  }

  return (
    <Container maxWidth={false} disableGutters>
      <Nav />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </Container>
  );
}

export default App;
