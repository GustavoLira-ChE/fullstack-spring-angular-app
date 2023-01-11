import { Product } from "./product.model";

export interface ProductCategory {
  id: number;
  categoryName: string,
  products: Product[]
}
