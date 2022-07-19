import { ProductRepositoryImpl } from './product.repository.impl';

describe('ProductRepository.Impl', () => {
  it('should be defined', () => {
    expect(new ProductRepositoryImpl()).toBeDefined();
  });
});
