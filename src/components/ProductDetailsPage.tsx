import React from "react";
import { useSelector } from "react-redux";
import { ProductI, RootState } from "../store";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import Product from "./Product";

function ProductDetailsPage() {
  const products = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];
  const { id } = useParams();

  const specificProduct = products.find((product) => product.id === id)!;
  let relatedProducts = products.filter(
    (product) =>
      product.petType === specificProduct.petType &&
      product.id !== specificProduct.id
  );

  if (relatedProducts.length > 4) {
    relatedProducts = relatedProducts.slice(0, 4);
  }

  return (
    <Container maxWidth={false} disableGutters>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "100%",
        }}>
        <CardHeader
          titleTypographyProps={{ variant: "h3" }}
          title={specificProduct.name}
        />
        <CardMedia
          sx={{ maxWidth: "50%", height: 450 }}
          component="img"
          image={specificProduct.imageUrl}
          alt={specificProduct.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center">
            {specificProduct.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="small">
            Add to cart
          </Button>
        </CardActions>
      </Card>
      <Typography variant="h3" align="center">
        Related Products
      </Typography>
      <Grid container spacing={2}>
        {relatedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default ProductDetailsPage;
