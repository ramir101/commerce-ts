import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProductI, RootState } from "../store";
import { Grid } from "@mui/material";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];
  return <Grid></Grid>;
}

export default Products;
