import { CategoryNotFoundException } from './category-not-found-exception';

describe('CategoryNotFoundException', () => {
  it('should be defined', () => {
    expect(new CategoryNotFoundException()).toBeDefined();
  });
});
