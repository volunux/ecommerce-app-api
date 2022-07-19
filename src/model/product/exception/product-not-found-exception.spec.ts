import { ProductNotFoundException } from './product-not-found-exception';

describe('ProductNotFoundException', () => {
  it('should be defined', () => {
    expect(new ProductNotFoundException()).toBeDefined();
  });
});
