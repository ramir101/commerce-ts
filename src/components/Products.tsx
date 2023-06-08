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
    <Grid container>
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <h1>test</h1>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Products;
