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

type ActionProducti = {
  type: "SET_PRODUCT";
  product: ProductI;
};

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ActionProducti>) => {
    const response = await axios.get("/api/product");
    dispatch({ type: "SET_PRODUCT", product: response.data });
  };
};

const product = (state: ProductI[] = [], action: ActionProducti) => {
  if (action.type === "SET_PRODUCT") {
    return action.product;
  }
  return state;
};

export default product;
