import { RoleNotFoundException } from './role-not-found-exception';

describe('RoleNotFoundException', () => {
  it('should be defined', () => {
    expect(new RoleNotFoundException()).toBeDefined();
  });
});
