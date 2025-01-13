import { NetworkService } from '../../app/services/NetworkService';
import { Product } from '../../app/models/Product';
import { ProductDetails } from '../../app/models/ProductDetails';

describe('getProducts', () => {
  let result: ProductDetails;

  beforeEach(async () => {
    result = await NetworkService.getProducts();
  })

  it('should returns an array containing products', async () => {
    expect(result.data.search.products).toBeInstanceOf(Array<Product>);
  });

  it('should return a total', async () => {
    expect(typeof result.data.search.total).toBe('number');
  })
});