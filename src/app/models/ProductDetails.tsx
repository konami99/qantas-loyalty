import { Product } from "./Product"


export type ProductDetails = {
  data: {
    search: {
      total: number,
      products: Product[],
    }
  }
}