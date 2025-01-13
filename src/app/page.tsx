import { Product } from "./models/Product";
import { NetworkService } from "./services/NetworkService";
import { CurrencySymbolConverter } from "./services/CurrencySymbolConverter";
import { StringHelper } from "./services/StringHelper";
import Image from "next/image";

export default async function Home() {
  const products = await NetworkService.getProducts("https://api.qantas.com");

  return (
    <section>
      <div className="grid auto-rows-[1fr] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[1em] grid-flow-row-dense p-8">
        {
          products.data.search.products.map(async (product: Product, index) => {
            const imageUrl = product.image ?? product.imageSrc;
            const response = await fetch(imageUrl);

            return (
              <div key={ index } className="product relative border border-[#E6E6E6] px-[1.5rem] py-[2rem] bg-slate-50">
                {
                  product.tag && <div className="tag w-[60px] rounded-br-lg uppercase text-center absolute left-0 top-0 bg-green-100">{ product.tag }</div>
                }
                <div className="header flex flex-col">
                  <div className="uppercase mt-5">{ product.name }</div>
                  <div>{ StringHelper.truncate(product.description) }</div>
                </div>
                <div className="body flex flex-col justify-center">
                  <div className="flex justify-center my-8">
                    <Image
                      className="dark:invert"
                      src={ product.image ?? product.imageSrc }
                      alt="image"
                      width={200}
                      height={200}
                    />
                  </div>
                  {
                    product.wasPrice &&
                    <div className="wasPrice"><s>{ CurrencySymbolConverter.convert(product.wasPrice.cashPrice.currencyCode) } { product.wasPrice.cashPrice.amount }</s></div>
                  }
                  {
                    !product.wasPrice &&
                    <div className="wasPrice">&nbsp;</div>
                  }
                  {
                    product.wasPrice &&
                    <div className="currentPrice"><span className="text-red-600">{ CurrencySymbolConverter.convert(product.currentPrice.cashPrice.currencyCode) } { product.currentPrice.cashPrice.amount }</span></div>
                  }
                  {
                    !product.wasPrice &&
                    <div className="currentPrice">{ CurrencySymbolConverter.convert(product.currentPrice.cashPrice.currencyCode) } { product.currentPrice.cashPrice.amount }</div>
                  }
                </div>
                <div className="footer flex sm:flex-row flex-col mt-6">
                  <div className="flex flex-col sm:w-1/2 w-full">
                    <div className="currentPoints">Or <span className="text-red-600">{ product.currentPrice.pointsPrice.amount } PTS</span></div>
                    {
                      product.wasPrice &&
                      <div className="wasPoints"><s>{ product.wasPrice.pointsPrice.amount } PTS</s></div>
                    }
                  </div>
                  <div className="addToBasket sm:w-1/2 w-full">
                    <div className="bg-red-600 text-white h-full rounded-md flex items-center justify-center h-24 sm:h-12">ADD</div>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}