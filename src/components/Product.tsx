import { Grid } from "@mui/material";
import React from "react";
import { ProductI } from "../store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";

interface Props {
  product: ProductI;
}

//Consider using Card for the products. Will require some customization
function Product(props: Props) {
  return (
    <Grid item xs={6} md={4} lg={3} sx={{ display: "flex" }}>
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}>
        <CardMedia
          sx={{ height: 300 }}
          image={props.product.imageUrl}
          title={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {props.product.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="small">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
