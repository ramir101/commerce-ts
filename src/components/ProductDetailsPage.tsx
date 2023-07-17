import React from "react";
import { useSelector } from "react-redux";
import { ProductI, RootState } from "../store";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const products = useSelector<RootState>(
    (state) => state.products
  ) as ProductI[];
  const { id } = useParams();

  const specificProduct = products.find((product) => product.id === id);

  return <div>Product {specificProduct?.name}</div>;
}

export default ProductDetailsPage;
