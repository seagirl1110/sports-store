import axios from "axios";
import { type Product } from "@/types/Product";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios<Product[]>('./src/api/data.json');
  const data = response.data;
  return data;
}

export const products: Product[] = await getProducts();
