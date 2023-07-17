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
} from "@mui/material";

function ProductDetailsPage() {
  const products = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];
  const { id } = useParams();

  const specificProduct = products.find((product) => product.id === id)!;
  const filteredProducts = products.filter(
    (product) =>
      product.petType === specificProduct.petType &&
      product.id !== specificProduct.id
  );

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
          title={specificProduct.name}
          subheader={`For ${specificProduct.petType}s`}
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
    </Container>
  );
}

export default ProductDetailsPage;
