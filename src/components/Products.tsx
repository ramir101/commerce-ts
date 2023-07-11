import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProductI, RootState } from "../store";
import { Grid } from "@mui/material";
import Product from "./Product";
import { useParams } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];

  const { category } = useParams();
  const displayedProducts = products.filter((product) => {
    if (category === "dogs" && product.petType === "dog") {
      return product;
    }
    if (category === "cats" && product.petType === "cat") {
      return product;
    }
    if (category === "all") {
      return product;
    }
  });

  return (
    <Grid container>
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <h1>{category?.toUpperCase()}</h1>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        {displayedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Products;
