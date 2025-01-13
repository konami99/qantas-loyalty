'use server'

import { Product } from "./models/Product";
import { NetworkService } from "./services/NetworkService";
import { CurrencySymbolConverter } from "./services/CurrencySymbolConverter";
import { StringHelper } from "./services/StringHelper";
import ProductModal from "./modals/ProductModal";

export default async function Home() {
  const products = await NetworkService.getProducts();

  return (
    <section>
      <div className="grid auto-rows-[1fr] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[1em] grid-flow-row-dense p-8">
        {
          products.data.search.products.map(async (product: Product, index: number) => {
            return ProductModal(product, index)
          }
        )}
      </div>
    </section>
  )
}