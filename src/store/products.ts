import axios from "axios";
import { Dispatch } from "redux";

export type ProductI = {
  id: string;
  name: string;
  price: string;
  description: string;
  stock: number;
  imageUrl: string;
  petType: "dog" | "cat";
  category: "food" | "toy" | "accessory";
};

export type ActionProducti = {
  type: "SET_PRODUCTS";
  product: ProductI[];
};

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ActionProducti>) => {
    const response = await axios.get("/api/products");
    dispatch({ type: "SET_PRODUCTS", product: response.data });
  };
};

const products = (state: ProductI[] = [], action: ActionProducti) => {
  if (action.type === "SET_PRODUCTS") {
    return action.product;
  }
  return state;
};

export default products;
