import { UserStatusNotFoundException } from './user-status-not-found-exception';

describe('UserStatusNotFoundException', () => {
  it('should be defined', () => {
    expect(new UserStatusNotFoundException()).toBeDefined();
  });
});
