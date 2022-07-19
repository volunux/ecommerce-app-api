import { CountryNotFoundException } from './country-not-found-exception';

describe('CountryNotFoundException', () => {
  it('should be defined', () => {
    expect(new CountryNotFoundException()).toBeDefined();
  });
});
