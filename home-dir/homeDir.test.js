import { homeDir } from './homeDir';

describe('Template Test', () => {
  test('Template Test', () => {
    expect(homeDir()).toBe('/home/mayank');
  });
});
