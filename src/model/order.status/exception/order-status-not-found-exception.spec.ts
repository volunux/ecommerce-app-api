import { OrderStatusNotFoundException } from './order-status-not-found-exception';

describe('OrderStatusNotFoundException', () => {
  it('should be defined', () => {
    expect(new OrderStatusNotFoundException()).toBeDefined();
  });
});
