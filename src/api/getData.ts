import axios from "axios";
import { type Product } from "@/types/Product";

const getData = async (): Promise<Product[]> => {
  const response = await axios<Product[]>('./src/api/data.json');
  const data = response.data;
  return data;
}

export const data: Product[] = await getData();
