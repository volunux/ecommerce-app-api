import { OrderNotFoundException } from './order-not-found-exception';

describe('OrderNotFoundException', () => {
  it('should be defined', () => {
    expect(new OrderNotFoundException()).toBeDefined();
  });
});
