import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProductI, RootState } from "../store";
import { Grid } from "@mui/material";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </Grid>
  );
}

export default Products;
