import { UserCreatedDto } from './user-created.dto';

describe('UserCreatedDto', () => {
  it('should be defined', () => {
    expect(new UserCreatedDto()).toBeDefined();
  });
});
