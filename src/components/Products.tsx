import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProductI, RootState } from "../store";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import Product from "./Product";
import { useParams } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];

  const { category } = useParams();

  const [value, setValue] = React.useState("all");

  let displayedProducts = products.filter((product) => {
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (value !== "all") {
    if (value === "Accessories") {
      displayedProducts = displayedProducts.filter(
        (product) => product.category === "accessory"
      );
    }
    if (value === "Food") {
      displayedProducts = displayedProducts.filter(
        (product) => product.category === "food"
      );
    }
    if (value === "Toys") {
      displayedProducts = displayedProducts.filter(
        (product) => product.category === "toy"
      );
    }
  }

  return (
    <Grid container>
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2" align="center">
            {category?.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} paddingBottom={"10px"}>
          <Tabs value={value} onChange={handleTabChange} centered>
            <Tab label="All" value={"all"} />
            <Tab label="Food" value={"Food"} />
            <Tab label="Toys" value={"Toys"} />
            <Tab label="Accessories" value={"Accessories"} />
          </Tabs>
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
