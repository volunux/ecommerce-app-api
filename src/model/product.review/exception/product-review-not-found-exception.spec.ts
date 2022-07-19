import { ProductReviewNotFoundException } from './product-review-not-found-exception';

describe('ProductReviewNotFoundException', () => {
  it('should be defined', () => {
    expect(new ProductReviewNotFoundException()).toBeDefined();
  });
});
