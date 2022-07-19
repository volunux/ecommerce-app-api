import { ConfigurationProperties } from './configuration.properties';

describe('ConfigurationProperties', () => {
  it('should be defined', () => {
    expect(new ConfigurationProperties(null)).toBeDefined();
  });
});
